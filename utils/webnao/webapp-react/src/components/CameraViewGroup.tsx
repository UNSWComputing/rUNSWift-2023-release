import React, { useContext } from 'react';
import { CameraViewContext } from '../context/CameraViewContext';
import { Box } from '@mui/material';
import VideoLayersControl from './VideoLayersControl';
import StreamStats from './StreamStats/StreamStats';
import CameraViewer from './CameraViewer';


export default function CameraViewGroup() {
  const cameraViewCtx = useContext(CameraViewContext);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '5px'}} >
          <VideoLayersControl/>
          <StreamStats/>
          { cameraViewCtx?.videoViewType != null ?<CameraViewer 
            enabledCameras={cameraViewCtx?.enabledCameras} 
            videoViewType={cameraViewCtx?.videoViewType}
            showOverlay={cameraViewCtx?.showOverlay}
            ></CameraViewer> : null}
        </Box>
    </React.Fragment>
  );
}
