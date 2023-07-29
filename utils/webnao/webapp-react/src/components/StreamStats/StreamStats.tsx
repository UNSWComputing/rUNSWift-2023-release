import React, { useContext } from 'react';
import { BlackboardContext } from '../../context/BlackboardContext';
import { SportsFootball, SportsSoccer, WarningAmber } from '@mui/icons-material';
import { Box } from '@mui/material';
import './StreamStats.css'

export default function StreamStats() {
  const blackboardStream = useContext(BlackboardContext);
  const stats = blackboardStream?.streamProperties?.stats;
  const ballPercentage = stats?.ballPercentage.toFixed(1);
  const robotPercentage = stats?.robotPercentage.toFixed(1);
  const fieldFeaturePercentage = stats?.fieldFeaturePercentage.toFixed(1);
  const centerCirclePercentage = stats?.centerCirclePercentage.toFixed(1);
  const FPS = stats?.FPS.toFixed(0);
  const frame = blackboardStream?.streamProperties?.frame;
  const frameDropped = frame?.dropped;
  const delay = frame?.delay;

  const isLive = blackboardStream?.streamProperties?.isLive;

  let delayInfo = null;
  if (isLive && frameDropped) {
    delayInfo = '⚠️';
  }
  return (
    <React.Fragment>
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div className={frame?.observation.ballSeen ? 'emphasized' : ''}>⚽️ {ballPercentage}%&nbsp;</div>
        <div className={frame?.observation.robotSeen ? 'emphasized' : ''}>🤖 {robotPercentage}%&nbsp;</div>
        <div className={frame?.observation.fieldFeatureSeen ? 'emphasized' : ''}>🔍 {fieldFeaturePercentage}%&nbsp;</div>
        <div className={frame?.observation.centerCircleSeen ? 'emphasized' : ''}>⭕️ {centerCirclePercentage}%&nbsp;</div>
        <div>{FPS} FPS {delayInfo}&nbsp;</div>
      </Box>
    </React.Fragment>
  );
}