import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import { BlackboardContext } from '../context/BlackboardContext';

import { maskToFlags } from '../common/blackboard/utils';
import DumpPlayerControl from '../components/DumpPlayerControl';
import FieldView, { LocationHypothesis, PoseHypothesis, RobotFieldInfo } from '../components/FieldView';
import { RobotInfo, RobotTeamInfo } from '../common/models/robotsInfo';
import { Blackboard } from '../common/blackboard';
import { Box, Button, IconButton, Input } from '@mui/material';
import CameraViewGroup from '../components/CameraViewGroup';
import { Add } from '@mui/icons-material';

export default function PositioningPage() {
  const _robots: RobotFieldInfo[] = [];
  const [robots, setRobots] = useState<RobotFieldInfo[]>([]);
  
  const addRobot = () => {
    const nextIndex = robots.length + 1;
    robots.push({
      locations: [{ fX: 0, fY: 0, probability: 1, orientation: 0}],
      ballPositions: [],
      name: `Robot ${nextIndex}`,
      teamInfo: {
        playerNumber: nextIndex
      }
    });
    setRobots([...robots]);
  };
  return (
    <React.Fragment>
      <DumpPlayerControl/>
      <Title>Positioning</Title>
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', padding: '5px', justifyContent: 'space-between'}}>
        <FieldView robots={robots}/>
        <Box sx={{ flexGrow: 1}}>
          Robots:
          <IconButton
            edge="start"
            color="inherit"
            aria-label="add robot"
            onClick={addRobot}
          >
            <Add/>
          </IconButton>
          <Box sx={{display: 'flex', flexDirection: 'column' }}>
          {robots.map(r => <div>
            {r.name}: <Input value={r.locations[0].fX}/> <Input value={r.locations[0].fY}/>
          </div>)}
          </Box>
          
        </Box>
      </Box>
    </React.Fragment>
  );
}
