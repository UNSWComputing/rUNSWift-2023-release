import React, { useContext, useState } from 'react';
import CameraViewer from '../components/CameraViewer';
import { CameraInstance } from '../common/models/cameraFrame';
import { VideoViewType } from '../components/CameraView';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { ArrowDownward, ArrowUpward, CameraEnhance, CameraFront, FeaturedVideo } from '@mui/icons-material';
import Title from '../components/Title';
import { BlackboardContext } from '../context/BlackboardContext';
import CameraSettingsControl from '../components/CameraSettingsControl';
import DumpPlayerControl from '../components/DumpPlayerControl';
import { CameraViewContext, CameraViewContextProvider } from '../context/CameraViewContext';
import VideoLayersControl from '../components/VideoLayersControl';
import StreamStats from '../components/StreamStats/StreamStats';
import CameraViewGroup from '../components/CameraViewGroup';
import CameraControlGroup from '../components/CameraControlGroup';

export default function VisionPage() {
  return (
    <React.Fragment>
      <DumpPlayerControl/>
      <Title>Vision</Title>
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', padding: '5px', justifyContent: 'space-between'}}>
        <CameraControlGroup />
        <Box sx={{ flexGrow:1 }}>
          <CameraViewGroup/>
        </Box>
      </Box>
    </React.Fragment>
  );
}
