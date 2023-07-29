import { Stage } from '@pixi/react';
import { Graphics } from '@pixi/react';
import React, { useCallback, ComponentProps, useEffect } from 'react';
import { Vision, Vision_FieldFeatureInfoType } from '../common/blackboard/definitions/Blackboard';
import { CameraFrame, CameraInstance } from '../common/models/cameraFrame';
import { isSensiblePoint } from '../common/utils/geomety';
import { VideoViewType } from './CameraView';

interface VisionFeaturesViewProps {
  vision: Vision | null;
  camera: CameraInstance;
  type: VideoViewType;
}
type Draw = Required<ComponentProps<typeof Graphics>>['draw'];

const VisionFeaturesOverlay = ({vision, camera, type}: VisionFeaturesViewProps) => {
  const pixelRatio = (window.devicePixelRatio || 1);
  let width: number;
  let height: number;
  let scale: number;
  switch (camera) {
    case CameraInstance.top:
      width = CameraFrame.topCameraWidth;
      height = CameraFrame.topCameraHeight;
      scale = 1.0;
    break;
    case CameraInstance.bottom:
      width = CameraFrame.bottomCameraWidth
      height = CameraFrame.bottomCameraHeight;
      scale = 1.0;  
    break;
  }
  const draw = useCallback<Draw>((g) => {
    g.clear();

    
    // balls
    const balls = vision?.balls;
    if (balls?.length) {
      g.lineStyle(3, 0xff0000, 1);
      for (const ball of balls) {

        const isInCurrentCamera = 
          (ball.topCamera && camera === CameraInstance.top)
          ||
          (!ball.topCamera && camera === CameraInstance.bottom);
        if (isInCurrentCamera && isSensiblePoint(ball.imageCoords)) {
          g.drawCircle(ball.imageCoords?.x! / scale, ball.imageCoords?.y!, ball.radius / scale);
        }
      }
      g.lineStyle(0, 0xffffff, 0);
    }

    // robots
    if (vision?.robots?.length) {
      g.lineStyle(3, 0x00ff00, 1);
      for (const robot of vision?.robots) {

        const box = camera === CameraInstance.top? robot.topImageCoords : robot.botImageCoords;
        if (box?.a && box?.b && isSensiblePoint(box.a)) {
          const x = box.a.x / scale;
          const y = box.a.y / scale;
          const width = (box.b.x / scale) - x;
          const height = (box.b.y / scale) - y ;
          g.drawRect(x, y, width, height);
        }
      }
      g.lineStyle(0, 0xffffff, 0);
    }

    // regions
    if (vision?.regions.length) {
      g.lineStyle(3, 0x3B8CE7, 1);
      for (const region of vision?.regions || []) {

        const isInCurrentCamera = 
          (region.isTopCamera && camera === CameraInstance.top)
          ||
          (!region.isTopCamera && camera === CameraInstance.bottom);
        if (!isInCurrentCamera) {
          continue;
        }
        const box = region.boundingBoxRaw;
        if (box && box.a && box.b) {
          const x = box.a.x / scale;
          const y = box.a.y / scale;
          const width = (box.b.x / scale) - x;
          const height = (box.b.y / scale) - y;
          g.drawRect(x, y, width, height);
        }
      }
      
      g.lineStyle(0, 0xffffff, 0);
    }

    if (vision?.fieldBoundaries) {
      g.lineStyle(2, 0xFFCC00, 1);
      for (const boundary of vision?.fieldBoundaries || []) {
        if (boundary.imageBoundary?.p1 && boundary.imageBoundary?.p2) {
          const isInCurrentCamera = camera === CameraInstance.top;
          const line = boundary.imageBoundary;
          if (isInCurrentCamera && line?.t1 && line?.t2 && line.t3) {
            const x1 = 0;
            const y1 = -1 * line?.t3 / line.t2;
            const x2 = width -1;
            const y2 = ((-line.t3 - line.t1 * (height-1))) / line.t2;
            g.moveTo(x1, y1);
            g.lineTo(x2, y2);
          }
        }
      }
      g.lineStyle(0, 0xffffff, 0);
    }
  }, [vision]);
  useEffect(() => {
    const canvasElements = document.getElementsByClassName('vision-features-overlay');
    const styleOverride = 'position: absolute; width: 100%; height:100%';
    for (let i = 0; i< canvasElements.length; i++) {
      const canvasElement = canvasElements[i] as HTMLElement;
      if (canvasElement.style.width !== '100%') {
        canvasElement.setAttribute('style', styleOverride);
      }
    }
  }, [vision]);
  return (
    <Stage 
      width={width} 
      height={height} 
      className='vision-features-overlay'
      options={{
        backgroundAlpha: 0,
        resolution: pixelRatio,
        antialias: true,
      }} 
      style={{ 
        position: 'absolute'
      }}>
      <Graphics draw={draw} />
    </Stage>
  );
};

export default VisionFeaturesOverlay;
