import React, { useContext } from 'react';
import Title from '../components/Title';
import { BlackboardContext } from '../context/BlackboardContext';

import { maskToFlags } from '../common/blackboard/utils';
import DumpPlayerControl from '../components/DumpPlayerControl';
import FieldView, { PoseHypothesis, RobotFieldInfo } from '../components/FieldView';
import { RobotInfo, RobotTeamInfo } from '../common/models/robotsInfo';
import { Blackboard } from '../common/blackboard';
import CameraViewer from '../components/CameraViewer';
import { CameraInstance } from '../common/models/cameraFrame';
import { VideoViewType } from '../components/CameraView';
import { Stack } from '@mui/material';
import KinematicsControls from '../components/KinematicsControls';


export default function KinematicsPage() {
  const blackboardStream = useContext(BlackboardContext)
  
  return (
    <React.Fragment>
      <Title>Kinematics</Title>
      <Stack direction='row'>
      <CameraViewer 
          enabledCameras={[CameraInstance.top, CameraInstance.bottom]} 
          videoViewType={VideoViewType.salience}
          showOverlay={true}
          ></CameraViewer> : null
      <KinematicsControls/>
      </Stack>
      
    </React.Fragment>
  );
}
