import { Kinematics_Parameters } from '../blackboard/definitions/Blackboard';
import { Commands } from '../blackboard/definitions/Commands';
import { CAMERA_ID, CameraSetting, cameraSettingCommands } from './cameraSettings';

export type IConfigCommand = [string, string];
export class Configurator {
    public static configureCameraSettings(camera_id: CAMERA_ID, settings: Map<CameraSetting, number>): IConfigCommand {
        return ['--vision.camera_controls', cameraSettingCommands(camera_id, settings)];
    }
    public static configureKickCalbiration(isOn: boolean, foot: 'LEFT' | 'RIGHT', leanL: number, leanR: number): IConfigCommand[] {
      const params: IConfigCommand[] = [];
      if (isOn) {
         params.push(['--calibration.kick', '1']);
         params.push(['--kick.foot', foot]);
         params.push(['--kick.leanOffsetL', leanL.toFixed(1)]);
         params.push(['--kick.leanOffsetR', leanR.toFixed(1)]);
      }  else {
         params.push(['--calibration.kick', '0']);
      }
      return params;
    }
    public static configureKinematicsParameters(parameters: Partial<Kinematics_Parameters>): IConfigCommand[] {
      const params: IConfigCommand[] = [];

      if (parameters.cameraPitchTop !== undefined) {
         params.push(['--kinematics.cameraPitchTop', parameters.cameraPitchTop.toFixed(1)]);
      }
      if (parameters.cameraYawTop !== undefined) {
         params.push(['--kinematics.cameraYawTop', parameters.cameraYawTop.toFixed(1)]);
      }
      if (parameters.cameraRollTop !== undefined) {
         params.push(['--kinematics.cameraRollTop', parameters.cameraRollTop.toFixed(1)]);
      }
      if (parameters.cameraYawBottom !== undefined) {
         params.push(['--kinematics.cameraYawBottom', parameters.cameraYawBottom.toFixed(1)]);
      }
      if (parameters.cameraPitchBottom !== undefined) {
         params.push(['--kinematics.cameraPitchBottom', parameters.cameraPitchBottom.toFixed(1)]);
      }
      if (parameters.cameraRollBottom !== undefined) {
         params.push(['--kinematics.cameraRollBottom', parameters.cameraRollBottom.toFixed(1)]);
      }
      if (parameters.bodyPitch !== undefined) {
         params.push(['--kinematics.bodyPitch', parameters.bodyPitch.toFixed(1)]);
      }
      return params;
    }
    public static toCommand(config: Map<string, string>): Commands {
        const argv: string[] = [];
        for (const [key, value] of config) {
            argv.push(...[key, value]);
        }
        return Commands.fromPartial({argv});
    }
}
