import React from 'react';
import { Vision } from '../common/blackboard/definitions/Blackboard';
import VisionFeaturesOverlay from './VisionFeaturesOverlay';
import CameraView, { VideoViewType } from './CameraView';
import { CameraInstance } from '../common/models/cameraFrame';

interface CompositeVideoViewProps {
  image: Uint8Array;
  viewType: VideoViewType;
  vision: Vision | null;
  camera: CameraInstance;
  showOverlay?: boolean;
}

const CompositeVideoView = ({vision, image, viewType, camera, showOverlay = true}: CompositeVideoViewProps) => {
  
  return (
      <div style={{position: 'relative' }}>
        { showOverlay ? 
          <VisionFeaturesOverlay vision={vision} type={viewType} camera={camera} /> : null
        }
        <CameraView image={image} type={viewType} camera={camera}/>
      </div>
  );
};

export default CompositeVideoView;
