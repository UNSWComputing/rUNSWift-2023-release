import { ArrowDownward, ArrowUpward, CameraEnhance, CameraFront, FeaturedVideo } from '@mui/icons-material';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext } from 'react';
import { CameraInstance } from '../common/models/cameraFrame';
import { VideoViewType } from './CameraView';
import { CameraViewContext } from '../context/CameraViewContext';
import { BlackboardContext } from '../context/BlackboardContext';
import { maskToFlags } from '../common/blackboard/utils';

export default function VideoLayersControl() {
  const cameraViewCtx = useContext(CameraViewContext);
  const blackboardStream = useContext(BlackboardContext);
  const maskFlags = maskToFlags(blackboardStream?.blackboard?.mask || 0);
  const videoStreamAvailable = maskFlags.rawImage || maskFlags.saliency;
  const cameraInstanceChanged = (event: React.MouseEvent<HTMLElement>, newValue: CameraInstance[]) => {
    if (cameraViewCtx) {
      cameraViewCtx.setEnabledCameras(newValue);
      if (newValue.length && !cameraViewCtx.videoViewType) {
        if (maskFlags.rawImage) {
          cameraViewCtx.setVideoViewType(VideoViewType.camera);
        } else if (maskFlags.saliency) {
          cameraViewCtx.setVideoViewType(VideoViewType.salience);
        }
      }
    }
  };
  const videoTypeChanged = (event: React.MouseEvent<HTMLElement>, newValue: VideoViewType) => {
    if (cameraViewCtx) {
      cameraViewCtx.setVideoViewType(newValue);
      if (newValue && !cameraViewCtx.enabledCameras.length) {
        cameraViewCtx.setEnabledCameras([CameraInstance.top]);
      }
    }
  };
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'row', padding: '5px'}}>
        <ToggleButtonGroup value={cameraViewCtx?.enabledCameras} disabled={!videoStreamAvailable} onChange={cameraInstanceChanged}>
          <ToggleButton value={CameraInstance.top}>
            <ArrowUpward></ArrowUpward>
          </ToggleButton>
          <ToggleButton value={CameraInstance.bottom}>
            <ArrowDownward></ArrowDownward>
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={cameraViewCtx?.videoViewType} exclusive onChange={videoTypeChanged}>
          <ToggleButton value={VideoViewType.camera} disabled={!maskFlags.rawImage}>
            <CameraFront/>
          </ToggleButton>
          <ToggleButton value={VideoViewType.salience} disabled={!maskFlags.saliency}>
            <CameraEnhance/>
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButton value='check'
          selected={cameraViewCtx?.showOverlay}
          disabled={!maskFlags.blackboard}
          onChange={() => {cameraViewCtx?.setShowOverlay(!cameraViewCtx?.showOverlay);}}
        >
          <FeaturedVideo></FeaturedVideo>
        </ToggleButton>
      </Box>
    </React.Fragment>
  );
}