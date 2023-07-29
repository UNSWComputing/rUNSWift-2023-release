import React, { ChangeEvent, useContext, useState } from 'react';
import { Checkbox, Slider, Stack, TextField, debounce } from '@mui/material';
import { BlackboardContext } from '../context/BlackboardContext';
import { Configurator } from '../common/models/configurator';
import { CameraSettings } from '../common/models/cameraSettings';
import { CameraSetting } from '../common/models/cameraSettings';
import { CameraInstance, cameraInstanceId } from '../common/models/cameraFrame';
import { CameraViewContext } from '../context/CameraViewContext';
interface CameraControlsProps {
  camera: CameraInstance;
}
export default function CameraSettingsControl({camera}: CameraControlsProps) {
  const blackboardStream = useContext(BlackboardContext);
  const currentSettings = 
    camera === CameraInstance.top ? 
      blackboardStream?.blackboard?.vision?.topCameraSettings :
      blackboardStream?.blackboard?.vision?.botCameraSettings;
  const cameraSettings: {[key: string]: number} = {
    brightness: currentSettings?.brightness || CameraSettings.brightness.range[1],
    contrast: currentSettings?.contrast || CameraSettings.contrast.range[1],
    gain: currentSettings?.gain || CameraSettings.gain.range[1],
    exposure: currentSettings?.exposure || CameraSettings.exposure.range[1],
    saturation: currentSettings?.saturation || CameraSettings.saturation.range[1],
    backlightCompensation: currentSettings?.backlightCompensation || CameraSettings.backlightCompensation.range[1],
    exposureAuto: currentSettings?.exposureAuto || 0
  };
  const [brightness, setBrightness] = useState<number>(cameraSettings.brightness);
  const [gain, setGain] = useState<number>(cameraSettings.gain);
  const [contrast, setContrast] = useState<number>(cameraSettings.contrast);
  const [exposure, setExposure] = useState<number>(cameraSettings.exposure);
  const [saturation, setSaturation] = useState<number>(cameraSettings.saturation);
  const [exposureEnabled, setExposureEnabled] = useState<boolean>(cameraSettings.exposureAuto === 1);
  const [backlightCompensation, setBacklightCompensation] = useState<number>(cameraSettings.backlightCompensation);
  const [busy, setBusy] = useState<boolean>(false);
  const isReadonly = false && !blackboardStream?.streamProperties?.isLive;
  
  // TODO: add debounce
  const updateCameraSettings: () => Promise<void> = debounce(async () => {
    setBusy(true);
    try {
      const configMap = new Map<CameraSetting, number>([
        [CameraSettings.brightness, cameraSettings.brightness],
        [CameraSettings.contrast, cameraSettings.contrast],
        [CameraSettings.gain, cameraSettings.gain],
        [CameraSettings.exposure, cameraSettings.exposure],
        [CameraSettings.saturation, cameraSettings.saturation],
        [CameraSettings.backlightCompensation, cameraSettings.backlightCompensation],
      ]);
      if (!exposureEnabled) {
        configMap.delete(CameraSettings.exposure);
      } else {
        configMap.delete(CameraSettings.backlightCompensation);
      }
      // await new Promise(resolve => setTimeout(resolve, 2000));
      const configItem = Configurator.configureCameraSettings(
        cameraInstanceId(camera), 
        configMap
      );
      
      const config = new Map<string, string>();
      config.set(...configItem);
      const command = Configurator.toCommand(config);
      blackboardStream?.sendCommand(command);
    } finally {
      setTimeout(() => setBusy(false), 500);
    }
  }, 2000);
  const onBrightnessChange = (event: Event, newValue: number | number[]) => {
    if (typeof(newValue) === 'number') {
      setBrightness(newValue);
      cameraSettings.brightness = newValue;
      updateCameraSettings();
    }
  };
  const onGainChange = (event: Event, newValue: number | number[]) => {
    if (typeof(newValue) === 'number') {
      setGain(newValue);
      cameraSettings.gain = newValue;
      updateCameraSettings();
    }
  };
  const onContrastChange = (event: Event, newValue: number | number[]) => {
    if (typeof(newValue) === 'number') {
      setContrast(newValue);
      cameraSettings.contrast = newValue;
      updateCameraSettings();
    }
  };
  const onExposureChange = (event: Event, newValue: number | number[]) => {
    if (typeof(newValue) === 'number') {
      setExposure(newValue);
      cameraSettings.exposure = newValue;
      updateCameraSettings();
    }
  };
  const onSettingChange = (setting: keyof typeof CameraSettings, newValue: number) => {
    switch (setting) {
        case 'brightness':
          setBrightness(newValue);
          break;
        case 'contrast':
          setContrast(newValue);
          break;
        case 'exposure':
          setExposure(newValue);
          break;
        case 'gain':
          setGain(newValue);
          break;
        case 'saturation':
          setSaturation(newValue);
          break;
        case 'backlightCompensation':
          setBacklightCompensation(newValue);
          break;
        default:
          break;
      }
      cameraSettings[setting] = newValue;
      updateCameraSettings();
  };
  const onSliderChange = (setting: keyof typeof CameraSettings) =>  (event: Event, newValue: number | number[]) => {
    if (typeof(newValue) === 'number') {
      onSettingChange(setting, newValue);
    }
  };
  const onInputChange = (setting: keyof typeof CameraSettings) =>  (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    const numValue = parseInt(newValue, 10);
    if (Number.isInteger(numValue)) {
      onSettingChange(setting, numValue);
    }
  };
  return (
    <React.Fragment>
      <Stack direction='column'>
        <h3 style={{textTransform: 'capitalize'}}>{camera} Camera</h3>
        <Stack direction='column'>
          Brightness: {brightness}
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.brightness.range[1]}</div>
            <Slider 
              value={brightness} 
              disabled={busy || isReadonly}
              min={CameraSettings.brightness.range[1]}
              max={CameraSettings.brightness.range[0]}
              onChange={onBrightnessChange}></Slider>
            <div>{CameraSettings.brightness.range[0]}</div>
          </Stack>
        </Stack>
        <Stack direction='column'>
          Gain: {gain}
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.gain.range[1]}</div>
            <Slider 
              value={gain} 
              disabled={busy || isReadonly}
              min={CameraSettings.gain.range[1]}
              step={25}
              marks={true}
              max={CameraSettings.gain.range[0]}
              onChange={onGainChange}></Slider>
            <div>{CameraSettings.gain.range[0]}</div>
          </Stack>
        </Stack>
        <Stack direction='column'>
          <Stack direction='row' sx={{alignItems: 'center'}}>
          Exposure: {exposure} <Checkbox
              disabled={cameraSettings.exposureAuto === 1}
              checked={exposureEnabled}
              onChange={(e: ChangeEvent<HTMLInputElement>, checked: boolean) => {setExposureEnabled(checked)}}
            /></Stack>
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.exposure.range[1]}</div>
            <Slider 
              value={exposure} 
              disabled={busy || isReadonly || !exposureEnabled}
              step={50}
              marks={true}
              min={CameraSettings.exposure.range[1]}
              max={CameraSettings.exposure.range[0]}
              onChange={onExposureChange}></Slider>
            <div>{CameraSettings.exposure.range[0]}</div>
          </Stack>
        </Stack>
        <Stack direction='column'>
          Contrast: {contrast}
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.contrast.range[1]}</div>
            <Slider 
              value={contrast}
              min={CameraSettings.contrast.range[1]}
              step={10}
              marks={true}
              max={CameraSettings.contrast.range[0]}
              disabled={busy || isReadonly}
              onChange={onContrastChange}>
            </Slider>
            <div>{CameraSettings.contrast.range[0]}</div>
          </Stack>
        </Stack>
        <Stack direction='column'>
          Saturation:  {saturation}
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.saturation.range[1]}</div>
            <Slider 
              value={saturation}
              min={CameraSettings.saturation.range[1]}
              max={CameraSettings.saturation.range[0]}
              step={10}
              marks={true}
              disabled={busy || isReadonly}
              onChange={onSliderChange('saturation')}>
            </Slider>
            <div>{CameraSettings.saturation.range[0]}</div>
          </Stack>
        </Stack>
        <Stack direction='column'>
          Backlight compensation:  {backlightCompensation}
          <Stack spacing={2} direction='row'>
            <div>{CameraSettings.backlightCompensation.range[1]}</div>
            <Slider 
              value={backlightCompensation}
              min={CameraSettings.backlightCompensation.range[1]}
              max={CameraSettings.backlightCompensation.range[0]}
              step={1}
              marks={true}
              disabled={busy || isReadonly || !cameraSettings.exposureAuto}
              onChange={onSliderChange('backlightCompensation')}>
            </Slider>
            <div>{CameraSettings.backlightCompensation.range[0]}</div>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}