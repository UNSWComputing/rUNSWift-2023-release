/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "offnao";

export enum ActionType {
  NONE = 0,
  STAND = 1,
  WALK = 2,
  DRIBBLE = 3,
  TURN_DRIBBLE = 4,
  GETUP_FRONT = 5,
  GETUP_BACK = 6,
  TIP_OVER = 7,
  KICK = 8,
  INITIAL = 9,
  LIMP = 10,
  REF_PICKUP = 11,
  GOALIE_SIT = 12,
  GOALIE_DIVE_RIGHT = 13,
  GOALIE_DIVE_LEFT = 14,
  GOALIE_CENTRE = 15,
  GOALIE_UNCENTRE = 16,
  GOALIE_INITIAL = 17,
  GOALIE_AFTERSIT_INITIAL = 18,
  DEFENDER_CENTRE = 19,
  GOALIE_FAST_SIT = 20,
  MOTION_CALIBRATE = 21,
  STAND_STRAIGHT = 22,
  LINE_UP = 23,
  NUM_ACTION_TYPES = 24,
  TEST_ARMS = 25,
  UKEMI_FRONT = 26,
  UKEMI_BACK = 27,
  UNRECOGNIZED = -1,
}

export function actionTypeFromJSON(object: any): ActionType {
  switch (object) {
    case 0:
    case "NONE":
      return ActionType.NONE;
    case 1:
    case "STAND":
      return ActionType.STAND;
    case 2:
    case "WALK":
      return ActionType.WALK;
    case 3:
    case "DRIBBLE":
      return ActionType.DRIBBLE;
    case 4:
    case "TURN_DRIBBLE":
      return ActionType.TURN_DRIBBLE;
    case 5:
    case "GETUP_FRONT":
      return ActionType.GETUP_FRONT;
    case 6:
    case "GETUP_BACK":
      return ActionType.GETUP_BACK;
    case 7:
    case "TIP_OVER":
      return ActionType.TIP_OVER;
    case 8:
    case "KICK":
      return ActionType.KICK;
    case 9:
    case "INITIAL":
      return ActionType.INITIAL;
    case 10:
    case "LIMP":
      return ActionType.LIMP;
    case 11:
    case "REF_PICKUP":
      return ActionType.REF_PICKUP;
    case 12:
    case "GOALIE_SIT":
      return ActionType.GOALIE_SIT;
    case 13:
    case "GOALIE_DIVE_RIGHT":
      return ActionType.GOALIE_DIVE_RIGHT;
    case 14:
    case "GOALIE_DIVE_LEFT":
      return ActionType.GOALIE_DIVE_LEFT;
    case 15:
    case "GOALIE_CENTRE":
      return ActionType.GOALIE_CENTRE;
    case 16:
    case "GOALIE_UNCENTRE":
      return ActionType.GOALIE_UNCENTRE;
    case 17:
    case "GOALIE_INITIAL":
      return ActionType.GOALIE_INITIAL;
    case 18:
    case "GOALIE_AFTERSIT_INITIAL":
      return ActionType.GOALIE_AFTERSIT_INITIAL;
    case 19:
    case "DEFENDER_CENTRE":
      return ActionType.DEFENDER_CENTRE;
    case 20:
    case "GOALIE_FAST_SIT":
      return ActionType.GOALIE_FAST_SIT;
    case 21:
    case "MOTION_CALIBRATE":
      return ActionType.MOTION_CALIBRATE;
    case 22:
    case "STAND_STRAIGHT":
      return ActionType.STAND_STRAIGHT;
    case 23:
    case "LINE_UP":
      return ActionType.LINE_UP;
    case 24:
    case "NUM_ACTION_TYPES":
      return ActionType.NUM_ACTION_TYPES;
    case 25:
    case "TEST_ARMS":
      return ActionType.TEST_ARMS;
    case 26:
    case "UKEMI_FRONT":
      return ActionType.UKEMI_FRONT;
    case 27:
    case "UKEMI_BACK":
      return ActionType.UKEMI_BACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionType.UNRECOGNIZED;
  }
}

export function actionTypeToJSON(object: ActionType): string {
  switch (object) {
    case ActionType.NONE:
      return "NONE";
    case ActionType.STAND:
      return "STAND";
    case ActionType.WALK:
      return "WALK";
    case ActionType.DRIBBLE:
      return "DRIBBLE";
    case ActionType.TURN_DRIBBLE:
      return "TURN_DRIBBLE";
    case ActionType.GETUP_FRONT:
      return "GETUP_FRONT";
    case ActionType.GETUP_BACK:
      return "GETUP_BACK";
    case ActionType.TIP_OVER:
      return "TIP_OVER";
    case ActionType.KICK:
      return "KICK";
    case ActionType.INITIAL:
      return "INITIAL";
    case ActionType.LIMP:
      return "LIMP";
    case ActionType.REF_PICKUP:
      return "REF_PICKUP";
    case ActionType.GOALIE_SIT:
      return "GOALIE_SIT";
    case ActionType.GOALIE_DIVE_RIGHT:
      return "GOALIE_DIVE_RIGHT";
    case ActionType.GOALIE_DIVE_LEFT:
      return "GOALIE_DIVE_LEFT";
    case ActionType.GOALIE_CENTRE:
      return "GOALIE_CENTRE";
    case ActionType.GOALIE_UNCENTRE:
      return "GOALIE_UNCENTRE";
    case ActionType.GOALIE_INITIAL:
      return "GOALIE_INITIAL";
    case ActionType.GOALIE_AFTERSIT_INITIAL:
      return "GOALIE_AFTERSIT_INITIAL";
    case ActionType.DEFENDER_CENTRE:
      return "DEFENDER_CENTRE";
    case ActionType.GOALIE_FAST_SIT:
      return "GOALIE_FAST_SIT";
    case ActionType.MOTION_CALIBRATE:
      return "MOTION_CALIBRATE";
    case ActionType.STAND_STRAIGHT:
      return "STAND_STRAIGHT";
    case ActionType.LINE_UP:
      return "LINE_UP";
    case ActionType.NUM_ACTION_TYPES:
      return "NUM_ACTION_TYPES";
    case ActionType.TEST_ARMS:
      return "TEST_ARMS";
    case ActionType.UKEMI_FRONT:
      return "UKEMI_FRONT";
    case ActionType.UKEMI_BACK:
      return "UKEMI_BACK";
    case ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RobotVisionInfoType {
  rUnknown = 0,
  rBlue = 1,
  rRed = 2,
  UNRECOGNIZED = -1,
}

export function robotVisionInfoTypeFromJSON(object: any): RobotVisionInfoType {
  switch (object) {
    case 0:
    case "rUnknown":
      return RobotVisionInfoType.rUnknown;
    case 1:
    case "rBlue":
      return RobotVisionInfoType.rBlue;
    case 2:
    case "rRed":
      return RobotVisionInfoType.rRed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RobotVisionInfoType.UNRECOGNIZED;
  }
}

export function robotVisionInfoTypeToJSON(object: RobotVisionInfoType): string {
  switch (object) {
    case RobotVisionInfoType.rUnknown:
      return "rUnknown";
    case RobotVisionInfoType.rBlue:
      return "rBlue";
    case RobotVisionInfoType.rRed:
      return "rRed";
    case RobotVisionInfoType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** first the common shared types */
export interface PairIntInt {
  first: number;
  second: number;
}

export interface XYZCoord {
  x: number;
  y: number;
  z: number;
}

export interface ActionCommandAll {
  head: ActionCommandAll_Head | undefined;
  body: ActionCommandAll_Body | undefined;
  leds: ActionCommandAll_LED | undefined;
  stiffen: ActionCommandAll_Stiffen;
}

/** optional float sonar = 4; */
export enum ActionCommandAll_Stiffen {
  NONE = 0,
  STIFFEN = 1,
  UNRECOGNIZED = -1,
}

export function actionCommandAll_StiffenFromJSON(
  object: any
): ActionCommandAll_Stiffen {
  switch (object) {
    case 0:
    case "NONE":
      return ActionCommandAll_Stiffen.NONE;
    case 1:
    case "STIFFEN":
      return ActionCommandAll_Stiffen.STIFFEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionCommandAll_Stiffen.UNRECOGNIZED;
  }
}

export function actionCommandAll_StiffenToJSON(
  object: ActionCommandAll_Stiffen
): string {
  switch (object) {
    case ActionCommandAll_Stiffen.NONE:
      return "NONE";
    case ActionCommandAll_Stiffen.STIFFEN:
      return "STIFFEN";
    case ActionCommandAll_Stiffen.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ActionCommandAll_Head {
  yaw: number;
  pitch: number;
  isRelative: boolean;
  yawSpeed: number;
  pitchSpeed: number;
}

export interface ActionCommandAll_Body {
  actionType: ActionType;
  forward: number;
  left: number;
  turn: number;
  power: number;
  bend: number;
  speed: number;
  kickDirection: number;
  foot: ActionCommandAll_Body_Foot;
  isFast: boolean;
  misalignedKick: boolean;
  useShuffle: boolean;
  leftArmBehind: boolean;
  rightArmBehind: boolean;
  blocking: boolean;
}

export enum ActionCommandAll_Body_Foot {
  LEFT = 0,
  RIGHT = 1,
  UNRECOGNIZED = -1,
}

export function actionCommandAll_Body_FootFromJSON(
  object: any
): ActionCommandAll_Body_Foot {
  switch (object) {
    case 0:
    case "LEFT":
      return ActionCommandAll_Body_Foot.LEFT;
    case 1:
    case "RIGHT":
      return ActionCommandAll_Body_Foot.RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionCommandAll_Body_Foot.UNRECOGNIZED;
  }
}

export function actionCommandAll_Body_FootToJSON(
  object: ActionCommandAll_Body_Foot
): string {
  switch (object) {
    case ActionCommandAll_Body_Foot.LEFT:
      return "LEFT";
    case ActionCommandAll_Body_Foot.RIGHT:
      return "RIGHT";
    case ActionCommandAll_Body_Foot.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ActionCommandAll_LED {
  leftEar: number;
  rightEar: number;
  leftEye: ActionCommandAll_LED_rgb | undefined;
  rightEye: ActionCommandAll_LED_rgb | undefined;
  chestButton: ActionCommandAll_LED_rgb | undefined;
  leftFoot: ActionCommandAll_LED_rgb | undefined;
  rightFoot: ActionCommandAll_LED_rgb | undefined;
}

export interface ActionCommandAll_LED_rgb {
  red: boolean;
  green: boolean;
  blue: boolean;
}

/** used for vector<vector<int> > */
export interface RepeatedInt {
  /** TODO: add the sizes to the message */
  values: number[];
}

export interface FloatMatrix {
  size1: number;
  size2: number;
  data: number[];
}

export interface AbsCoord {
  vec: number[];
  var: FloatMatrix | undefined;
  weight: number;
}

export interface SharedStateEstimationBundle {
  robotPos: AbsCoord | undefined;
  ballPosRRC: AbsCoord | undefined;
  ballVelRRC: AbsCoord | undefined;
  haveBallUpdate: boolean;
}

export interface JointValues {
  angles: number[];
  stiffnesses: number[];
  temperatures: number[];
  currents: number[];
}

export interface SensorValues {
  joints: JointValues | undefined;
  /** repeated float sonar = 3; */
  sensors: number[];
}

/** then the messages for each sub-blackboard */
export interface GameController {
  /** removed */
  teamRed: boolean;
  playerNumber: number;
  ourTeam: GameController_TeamInfo | undefined;
}

export interface GameController_TeamInfo {
  teamNumber: number;
}

export interface Motion {
  sensors: SensorValues | undefined;
  pose: Motion_Pose | undefined;
  com: XYZCoord | undefined;
  odometry: Motion_Odometry | undefined;
  active: ActionCommandAll | undefined;
  jointRequest: JointValues | undefined;
  motionDebugInfo: Motion_MotionDebugInfo | undefined;
}

export interface Motion_Pose {
  topCameraToWorldTransform: FloatMatrix | undefined;
  botCameraToWorldTransform: FloatMatrix | undefined;
  origin: FloatMatrix | undefined;
  zunit: FloatMatrix | undefined;
  topCOrigin: FloatMatrix | undefined;
  botCOrigin: FloatMatrix | undefined;
  horizon: PairIntInt | undefined;
  topExclusionArray: number[];
  botExclusionArray: number[];
  neckToWorldTransform: FloatMatrix | undefined;
}

export interface Motion_Odometry {
  forward: number;
  left: number;
  turn: number;
}

export interface Motion_MotionDebugInfo {
  feetPosition: Motion_FeetPosition | undefined;
}

export interface Motion_FeetPosition {
  left: Motion_FootPosition | undefined;
  right: Motion_FootPosition | undefined;
}

export interface Motion_FootPosition {
  x: number;
  y: number;
  theta: number;
}

export interface Perception {
  behaviour: number;
  kinematics: number;
  stateEstimation: number;
  total: number;
  vision: number;
}

export interface Kinematics {
  /** repeated RepeatedInt sonarFiltered = 1; */
  parameters: Kinematics_Parameters | undefined;
}

export interface Kinematics_Parameters {
  cameraPitchTop: number;
  cameraYawTop: number;
  cameraRollTop: number;
  cameraYawBottom: number;
  cameraPitchBottom: number;
  cameraRollBottom: number;
  bodyPitch: number;
}

/** looks like a composite type */
export interface Behaviour {
  request: Behaviour_BehaviourRequest[];
}

export interface Behaviour_BehaviourRequest {
  /** optional WhichCamera whichCamera = 1; */
  actions: ActionCommandAll | undefined;
  /**
   * optional bool goalieAttacking = 3;
   * optional bool goalieDiving = 4;
   * optional int32 secondsSinceLastKick = 5;
   * optional bool doingBallLineUp = 6;
   * optional bool isInReadyMode = 7;
   * optional float timeToReachBall = 8;
   * optional float timeToReachDefender = 9;
   * optional float timeToReachMidfielder = 10;
   * optional float timeToReachUpfielder = 11;
   * optional int32 kickoffSide = 12;
   * optional bool wantCrazyBall = 13;
   * optional string behaviourHierarchy = 14;
   * optional int32 currentRole = 15;
   * optional int32 role = 16;
   * optional bool playingBall = 17;
   * optional bool needAssistance = 18;
   * optional bool isAssisting = 19;
   * optional bool isKickedOff = 20;
   * optional bool isFollowing = 21;
   * optional int32 ballLostFrames = 22;
   * optional sint32 readyPositionAllocation0 = 23;
   * optional sint32 readyPositionAllocation1 = 24;
   * optional sint32 readyPositionAllocation2 = 25;
   * optional sint32 readyPositionAllocation3 = 26;
   * optional sint32 readyPositionAllocation4 = 27;
   */
  behaviourDebugInfo: BehaviourDebugInfo | undefined;
  behaviourSharedData: BehaviourSharedData | undefined;
}

export interface Point {
  x: number;
  y: number;
}

export interface BBox {
  a: Point | undefined;
  b: Point | undefined;
}

export interface RRCoord {
  vec: number[];
  var: FloatMatrix | undefined;
}

export interface BehaviourSharedData {
  /**
   * optional bool goalieAttacking = 1;
   * optional bool goalieDiving = 2;
   * optional float timeToReachBall = 3;
   * optional float timeToReachUpfielder = 4;
   * optional float timeToReachMidfielder = 5;
   * optional float timeToReachDefender = 6;
   * optional int32 currentRole = 7;
   */
  role: number;
  playingBall: boolean;
  needAssistance: boolean;
  isAssisting: boolean;
  secondsSinceLastKick: number;
  /** optional bool isFollowing = 13; */
  isKickedOff: boolean;
  /**
   * optional bool doingBallLineUp = 15;
   * optional bool isInReadyMode = 16;
   * optional ReadySkillPositionAllocation readyPositionAllocation = 17;
   * optional int32 ballLostFrames = 18;
   */
  walkingToX: number;
  walkingToY: number;
  walkingToH: number;
}

export interface Vision {
  /** repeated Ipoint landmarks = 1; */
  timestamp: number;
  /**
   * optional PostInfoType goalArea = 3; // Not sure what type it is
   * optional float awayGoalProb = 4;
   * optional int32 homeMapSize = 5;
   * optional int32 awayMapSize = 6;
   * repeated FootInfo feet_boxes = 7;
   */
  balls: Vision_BallInfo[];
  /**
   * optional BallHint ballhint = 9;
   * repeated PostInfo posts = 10;
   */
  robots: Vision_RobotVisionInfo[];
  fieldBoundaries: Vision_FieldBoundaryInfo[];
  fieldFeatures: Vision_FieldFeatureInfo[];
  /**
   * optional uint32 missedFrames = 14;
   * optional PairIntInt dxdy = 15;
   */
  regions: Vision_RegionI[];
  topCameraSettings: Vision_CameraSettings | undefined;
  /** optional LastSecondInfo lastSecond = 19; */
  botCameraSettings: Vision_CameraSettings | undefined;
  topSaliency: Uint8Array;
  botSaliency: Uint8Array;
  topFrame: Uint8Array;
  botFrame: Uint8Array;
  horizontalFieldOfView: number;
  verticalFieldOfView: number;
  topFrameJPEG: Uint8Array;
  botFrameJPEG: Uint8Array;
  ATWindowSizeTop: number;
  ATWindowSizeBot: number;
  ATPercentageTop: number;
  ATPercentageBot: number;
}

export enum Vision_PostInfoType {
  pNone = 0,
  pLeft = 1,
  pRight = 2,
  pHome = 4,
  pAway = 8,
  pHomeLeft = 5,
  pHomeRight = 6,
  pAwayLeft = 9,
  pAwayRight = 10,
  UNRECOGNIZED = -1,
}

export function vision_PostInfoTypeFromJSON(object: any): Vision_PostInfoType {
  switch (object) {
    case 0:
    case "pNone":
      return Vision_PostInfoType.pNone;
    case 1:
    case "pLeft":
      return Vision_PostInfoType.pLeft;
    case 2:
    case "pRight":
      return Vision_PostInfoType.pRight;
    case 4:
    case "pHome":
      return Vision_PostInfoType.pHome;
    case 8:
    case "pAway":
      return Vision_PostInfoType.pAway;
    case 5:
    case "pHomeLeft":
      return Vision_PostInfoType.pHomeLeft;
    case 6:
    case "pHomeRight":
      return Vision_PostInfoType.pHomeRight;
    case 9:
    case "pAwayLeft":
      return Vision_PostInfoType.pAwayLeft;
    case 10:
    case "pAwayRight":
      return Vision_PostInfoType.pAwayRight;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vision_PostInfoType.UNRECOGNIZED;
  }
}

export function vision_PostInfoTypeToJSON(object: Vision_PostInfoType): string {
  switch (object) {
    case Vision_PostInfoType.pNone:
      return "pNone";
    case Vision_PostInfoType.pLeft:
      return "pLeft";
    case Vision_PostInfoType.pRight:
      return "pRight";
    case Vision_PostInfoType.pHome:
      return "pHome";
    case Vision_PostInfoType.pAway:
      return "pAway";
    case Vision_PostInfoType.pHomeLeft:
      return "pHomeLeft";
    case Vision_PostInfoType.pHomeRight:
      return "pHomeRight";
    case Vision_PostInfoType.pAwayLeft:
      return "pAwayLeft";
    case Vision_PostInfoType.pAwayRight:
      return "pAwayRight";
    case Vision_PostInfoType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Vision_PostInfoDirection {
  pToLeftOf = 0,
  pToRightOf = 1,
  pUnknown = 2,
  UNRECOGNIZED = -1,
}

export function vision_PostInfoDirectionFromJSON(
  object: any
): Vision_PostInfoDirection {
  switch (object) {
    case 0:
    case "pToLeftOf":
      return Vision_PostInfoDirection.pToLeftOf;
    case 1:
    case "pToRightOf":
      return Vision_PostInfoDirection.pToRightOf;
    case 2:
    case "pUnknown":
      return Vision_PostInfoDirection.pUnknown;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vision_PostInfoDirection.UNRECOGNIZED;
  }
}

export function vision_PostInfoDirectionToJSON(
  object: Vision_PostInfoDirection
): string {
  switch (object) {
    case Vision_PostInfoDirection.pToLeftOf:
      return "pToLeftOf";
    case Vision_PostInfoDirection.pToRightOf:
      return "pToRightOf";
    case Vision_PostInfoDirection.pUnknown:
      return "pUnknown";
    case Vision_PostInfoDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Vision_Cameras {
  TOP_CAMERA = 0,
  BOT_CAMERA = 1,
  BOTH_CAMERAS = 2,
  OLD_DETECTION = 3,
  UNRECOGNIZED = -1,
}

export function vision_CamerasFromJSON(object: any): Vision_Cameras {
  switch (object) {
    case 0:
    case "TOP_CAMERA":
      return Vision_Cameras.TOP_CAMERA;
    case 1:
    case "BOT_CAMERA":
      return Vision_Cameras.BOT_CAMERA;
    case 2:
    case "BOTH_CAMERAS":
      return Vision_Cameras.BOTH_CAMERAS;
    case 3:
    case "OLD_DETECTION":
      return Vision_Cameras.OLD_DETECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vision_Cameras.UNRECOGNIZED;
  }
}

export function vision_CamerasToJSON(object: Vision_Cameras): string {
  switch (object) {
    case Vision_Cameras.TOP_CAMERA:
      return "TOP_CAMERA";
    case Vision_Cameras.BOT_CAMERA:
      return "BOT_CAMERA";
    case Vision_Cameras.BOTH_CAMERAS:
      return "BOTH_CAMERAS";
    case Vision_Cameras.OLD_DETECTION:
      return "OLD_DETECTION";
    case Vision_Cameras.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Vision_FieldFeatureInfoType {
  fNone = 0,
  fLine = 1,
  fCorner = 2,
  fTJunction = 3,
  fPenaltySpot = 4,
  fCentreCircle = 5,
  fFieldLinePoint = 6,
  fXJunction = 7,
  fParallelLines = 8,
  fGoalBoxCorner = 9,
  UNRECOGNIZED = -1,
}

export function vision_FieldFeatureInfoTypeFromJSON(
  object: any
): Vision_FieldFeatureInfoType {
  switch (object) {
    case 0:
    case "fNone":
      return Vision_FieldFeatureInfoType.fNone;
    case 1:
    case "fLine":
      return Vision_FieldFeatureInfoType.fLine;
    case 2:
    case "fCorner":
      return Vision_FieldFeatureInfoType.fCorner;
    case 3:
    case "fTJunction":
      return Vision_FieldFeatureInfoType.fTJunction;
    case 4:
    case "fPenaltySpot":
      return Vision_FieldFeatureInfoType.fPenaltySpot;
    case 5:
    case "fCentreCircle":
      return Vision_FieldFeatureInfoType.fCentreCircle;
    case 6:
    case "fFieldLinePoint":
      return Vision_FieldFeatureInfoType.fFieldLinePoint;
    case 7:
    case "fXJunction":
      return Vision_FieldFeatureInfoType.fXJunction;
    case 8:
    case "fParallelLines":
      return Vision_FieldFeatureInfoType.fParallelLines;
    case 9:
    case "fGoalBoxCorner":
      return Vision_FieldFeatureInfoType.fGoalBoxCorner;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vision_FieldFeatureInfoType.UNRECOGNIZED;
  }
}

export function vision_FieldFeatureInfoTypeToJSON(
  object: Vision_FieldFeatureInfoType
): string {
  switch (object) {
    case Vision_FieldFeatureInfoType.fNone:
      return "fNone";
    case Vision_FieldFeatureInfoType.fLine:
      return "fLine";
    case Vision_FieldFeatureInfoType.fCorner:
      return "fCorner";
    case Vision_FieldFeatureInfoType.fTJunction:
      return "fTJunction";
    case Vision_FieldFeatureInfoType.fPenaltySpot:
      return "fPenaltySpot";
    case Vision_FieldFeatureInfoType.fCentreCircle:
      return "fCentreCircle";
    case Vision_FieldFeatureInfoType.fFieldLinePoint:
      return "fFieldLinePoint";
    case Vision_FieldFeatureInfoType.fXJunction:
      return "fXJunction";
    case Vision_FieldFeatureInfoType.fParallelLines:
      return "fParallelLines";
    case Vision_FieldFeatureInfoType.fGoalBoxCorner:
      return "fGoalBoxCorner";
    case Vision_FieldFeatureInfoType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Vision_Colour {
  cGREEN = 0,
  cWHITE = 1,
  cBLACK = 2,
  cBACKGROUND = 3,
  cBODY_PART = 4,
  cNUM_COLOURS = 5,
  UNRECOGNIZED = -1,
}

export function vision_ColourFromJSON(object: any): Vision_Colour {
  switch (object) {
    case 0:
    case "cGREEN":
      return Vision_Colour.cGREEN;
    case 1:
    case "cWHITE":
      return Vision_Colour.cWHITE;
    case 2:
    case "cBLACK":
      return Vision_Colour.cBLACK;
    case 3:
    case "cBACKGROUND":
      return Vision_Colour.cBACKGROUND;
    case 4:
    case "cBODY_PART":
      return Vision_Colour.cBODY_PART;
    case 5:
    case "cNUM_COLOURS":
      return Vision_Colour.cNUM_COLOURS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vision_Colour.UNRECOGNIZED;
  }
}

export function vision_ColourToJSON(object: Vision_Colour): string {
  switch (object) {
    case Vision_Colour.cGREEN:
      return "cGREEN";
    case Vision_Colour.cWHITE:
      return "cWHITE";
    case Vision_Colour.cBLACK:
      return "cBLACK";
    case Vision_Colour.cBACKGROUND:
      return "cBACKGROUND";
    case Vision_Colour.cBODY_PART:
      return "cBODY_PART";
    case Vision_Colour.cNUM_COLOURS:
      return "cNUM_COLOURS";
    case Vision_Colour.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Vision_BallInfo {
  rr: RRCoord | undefined;
  radius: number;
  imageCoords: Point | undefined;
  neckRelative: XYZCoord | undefined;
  /**
   * optional float visionVar = 6;
   * optional int32 darkestPoint = 7;
   * optional float angleVar = 8;
   * optional int32 ccdRating = 9;
   * optional int32 lastSeen = 10;
   * optional int32 lifetime = 11;
   */
  topCamera: boolean;
}

export interface Vision_PostInfo {
  rr: RRCoord | undefined;
  type: Vision_PostInfoType;
  imageCoords: BBox | undefined;
  wDistance: number;
  kDistance: number;
  trustDistance: boolean;
  dir: Vision_PostInfoDirection;
}

export interface Vision_RobotVisionInfo {
  rr: RRCoord | undefined;
  type: RobotVisionInfoType;
  cameras: Vision_Cameras;
  imageCoords: BBox | undefined;
  topImageCoords: BBox | undefined;
  botImageCoords: BBox | undefined;
}

export interface Vision_RANSACLine {
  t1: number;
  t2: number;
  t3: number;
  var: number;
  p1: Point | undefined;
  p2: Point | undefined;
}

export interface Vision_FieldBoundaryInfo {
  rrBoundary: Vision_RANSACLine | undefined;
  imageBoundary: Vision_RANSACLine | undefined;
}

export interface Vision_FieldFeatureInfo {
  rr: RRCoord | undefined;
  type: Vision_FieldFeatureInfoType;
  /**
   * optional LineInfo tmpLine = 3;
   * optional bool tmpLineUsed = 4;
   * optional CornerInfo tmpCorner = 5;
   * optional TJunctionInfo tmpTJunction = 6;
   * optional PenaltySpotInfo tmpPenaltyspot = 7;
   * optional CentreCircleInfo tmpCentrecircle = 8;
   * optional FieldLinePointInfo tmpFieldlinepoints = 9;
   * optional XJunctionInfo tmpxjunction = 10;
   * optional ParallelLinesInfo tmpparallellines = 11;
   * optional GoalBoxCornerInfo tmpgoal_box_corner = 12;
   */
  p1: Point | undefined;
  p2: Point | undefined;
}

export interface Vision_FieldFeatureInfo_FieldLinePointInfo {
  p: Point | undefined;
  rrp: Point | undefined;
}

export interface Vision_FieldFeatureInfo_LineInfo {
  p1: Point | undefined;
  p2: Point | undefined;
  t1: number;
  t2: number;
  t3: number;
  rr: RRCoord | undefined;
}

export interface Vision_FieldFeatureInfo_CornerInfo {
  p: Point | undefined;
  e1: Point | undefined;
  e2: Point | undefined;
}

export interface Vision_FieldFeatureInfo_TJunctionInfo {
  p: Point | undefined;
}

export interface Vision_FieldFeatureInfo_GoalBoxCornerInfo {
  p: Point | undefined;
  leftCorner: boolean;
}

export interface Vision_FieldFeatureInfo_PenaltySpotInfo {
  p: Point | undefined;
  w: number;
  h: number;
}

export interface Vision_FieldFeatureInfo_XJunctionInfo {
  p: Point | undefined;
}

export interface Vision_FieldFeatureInfo_CentreCircleInfo {}

export interface Vision_FieldFeatureInfo_ParallelLinesInfo {
  l1: Vision_FieldFeatureInfo_LineInfo | undefined;
  l2: Vision_FieldFeatureInfo_LineInfo | undefined;
}

export interface Vision_RegionI {
  isTopCamera: boolean;
  boundingBoxRel: BBox | undefined;
  boundingBoxFovea: BBox | undefined;
  boundingBoxRaw: BBox | undefined;
  nRawColsInRegion: number;
  nRawRowsInRegion: number;
  densityToRaw: number;
  yOffsetRaw: number;
  xOffsetRaw: number;
  rawTotalWidth: number;
  rawToFoveaDensity: number;
  foveaWidth: number;
}

export interface Vision_CameraSettings {
  hflip: number;
  vflip: number;
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  sharpness: number;
  backlightCompensation: number;
  exposure: number;
  gain: number;
  whiteBalance: number;
  exposureAuto: number;
  autoWhiteBalance: number;
  autoFocus: number;
  exposureAlgorithm: number;
  aeTargetAvgLuma: number;
  aeTargetAvgLumaDark: number;
  aeTargetGain: number;
  aeMinVirtGain: number;
  aeMaxVirtGain: number;
  aeMinVirtAGain: number;
  aeMaxVirtAGain: number;
  aeTargetExposure: number;
  aeUseWeightTable: boolean;
}

export interface Receiver {
  message: Receiver_SPLStandardMessage[];
  data: Receiver_BroadcastData[];
  lastReceived: number[];
  /** TODO: add the sizes to the message */
  incapacitated: boolean[];
}

export interface Receiver_SPLStandardMessage {
  header: string;
  version: number;
  playerNum: number;
  teamNum: number;
  fallen: number;
  pose: number[];
  ballAge: number;
  ball: number[];
  numOfDataBytes: number;
  data: Uint8Array;
}

export interface Receiver_BroadcastData {
  playerNum: number;
  robotPos: number[];
  ballPosAbs: AbsCoord | undefined;
  ballPosRR: RRCoord | undefined;
  sharedStateEstimationBundle: SharedStateEstimationBundle | undefined;
  behaviourSharedData: BehaviourSharedData | undefined;
  acB: ActionType;
  uptime: number;
  gameState: number;
}

export interface StateEstimation {
  robotObstacles: StateEstimation_RobotObstacle[];
  robotPos: AbsCoord | undefined;
  allRobotPos: AbsCoord[];
  ballPosRR: RRCoord | undefined;
  ballPosRRC: AbsCoord | undefined;
  ballVelRRC: AbsCoord | undefined;
  ballVel: AbsCoord | undefined;
  ballPos: AbsCoord | undefined;
  teamBallPos: AbsCoord | undefined;
  teamBallVel: AbsCoord | undefined;
  sharedStateEstimationBundle: SharedStateEstimationBundle | undefined;
  havePendingOutgoingSharedBundle: boolean;
  /** TODO: add the sizes to the message */
  havePendingIncomingSharedBundle: boolean[];
}

export interface StateEstimation_RobotObstacle {
  rr: RRCoord | undefined;
  type: RobotVisionInfoType;
  rrc: AbsCoord | undefined;
  pos: AbsCoord | undefined;
  tangentHeadingLeft: number;
  tangentHeadingRight: number;
  evadeVectorLeft: RRCoord | undefined;
  evadeVectorRight: RRCoord | undefined;
}

export interface BehaviourDebugInfo {
  bodyBehaviourHierarchy: string;
  headBehaviourHierarchy: string;
  haveBallManoeuvreTarget: boolean;
  ballManoeuvreTargetX: number;
  ballManoeuvreTargetY: number;
  ballManoeuvreHeadingError: number;
  ballManoeuvreType: string;
  ballManoeuvreHard: boolean;
  anticipating: boolean;
  anticipateX: number;
  anticipateY: number;
  anticipateH: number;
}

/** and finally the top-level blackboard */
export interface Blackboard {
  mask: number;
  gameController: GameController | undefined;
  motion: Motion | undefined;
  behaviour: Behaviour | undefined;
  perception: Perception | undefined;
  kinematics: Kinematics | undefined;
  vision: Vision | undefined;
  receiver: Receiver | undefined;
  stateEstimation: StateEstimation | undefined;
}

function createBasePairIntInt(): PairIntInt {
  return { first: 0, second: 0 };
}

export const PairIntInt = {
  encode(
    message: PairIntInt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.first !== 0) {
      writer.uint32(8).sint32(message.first);
    }
    if (message.second !== 0) {
      writer.uint32(16).sint32(message.second);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairIntInt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairIntInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.first = reader.sint32();
          break;
        case 2:
          message.second = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PairIntInt {
    return {
      first: isSet(object.first) ? Number(object.first) : 0,
      second: isSet(object.second) ? Number(object.second) : 0,
    };
  },

  toJSON(message: PairIntInt): unknown {
    const obj: any = {};
    message.first !== undefined && (obj.first = Math.round(message.first));
    message.second !== undefined && (obj.second = Math.round(message.second));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PairIntInt>, I>>(
    object: I
  ): PairIntInt {
    const message = createBasePairIntInt();
    message.first = object.first ?? 0;
    message.second = object.second ?? 0;
    return message;
  },
};

function createBaseXYZCoord(): XYZCoord {
  return { x: 0, y: 0, z: 0 };
}

export const XYZCoord = {
  encode(
    message: XYZCoord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): XYZCoord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseXYZCoord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): XYZCoord {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: XYZCoord): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<XYZCoord>, I>>(object: I): XYZCoord {
    const message = createBaseXYZCoord();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseActionCommandAll(): ActionCommandAll {
  return { head: undefined, body: undefined, leds: undefined, stiffen: 0 };
}

export const ActionCommandAll = {
  encode(
    message: ActionCommandAll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.head !== undefined) {
      ActionCommandAll_Head.encode(
        message.head,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body !== undefined) {
      ActionCommandAll_Body.encode(
        message.body,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.leds !== undefined) {
      ActionCommandAll_LED.encode(
        message.leds,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.stiffen !== 0) {
      writer.uint32(40).int32(message.stiffen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionCommandAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCommandAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.head = ActionCommandAll_Head.decode(reader, reader.uint32());
          break;
        case 2:
          message.body = ActionCommandAll_Body.decode(reader, reader.uint32());
          break;
        case 3:
          message.leds = ActionCommandAll_LED.decode(reader, reader.uint32());
          break;
        case 5:
          message.stiffen = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCommandAll {
    return {
      head: isSet(object.head)
        ? ActionCommandAll_Head.fromJSON(object.head)
        : undefined,
      body: isSet(object.body)
        ? ActionCommandAll_Body.fromJSON(object.body)
        : undefined,
      leds: isSet(object.leds)
        ? ActionCommandAll_LED.fromJSON(object.leds)
        : undefined,
      stiffen: isSet(object.stiffen)
        ? actionCommandAll_StiffenFromJSON(object.stiffen)
        : 0,
    };
  },

  toJSON(message: ActionCommandAll): unknown {
    const obj: any = {};
    message.head !== undefined &&
      (obj.head = message.head
        ? ActionCommandAll_Head.toJSON(message.head)
        : undefined);
    message.body !== undefined &&
      (obj.body = message.body
        ? ActionCommandAll_Body.toJSON(message.body)
        : undefined);
    message.leds !== undefined &&
      (obj.leds = message.leds
        ? ActionCommandAll_LED.toJSON(message.leds)
        : undefined);
    message.stiffen !== undefined &&
      (obj.stiffen = actionCommandAll_StiffenToJSON(message.stiffen));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCommandAll>, I>>(
    object: I
  ): ActionCommandAll {
    const message = createBaseActionCommandAll();
    message.head =
      object.head !== undefined && object.head !== null
        ? ActionCommandAll_Head.fromPartial(object.head)
        : undefined;
    message.body =
      object.body !== undefined && object.body !== null
        ? ActionCommandAll_Body.fromPartial(object.body)
        : undefined;
    message.leds =
      object.leds !== undefined && object.leds !== null
        ? ActionCommandAll_LED.fromPartial(object.leds)
        : undefined;
    message.stiffen = object.stiffen ?? 0;
    return message;
  },
};

function createBaseActionCommandAll_Head(): ActionCommandAll_Head {
  return { yaw: 0, pitch: 0, isRelative: false, yawSpeed: 0, pitchSpeed: 0 };
}

export const ActionCommandAll_Head = {
  encode(
    message: ActionCommandAll_Head,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yaw !== 0) {
      writer.uint32(13).float(message.yaw);
    }
    if (message.pitch !== 0) {
      writer.uint32(21).float(message.pitch);
    }
    if (message.isRelative === true) {
      writer.uint32(24).bool(message.isRelative);
    }
    if (message.yawSpeed !== 0) {
      writer.uint32(37).float(message.yawSpeed);
    }
    if (message.pitchSpeed !== 0) {
      writer.uint32(45).float(message.pitchSpeed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActionCommandAll_Head {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCommandAll_Head();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yaw = reader.float();
          break;
        case 2:
          message.pitch = reader.float();
          break;
        case 3:
          message.isRelative = reader.bool();
          break;
        case 4:
          message.yawSpeed = reader.float();
          break;
        case 5:
          message.pitchSpeed = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCommandAll_Head {
    return {
      yaw: isSet(object.yaw) ? Number(object.yaw) : 0,
      pitch: isSet(object.pitch) ? Number(object.pitch) : 0,
      isRelative: isSet(object.isRelative) ? Boolean(object.isRelative) : false,
      yawSpeed: isSet(object.yawSpeed) ? Number(object.yawSpeed) : 0,
      pitchSpeed: isSet(object.pitchSpeed) ? Number(object.pitchSpeed) : 0,
    };
  },

  toJSON(message: ActionCommandAll_Head): unknown {
    const obj: any = {};
    message.yaw !== undefined && (obj.yaw = message.yaw);
    message.pitch !== undefined && (obj.pitch = message.pitch);
    message.isRelative !== undefined && (obj.isRelative = message.isRelative);
    message.yawSpeed !== undefined && (obj.yawSpeed = message.yawSpeed);
    message.pitchSpeed !== undefined && (obj.pitchSpeed = message.pitchSpeed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCommandAll_Head>, I>>(
    object: I
  ): ActionCommandAll_Head {
    const message = createBaseActionCommandAll_Head();
    message.yaw = object.yaw ?? 0;
    message.pitch = object.pitch ?? 0;
    message.isRelative = object.isRelative ?? false;
    message.yawSpeed = object.yawSpeed ?? 0;
    message.pitchSpeed = object.pitchSpeed ?? 0;
    return message;
  },
};

function createBaseActionCommandAll_Body(): ActionCommandAll_Body {
  return {
    actionType: 0,
    forward: 0,
    left: 0,
    turn: 0,
    power: 0,
    bend: 0,
    speed: 0,
    kickDirection: 0,
    foot: 0,
    isFast: false,
    misalignedKick: false,
    useShuffle: false,
    leftArmBehind: false,
    rightArmBehind: false,
    blocking: false,
  };
}

export const ActionCommandAll_Body = {
  encode(
    message: ActionCommandAll_Body,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.forward !== 0) {
      writer.uint32(16).sint32(message.forward);
    }
    if (message.left !== 0) {
      writer.uint32(24).sint32(message.left);
    }
    if (message.turn !== 0) {
      writer.uint32(37).float(message.turn);
    }
    if (message.power !== 0) {
      writer.uint32(45).float(message.power);
    }
    if (message.bend !== 0) {
      writer.uint32(53).float(message.bend);
    }
    if (message.speed !== 0) {
      writer.uint32(61).float(message.speed);
    }
    if (message.kickDirection !== 0) {
      writer.uint32(69).float(message.kickDirection);
    }
    if (message.foot !== 0) {
      writer.uint32(72).int32(message.foot);
    }
    if (message.isFast === true) {
      writer.uint32(80).bool(message.isFast);
    }
    if (message.misalignedKick === true) {
      writer.uint32(88).bool(message.misalignedKick);
    }
    if (message.useShuffle === true) {
      writer.uint32(96).bool(message.useShuffle);
    }
    if (message.leftArmBehind === true) {
      writer.uint32(104).bool(message.leftArmBehind);
    }
    if (message.rightArmBehind === true) {
      writer.uint32(112).bool(message.rightArmBehind);
    }
    if (message.blocking === true) {
      writer.uint32(120).bool(message.blocking);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActionCommandAll_Body {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCommandAll_Body();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionType = reader.int32() as any;
          break;
        case 2:
          message.forward = reader.sint32();
          break;
        case 3:
          message.left = reader.sint32();
          break;
        case 4:
          message.turn = reader.float();
          break;
        case 5:
          message.power = reader.float();
          break;
        case 6:
          message.bend = reader.float();
          break;
        case 7:
          message.speed = reader.float();
          break;
        case 8:
          message.kickDirection = reader.float();
          break;
        case 9:
          message.foot = reader.int32() as any;
          break;
        case 10:
          message.isFast = reader.bool();
          break;
        case 11:
          message.misalignedKick = reader.bool();
          break;
        case 12:
          message.useShuffle = reader.bool();
          break;
        case 13:
          message.leftArmBehind = reader.bool();
          break;
        case 14:
          message.rightArmBehind = reader.bool();
          break;
        case 15:
          message.blocking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCommandAll_Body {
    return {
      actionType: isSet(object.actionType)
        ? actionTypeFromJSON(object.actionType)
        : 0,
      forward: isSet(object.forward) ? Number(object.forward) : 0,
      left: isSet(object.left) ? Number(object.left) : 0,
      turn: isSet(object.turn) ? Number(object.turn) : 0,
      power: isSet(object.power) ? Number(object.power) : 0,
      bend: isSet(object.bend) ? Number(object.bend) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
      kickDirection: isSet(object.kickDirection)
        ? Number(object.kickDirection)
        : 0,
      foot: isSet(object.foot)
        ? actionCommandAll_Body_FootFromJSON(object.foot)
        : 0,
      isFast: isSet(object.isFast) ? Boolean(object.isFast) : false,
      misalignedKick: isSet(object.misalignedKick)
        ? Boolean(object.misalignedKick)
        : false,
      useShuffle: isSet(object.useShuffle) ? Boolean(object.useShuffle) : false,
      leftArmBehind: isSet(object.leftArmBehind)
        ? Boolean(object.leftArmBehind)
        : false,
      rightArmBehind: isSet(object.rightArmBehind)
        ? Boolean(object.rightArmBehind)
        : false,
      blocking: isSet(object.blocking) ? Boolean(object.blocking) : false,
    };
  },

  toJSON(message: ActionCommandAll_Body): unknown {
    const obj: any = {};
    message.actionType !== undefined &&
      (obj.actionType = actionTypeToJSON(message.actionType));
    message.forward !== undefined &&
      (obj.forward = Math.round(message.forward));
    message.left !== undefined && (obj.left = Math.round(message.left));
    message.turn !== undefined && (obj.turn = message.turn);
    message.power !== undefined && (obj.power = message.power);
    message.bend !== undefined && (obj.bend = message.bend);
    message.speed !== undefined && (obj.speed = message.speed);
    message.kickDirection !== undefined &&
      (obj.kickDirection = message.kickDirection);
    message.foot !== undefined &&
      (obj.foot = actionCommandAll_Body_FootToJSON(message.foot));
    message.isFast !== undefined && (obj.isFast = message.isFast);
    message.misalignedKick !== undefined &&
      (obj.misalignedKick = message.misalignedKick);
    message.useShuffle !== undefined && (obj.useShuffle = message.useShuffle);
    message.leftArmBehind !== undefined &&
      (obj.leftArmBehind = message.leftArmBehind);
    message.rightArmBehind !== undefined &&
      (obj.rightArmBehind = message.rightArmBehind);
    message.blocking !== undefined && (obj.blocking = message.blocking);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCommandAll_Body>, I>>(
    object: I
  ): ActionCommandAll_Body {
    const message = createBaseActionCommandAll_Body();
    message.actionType = object.actionType ?? 0;
    message.forward = object.forward ?? 0;
    message.left = object.left ?? 0;
    message.turn = object.turn ?? 0;
    message.power = object.power ?? 0;
    message.bend = object.bend ?? 0;
    message.speed = object.speed ?? 0;
    message.kickDirection = object.kickDirection ?? 0;
    message.foot = object.foot ?? 0;
    message.isFast = object.isFast ?? false;
    message.misalignedKick = object.misalignedKick ?? false;
    message.useShuffle = object.useShuffle ?? false;
    message.leftArmBehind = object.leftArmBehind ?? false;
    message.rightArmBehind = object.rightArmBehind ?? false;
    message.blocking = object.blocking ?? false;
    return message;
  },
};

function createBaseActionCommandAll_LED(): ActionCommandAll_LED {
  return {
    leftEar: 0,
    rightEar: 0,
    leftEye: undefined,
    rightEye: undefined,
    chestButton: undefined,
    leftFoot: undefined,
    rightFoot: undefined,
  };
}

export const ActionCommandAll_LED = {
  encode(
    message: ActionCommandAll_LED,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.leftEar !== 0) {
      writer.uint32(8).uint32(message.leftEar);
    }
    if (message.rightEar !== 0) {
      writer.uint32(16).uint32(message.rightEar);
    }
    if (message.leftEye !== undefined) {
      ActionCommandAll_LED_rgb.encode(
        message.leftEye,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.rightEye !== undefined) {
      ActionCommandAll_LED_rgb.encode(
        message.rightEye,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.chestButton !== undefined) {
      ActionCommandAll_LED_rgb.encode(
        message.chestButton,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.leftFoot !== undefined) {
      ActionCommandAll_LED_rgb.encode(
        message.leftFoot,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.rightFoot !== undefined) {
      ActionCommandAll_LED_rgb.encode(
        message.rightFoot,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActionCommandAll_LED {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCommandAll_LED();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leftEar = reader.uint32();
          break;
        case 2:
          message.rightEar = reader.uint32();
          break;
        case 3:
          message.leftEye = ActionCommandAll_LED_rgb.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.rightEye = ActionCommandAll_LED_rgb.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.chestButton = ActionCommandAll_LED_rgb.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.leftFoot = ActionCommandAll_LED_rgb.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.rightFoot = ActionCommandAll_LED_rgb.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCommandAll_LED {
    return {
      leftEar: isSet(object.leftEar) ? Number(object.leftEar) : 0,
      rightEar: isSet(object.rightEar) ? Number(object.rightEar) : 0,
      leftEye: isSet(object.leftEye)
        ? ActionCommandAll_LED_rgb.fromJSON(object.leftEye)
        : undefined,
      rightEye: isSet(object.rightEye)
        ? ActionCommandAll_LED_rgb.fromJSON(object.rightEye)
        : undefined,
      chestButton: isSet(object.chestButton)
        ? ActionCommandAll_LED_rgb.fromJSON(object.chestButton)
        : undefined,
      leftFoot: isSet(object.leftFoot)
        ? ActionCommandAll_LED_rgb.fromJSON(object.leftFoot)
        : undefined,
      rightFoot: isSet(object.rightFoot)
        ? ActionCommandAll_LED_rgb.fromJSON(object.rightFoot)
        : undefined,
    };
  },

  toJSON(message: ActionCommandAll_LED): unknown {
    const obj: any = {};
    message.leftEar !== undefined &&
      (obj.leftEar = Math.round(message.leftEar));
    message.rightEar !== undefined &&
      (obj.rightEar = Math.round(message.rightEar));
    message.leftEye !== undefined &&
      (obj.leftEye = message.leftEye
        ? ActionCommandAll_LED_rgb.toJSON(message.leftEye)
        : undefined);
    message.rightEye !== undefined &&
      (obj.rightEye = message.rightEye
        ? ActionCommandAll_LED_rgb.toJSON(message.rightEye)
        : undefined);
    message.chestButton !== undefined &&
      (obj.chestButton = message.chestButton
        ? ActionCommandAll_LED_rgb.toJSON(message.chestButton)
        : undefined);
    message.leftFoot !== undefined &&
      (obj.leftFoot = message.leftFoot
        ? ActionCommandAll_LED_rgb.toJSON(message.leftFoot)
        : undefined);
    message.rightFoot !== undefined &&
      (obj.rightFoot = message.rightFoot
        ? ActionCommandAll_LED_rgb.toJSON(message.rightFoot)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCommandAll_LED>, I>>(
    object: I
  ): ActionCommandAll_LED {
    const message = createBaseActionCommandAll_LED();
    message.leftEar = object.leftEar ?? 0;
    message.rightEar = object.rightEar ?? 0;
    message.leftEye =
      object.leftEye !== undefined && object.leftEye !== null
        ? ActionCommandAll_LED_rgb.fromPartial(object.leftEye)
        : undefined;
    message.rightEye =
      object.rightEye !== undefined && object.rightEye !== null
        ? ActionCommandAll_LED_rgb.fromPartial(object.rightEye)
        : undefined;
    message.chestButton =
      object.chestButton !== undefined && object.chestButton !== null
        ? ActionCommandAll_LED_rgb.fromPartial(object.chestButton)
        : undefined;
    message.leftFoot =
      object.leftFoot !== undefined && object.leftFoot !== null
        ? ActionCommandAll_LED_rgb.fromPartial(object.leftFoot)
        : undefined;
    message.rightFoot =
      object.rightFoot !== undefined && object.rightFoot !== null
        ? ActionCommandAll_LED_rgb.fromPartial(object.rightFoot)
        : undefined;
    return message;
  },
};

function createBaseActionCommandAll_LED_rgb(): ActionCommandAll_LED_rgb {
  return { red: false, green: false, blue: false };
}

export const ActionCommandAll_LED_rgb = {
  encode(
    message: ActionCommandAll_LED_rgb,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.red === true) {
      writer.uint32(8).bool(message.red);
    }
    if (message.green === true) {
      writer.uint32(16).bool(message.green);
    }
    if (message.blue === true) {
      writer.uint32(24).bool(message.blue);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActionCommandAll_LED_rgb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCommandAll_LED_rgb();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.red = reader.bool();
          break;
        case 2:
          message.green = reader.bool();
          break;
        case 3:
          message.blue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCommandAll_LED_rgb {
    return {
      red: isSet(object.red) ? Boolean(object.red) : false,
      green: isSet(object.green) ? Boolean(object.green) : false,
      blue: isSet(object.blue) ? Boolean(object.blue) : false,
    };
  },

  toJSON(message: ActionCommandAll_LED_rgb): unknown {
    const obj: any = {};
    message.red !== undefined && (obj.red = message.red);
    message.green !== undefined && (obj.green = message.green);
    message.blue !== undefined && (obj.blue = message.blue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCommandAll_LED_rgb>, I>>(
    object: I
  ): ActionCommandAll_LED_rgb {
    const message = createBaseActionCommandAll_LED_rgb();
    message.red = object.red ?? false;
    message.green = object.green ?? false;
    message.blue = object.blue ?? false;
    return message;
  },
};

function createBaseRepeatedInt(): RepeatedInt {
  return { values: [] };
}

export const RepeatedInt = {
  encode(
    message: RepeatedInt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepeatedInt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepeatedInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.int32());
            }
          } else {
            message.values.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RepeatedInt {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: RepeatedInt): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => Math.round(e));
    } else {
      obj.values = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RepeatedInt>, I>>(
    object: I
  ): RepeatedInt {
    const message = createBaseRepeatedInt();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseFloatMatrix(): FloatMatrix {
  return { size1: 0, size2: 0, data: [] };
}

export const FloatMatrix = {
  encode(
    message: FloatMatrix,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size1 !== 0) {
      writer.uint32(8).uint32(message.size1);
    }
    if (message.size2 !== 0) {
      writer.uint32(16).uint32(message.size2);
    }
    writer.uint32(26).fork();
    for (const v of message.data) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatMatrix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatMatrix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size1 = reader.uint32();
          break;
        case 2:
          message.size2 = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.data.push(reader.float());
            }
          } else {
            message.data.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatMatrix {
    return {
      size1: isSet(object.size1) ? Number(object.size1) : 0,
      size2: isSet(object.size2) ? Number(object.size2) : 0,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: FloatMatrix): unknown {
    const obj: any = {};
    message.size1 !== undefined && (obj.size1 = Math.round(message.size1));
    message.size2 !== undefined && (obj.size2 = Math.round(message.size2));
    if (message.data) {
      obj.data = message.data.map((e) => e);
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FloatMatrix>, I>>(
    object: I
  ): FloatMatrix {
    const message = createBaseFloatMatrix();
    message.size1 = object.size1 ?? 0;
    message.size2 = object.size2 ?? 0;
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseAbsCoord(): AbsCoord {
  return { vec: [], var: undefined, weight: 0 };
}

export const AbsCoord = {
  encode(
    message: AbsCoord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.vec) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.var !== undefined) {
      FloatMatrix.encode(message.var, writer.uint32(18).fork()).ldelim();
    }
    if (message.weight !== 0) {
      writer.uint32(29).float(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbsCoord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsCoord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vec.push(reader.float());
            }
          } else {
            message.vec.push(reader.float());
          }
          break;
        case 2:
          message.var = FloatMatrix.decode(reader, reader.uint32());
          break;
        case 3:
          message.weight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AbsCoord {
    return {
      vec: Array.isArray(object?.vec)
        ? object.vec.map((e: any) => Number(e))
        : [],
      var: isSet(object.var) ? FloatMatrix.fromJSON(object.var) : undefined,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: AbsCoord): unknown {
    const obj: any = {};
    if (message.vec) {
      obj.vec = message.vec.map((e) => e);
    } else {
      obj.vec = [];
    }
    message.var !== undefined &&
      (obj.var = message.var ? FloatMatrix.toJSON(message.var) : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AbsCoord>, I>>(object: I): AbsCoord {
    const message = createBaseAbsCoord();
    message.vec = object.vec?.map((e) => e) || [];
    message.var =
      object.var !== undefined && object.var !== null
        ? FloatMatrix.fromPartial(object.var)
        : undefined;
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseSharedStateEstimationBundle(): SharedStateEstimationBundle {
  return {
    robotPos: undefined,
    ballPosRRC: undefined,
    ballVelRRC: undefined,
    haveBallUpdate: false,
  };
}

export const SharedStateEstimationBundle = {
  encode(
    message: SharedStateEstimationBundle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.robotPos !== undefined) {
      AbsCoord.encode(message.robotPos, writer.uint32(10).fork()).ldelim();
    }
    if (message.ballPosRRC !== undefined) {
      AbsCoord.encode(message.ballPosRRC, writer.uint32(18).fork()).ldelim();
    }
    if (message.ballVelRRC !== undefined) {
      AbsCoord.encode(message.ballVelRRC, writer.uint32(26).fork()).ldelim();
    }
    if (message.haveBallUpdate === true) {
      writer.uint32(32).bool(message.haveBallUpdate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SharedStateEstimationBundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharedStateEstimationBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.robotPos = AbsCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.ballPosRRC = AbsCoord.decode(reader, reader.uint32());
          break;
        case 3:
          message.ballVelRRC = AbsCoord.decode(reader, reader.uint32());
          break;
        case 4:
          message.haveBallUpdate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SharedStateEstimationBundle {
    return {
      robotPos: isSet(object.robotPos)
        ? AbsCoord.fromJSON(object.robotPos)
        : undefined,
      ballPosRRC: isSet(object.ballPosRRC)
        ? AbsCoord.fromJSON(object.ballPosRRC)
        : undefined,
      ballVelRRC: isSet(object.ballVelRRC)
        ? AbsCoord.fromJSON(object.ballVelRRC)
        : undefined,
      haveBallUpdate: isSet(object.haveBallUpdate)
        ? Boolean(object.haveBallUpdate)
        : false,
    };
  },

  toJSON(message: SharedStateEstimationBundle): unknown {
    const obj: any = {};
    message.robotPos !== undefined &&
      (obj.robotPos = message.robotPos
        ? AbsCoord.toJSON(message.robotPos)
        : undefined);
    message.ballPosRRC !== undefined &&
      (obj.ballPosRRC = message.ballPosRRC
        ? AbsCoord.toJSON(message.ballPosRRC)
        : undefined);
    message.ballVelRRC !== undefined &&
      (obj.ballVelRRC = message.ballVelRRC
        ? AbsCoord.toJSON(message.ballVelRRC)
        : undefined);
    message.haveBallUpdate !== undefined &&
      (obj.haveBallUpdate = message.haveBallUpdate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SharedStateEstimationBundle>, I>>(
    object: I
  ): SharedStateEstimationBundle {
    const message = createBaseSharedStateEstimationBundle();
    message.robotPos =
      object.robotPos !== undefined && object.robotPos !== null
        ? AbsCoord.fromPartial(object.robotPos)
        : undefined;
    message.ballPosRRC =
      object.ballPosRRC !== undefined && object.ballPosRRC !== null
        ? AbsCoord.fromPartial(object.ballPosRRC)
        : undefined;
    message.ballVelRRC =
      object.ballVelRRC !== undefined && object.ballVelRRC !== null
        ? AbsCoord.fromPartial(object.ballVelRRC)
        : undefined;
    message.haveBallUpdate = object.haveBallUpdate ?? false;
    return message;
  },
};

function createBaseJointValues(): JointValues {
  return { angles: [], stiffnesses: [], temperatures: [], currents: [] };
}

export const JointValues = {
  encode(
    message: JointValues,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.angles) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.stiffnesses) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.temperatures) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.currents) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JointValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJointValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.angles.push(reader.float());
            }
          } else {
            message.angles.push(reader.float());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stiffnesses.push(reader.float());
            }
          } else {
            message.stiffnesses.push(reader.float());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.temperatures.push(reader.float());
            }
          } else {
            message.temperatures.push(reader.float());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.currents.push(reader.float());
            }
          } else {
            message.currents.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JointValues {
    return {
      angles: Array.isArray(object?.angles)
        ? object.angles.map((e: any) => Number(e))
        : [],
      stiffnesses: Array.isArray(object?.stiffnesses)
        ? object.stiffnesses.map((e: any) => Number(e))
        : [],
      temperatures: Array.isArray(object?.temperatures)
        ? object.temperatures.map((e: any) => Number(e))
        : [],
      currents: Array.isArray(object?.currents)
        ? object.currents.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: JointValues): unknown {
    const obj: any = {};
    if (message.angles) {
      obj.angles = message.angles.map((e) => e);
    } else {
      obj.angles = [];
    }
    if (message.stiffnesses) {
      obj.stiffnesses = message.stiffnesses.map((e) => e);
    } else {
      obj.stiffnesses = [];
    }
    if (message.temperatures) {
      obj.temperatures = message.temperatures.map((e) => e);
    } else {
      obj.temperatures = [];
    }
    if (message.currents) {
      obj.currents = message.currents.map((e) => e);
    } else {
      obj.currents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JointValues>, I>>(
    object: I
  ): JointValues {
    const message = createBaseJointValues();
    message.angles = object.angles?.map((e) => e) || [];
    message.stiffnesses = object.stiffnesses?.map((e) => e) || [];
    message.temperatures = object.temperatures?.map((e) => e) || [];
    message.currents = object.currents?.map((e) => e) || [];
    return message;
  },
};

function createBaseSensorValues(): SensorValues {
  return { joints: undefined, sensors: [] };
}

export const SensorValues = {
  encode(
    message: SensorValues,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.joints !== undefined) {
      JointValues.encode(message.joints, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.sensors) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SensorValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSensorValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.joints = JointValues.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sensors.push(reader.float());
            }
          } else {
            message.sensors.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SensorValues {
    return {
      joints: isSet(object.joints)
        ? JointValues.fromJSON(object.joints)
        : undefined,
      sensors: Array.isArray(object?.sensors)
        ? object.sensors.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SensorValues): unknown {
    const obj: any = {};
    message.joints !== undefined &&
      (obj.joints = message.joints
        ? JointValues.toJSON(message.joints)
        : undefined);
    if (message.sensors) {
      obj.sensors = message.sensors.map((e) => e);
    } else {
      obj.sensors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SensorValues>, I>>(
    object: I
  ): SensorValues {
    const message = createBaseSensorValues();
    message.joints =
      object.joints !== undefined && object.joints !== null
        ? JointValues.fromPartial(object.joints)
        : undefined;
    message.sensors = object.sensors?.map((e) => e) || [];
    return message;
  },
};

function createBaseGameController(): GameController {
  return { teamRed: false, playerNumber: 0, ourTeam: undefined };
}

export const GameController = {
  encode(
    message: GameController,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.teamRed === true) {
      writer.uint32(8).bool(message.teamRed);
    }
    if (message.playerNumber !== 0) {
      writer.uint32(16).int32(message.playerNumber);
    }
    if (message.ourTeam !== undefined) {
      GameController_TeamInfo.encode(
        message.ourTeam,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameController {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameController();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamRed = reader.bool();
          break;
        case 2:
          message.playerNumber = reader.int32();
          break;
        case 3:
          message.ourTeam = GameController_TeamInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameController {
    return {
      teamRed: isSet(object.teamRed) ? Boolean(object.teamRed) : false,
      playerNumber: isSet(object.playerNumber)
        ? Number(object.playerNumber)
        : 0,
      ourTeam: isSet(object.ourTeam)
        ? GameController_TeamInfo.fromJSON(object.ourTeam)
        : undefined,
    };
  },

  toJSON(message: GameController): unknown {
    const obj: any = {};
    message.teamRed !== undefined && (obj.teamRed = message.teamRed);
    message.playerNumber !== undefined &&
      (obj.playerNumber = Math.round(message.playerNumber));
    message.ourTeam !== undefined &&
      (obj.ourTeam = message.ourTeam
        ? GameController_TeamInfo.toJSON(message.ourTeam)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameController>, I>>(
    object: I
  ): GameController {
    const message = createBaseGameController();
    message.teamRed = object.teamRed ?? false;
    message.playerNumber = object.playerNumber ?? 0;
    message.ourTeam =
      object.ourTeam !== undefined && object.ourTeam !== null
        ? GameController_TeamInfo.fromPartial(object.ourTeam)
        : undefined;
    return message;
  },
};

function createBaseGameController_TeamInfo(): GameController_TeamInfo {
  return { teamNumber: 0 };
}

export const GameController_TeamInfo = {
  encode(
    message: GameController_TeamInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.teamNumber !== 0) {
      writer.uint32(8).int32(message.teamNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameController_TeamInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameController_TeamInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameController_TeamInfo {
    return {
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
    };
  },

  toJSON(message: GameController_TeamInfo): unknown {
    const obj: any = {};
    message.teamNumber !== undefined &&
      (obj.teamNumber = Math.round(message.teamNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameController_TeamInfo>, I>>(
    object: I
  ): GameController_TeamInfo {
    const message = createBaseGameController_TeamInfo();
    message.teamNumber = object.teamNumber ?? 0;
    return message;
  },
};

function createBaseMotion(): Motion {
  return {
    sensors: undefined,
    pose: undefined,
    com: undefined,
    odometry: undefined,
    active: undefined,
    jointRequest: undefined,
    motionDebugInfo: undefined,
  };
}

export const Motion = {
  encode(
    message: Motion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sensors !== undefined) {
      SensorValues.encode(message.sensors, writer.uint32(10).fork()).ldelim();
    }
    if (message.pose !== undefined) {
      Motion_Pose.encode(message.pose, writer.uint32(18).fork()).ldelim();
    }
    if (message.com !== undefined) {
      XYZCoord.encode(message.com, writer.uint32(26).fork()).ldelim();
    }
    if (message.odometry !== undefined) {
      Motion_Odometry.encode(
        message.odometry,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.active !== undefined) {
      ActionCommandAll.encode(
        message.active,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.jointRequest !== undefined) {
      JointValues.encode(
        message.jointRequest,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.motionDebugInfo !== undefined) {
      Motion_MotionDebugInfo.encode(
        message.motionDebugInfo,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Motion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sensors = SensorValues.decode(reader, reader.uint32());
          break;
        case 2:
          message.pose = Motion_Pose.decode(reader, reader.uint32());
          break;
        case 3:
          message.com = XYZCoord.decode(reader, reader.uint32());
          break;
        case 4:
          message.odometry = Motion_Odometry.decode(reader, reader.uint32());
          break;
        case 5:
          message.active = ActionCommandAll.decode(reader, reader.uint32());
          break;
        case 6:
          message.jointRequest = JointValues.decode(reader, reader.uint32());
          break;
        case 7:
          message.motionDebugInfo = Motion_MotionDebugInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion {
    return {
      sensors: isSet(object.sensors)
        ? SensorValues.fromJSON(object.sensors)
        : undefined,
      pose: isSet(object.pose) ? Motion_Pose.fromJSON(object.pose) : undefined,
      com: isSet(object.com) ? XYZCoord.fromJSON(object.com) : undefined,
      odometry: isSet(object.odometry)
        ? Motion_Odometry.fromJSON(object.odometry)
        : undefined,
      active: isSet(object.active)
        ? ActionCommandAll.fromJSON(object.active)
        : undefined,
      jointRequest: isSet(object.jointRequest)
        ? JointValues.fromJSON(object.jointRequest)
        : undefined,
      motionDebugInfo: isSet(object.motionDebugInfo)
        ? Motion_MotionDebugInfo.fromJSON(object.motionDebugInfo)
        : undefined,
    };
  },

  toJSON(message: Motion): unknown {
    const obj: any = {};
    message.sensors !== undefined &&
      (obj.sensors = message.sensors
        ? SensorValues.toJSON(message.sensors)
        : undefined);
    message.pose !== undefined &&
      (obj.pose = message.pose ? Motion_Pose.toJSON(message.pose) : undefined);
    message.com !== undefined &&
      (obj.com = message.com ? XYZCoord.toJSON(message.com) : undefined);
    message.odometry !== undefined &&
      (obj.odometry = message.odometry
        ? Motion_Odometry.toJSON(message.odometry)
        : undefined);
    message.active !== undefined &&
      (obj.active = message.active
        ? ActionCommandAll.toJSON(message.active)
        : undefined);
    message.jointRequest !== undefined &&
      (obj.jointRequest = message.jointRequest
        ? JointValues.toJSON(message.jointRequest)
        : undefined);
    message.motionDebugInfo !== undefined &&
      (obj.motionDebugInfo = message.motionDebugInfo
        ? Motion_MotionDebugInfo.toJSON(message.motionDebugInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion>, I>>(object: I): Motion {
    const message = createBaseMotion();
    message.sensors =
      object.sensors !== undefined && object.sensors !== null
        ? SensorValues.fromPartial(object.sensors)
        : undefined;
    message.pose =
      object.pose !== undefined && object.pose !== null
        ? Motion_Pose.fromPartial(object.pose)
        : undefined;
    message.com =
      object.com !== undefined && object.com !== null
        ? XYZCoord.fromPartial(object.com)
        : undefined;
    message.odometry =
      object.odometry !== undefined && object.odometry !== null
        ? Motion_Odometry.fromPartial(object.odometry)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? ActionCommandAll.fromPartial(object.active)
        : undefined;
    message.jointRequest =
      object.jointRequest !== undefined && object.jointRequest !== null
        ? JointValues.fromPartial(object.jointRequest)
        : undefined;
    message.motionDebugInfo =
      object.motionDebugInfo !== undefined && object.motionDebugInfo !== null
        ? Motion_MotionDebugInfo.fromPartial(object.motionDebugInfo)
        : undefined;
    return message;
  },
};

function createBaseMotion_Pose(): Motion_Pose {
  return {
    topCameraToWorldTransform: undefined,
    botCameraToWorldTransform: undefined,
    origin: undefined,
    zunit: undefined,
    topCOrigin: undefined,
    botCOrigin: undefined,
    horizon: undefined,
    topExclusionArray: [],
    botExclusionArray: [],
    neckToWorldTransform: undefined,
  };
}

export const Motion_Pose = {
  encode(
    message: Motion_Pose,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topCameraToWorldTransform !== undefined) {
      FloatMatrix.encode(
        message.topCameraToWorldTransform,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.botCameraToWorldTransform !== undefined) {
      FloatMatrix.encode(
        message.botCameraToWorldTransform,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.origin !== undefined) {
      FloatMatrix.encode(message.origin, writer.uint32(26).fork()).ldelim();
    }
    if (message.zunit !== undefined) {
      FloatMatrix.encode(message.zunit, writer.uint32(34).fork()).ldelim();
    }
    if (message.topCOrigin !== undefined) {
      FloatMatrix.encode(message.topCOrigin, writer.uint32(42).fork()).ldelim();
    }
    if (message.botCOrigin !== undefined) {
      FloatMatrix.encode(message.botCOrigin, writer.uint32(50).fork()).ldelim();
    }
    if (message.horizon !== undefined) {
      PairIntInt.encode(message.horizon, writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(66).fork();
    for (const v of message.topExclusionArray) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.botExclusionArray) {
      writer.sint32(v);
    }
    writer.ldelim();
    if (message.neckToWorldTransform !== undefined) {
      FloatMatrix.encode(
        message.neckToWorldTransform,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Motion_Pose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion_Pose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topCameraToWorldTransform = FloatMatrix.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.botCameraToWorldTransform = FloatMatrix.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.origin = FloatMatrix.decode(reader, reader.uint32());
          break;
        case 4:
          message.zunit = FloatMatrix.decode(reader, reader.uint32());
          break;
        case 5:
          message.topCOrigin = FloatMatrix.decode(reader, reader.uint32());
          break;
        case 6:
          message.botCOrigin = FloatMatrix.decode(reader, reader.uint32());
          break;
        case 7:
          message.horizon = PairIntInt.decode(reader, reader.uint32());
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.topExclusionArray.push(reader.sint32());
            }
          } else {
            message.topExclusionArray.push(reader.sint32());
          }
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.botExclusionArray.push(reader.sint32());
            }
          } else {
            message.botExclusionArray.push(reader.sint32());
          }
          break;
        case 10:
          message.neckToWorldTransform = FloatMatrix.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion_Pose {
    return {
      topCameraToWorldTransform: isSet(object.topCameraToWorldTransform)
        ? FloatMatrix.fromJSON(object.topCameraToWorldTransform)
        : undefined,
      botCameraToWorldTransform: isSet(object.botCameraToWorldTransform)
        ? FloatMatrix.fromJSON(object.botCameraToWorldTransform)
        : undefined,
      origin: isSet(object.origin)
        ? FloatMatrix.fromJSON(object.origin)
        : undefined,
      zunit: isSet(object.zunit)
        ? FloatMatrix.fromJSON(object.zunit)
        : undefined,
      topCOrigin: isSet(object.topCOrigin)
        ? FloatMatrix.fromJSON(object.topCOrigin)
        : undefined,
      botCOrigin: isSet(object.botCOrigin)
        ? FloatMatrix.fromJSON(object.botCOrigin)
        : undefined,
      horizon: isSet(object.horizon)
        ? PairIntInt.fromJSON(object.horizon)
        : undefined,
      topExclusionArray: Array.isArray(object?.topExclusionArray)
        ? object.topExclusionArray.map((e: any) => Number(e))
        : [],
      botExclusionArray: Array.isArray(object?.botExclusionArray)
        ? object.botExclusionArray.map((e: any) => Number(e))
        : [],
      neckToWorldTransform: isSet(object.neckToWorldTransform)
        ? FloatMatrix.fromJSON(object.neckToWorldTransform)
        : undefined,
    };
  },

  toJSON(message: Motion_Pose): unknown {
    const obj: any = {};
    message.topCameraToWorldTransform !== undefined &&
      (obj.topCameraToWorldTransform = message.topCameraToWorldTransform
        ? FloatMatrix.toJSON(message.topCameraToWorldTransform)
        : undefined);
    message.botCameraToWorldTransform !== undefined &&
      (obj.botCameraToWorldTransform = message.botCameraToWorldTransform
        ? FloatMatrix.toJSON(message.botCameraToWorldTransform)
        : undefined);
    message.origin !== undefined &&
      (obj.origin = message.origin
        ? FloatMatrix.toJSON(message.origin)
        : undefined);
    message.zunit !== undefined &&
      (obj.zunit = message.zunit
        ? FloatMatrix.toJSON(message.zunit)
        : undefined);
    message.topCOrigin !== undefined &&
      (obj.topCOrigin = message.topCOrigin
        ? FloatMatrix.toJSON(message.topCOrigin)
        : undefined);
    message.botCOrigin !== undefined &&
      (obj.botCOrigin = message.botCOrigin
        ? FloatMatrix.toJSON(message.botCOrigin)
        : undefined);
    message.horizon !== undefined &&
      (obj.horizon = message.horizon
        ? PairIntInt.toJSON(message.horizon)
        : undefined);
    if (message.topExclusionArray) {
      obj.topExclusionArray = message.topExclusionArray.map((e) =>
        Math.round(e)
      );
    } else {
      obj.topExclusionArray = [];
    }
    if (message.botExclusionArray) {
      obj.botExclusionArray = message.botExclusionArray.map((e) =>
        Math.round(e)
      );
    } else {
      obj.botExclusionArray = [];
    }
    message.neckToWorldTransform !== undefined &&
      (obj.neckToWorldTransform = message.neckToWorldTransform
        ? FloatMatrix.toJSON(message.neckToWorldTransform)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion_Pose>, I>>(
    object: I
  ): Motion_Pose {
    const message = createBaseMotion_Pose();
    message.topCameraToWorldTransform =
      object.topCameraToWorldTransform !== undefined &&
      object.topCameraToWorldTransform !== null
        ? FloatMatrix.fromPartial(object.topCameraToWorldTransform)
        : undefined;
    message.botCameraToWorldTransform =
      object.botCameraToWorldTransform !== undefined &&
      object.botCameraToWorldTransform !== null
        ? FloatMatrix.fromPartial(object.botCameraToWorldTransform)
        : undefined;
    message.origin =
      object.origin !== undefined && object.origin !== null
        ? FloatMatrix.fromPartial(object.origin)
        : undefined;
    message.zunit =
      object.zunit !== undefined && object.zunit !== null
        ? FloatMatrix.fromPartial(object.zunit)
        : undefined;
    message.topCOrigin =
      object.topCOrigin !== undefined && object.topCOrigin !== null
        ? FloatMatrix.fromPartial(object.topCOrigin)
        : undefined;
    message.botCOrigin =
      object.botCOrigin !== undefined && object.botCOrigin !== null
        ? FloatMatrix.fromPartial(object.botCOrigin)
        : undefined;
    message.horizon =
      object.horizon !== undefined && object.horizon !== null
        ? PairIntInt.fromPartial(object.horizon)
        : undefined;
    message.topExclusionArray = object.topExclusionArray?.map((e) => e) || [];
    message.botExclusionArray = object.botExclusionArray?.map((e) => e) || [];
    message.neckToWorldTransform =
      object.neckToWorldTransform !== undefined &&
      object.neckToWorldTransform !== null
        ? FloatMatrix.fromPartial(object.neckToWorldTransform)
        : undefined;
    return message;
  },
};

function createBaseMotion_Odometry(): Motion_Odometry {
  return { forward: 0, left: 0, turn: 0 };
}

export const Motion_Odometry = {
  encode(
    message: Motion_Odometry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.forward !== 0) {
      writer.uint32(13).float(message.forward);
    }
    if (message.left !== 0) {
      writer.uint32(21).float(message.left);
    }
    if (message.turn !== 0) {
      writer.uint32(29).float(message.turn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Motion_Odometry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion_Odometry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forward = reader.float();
          break;
        case 2:
          message.left = reader.float();
          break;
        case 3:
          message.turn = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion_Odometry {
    return {
      forward: isSet(object.forward) ? Number(object.forward) : 0,
      left: isSet(object.left) ? Number(object.left) : 0,
      turn: isSet(object.turn) ? Number(object.turn) : 0,
    };
  },

  toJSON(message: Motion_Odometry): unknown {
    const obj: any = {};
    message.forward !== undefined && (obj.forward = message.forward);
    message.left !== undefined && (obj.left = message.left);
    message.turn !== undefined && (obj.turn = message.turn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion_Odometry>, I>>(
    object: I
  ): Motion_Odometry {
    const message = createBaseMotion_Odometry();
    message.forward = object.forward ?? 0;
    message.left = object.left ?? 0;
    message.turn = object.turn ?? 0;
    return message;
  },
};

function createBaseMotion_MotionDebugInfo(): Motion_MotionDebugInfo {
  return { feetPosition: undefined };
}

export const Motion_MotionDebugInfo = {
  encode(
    message: Motion_MotionDebugInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.feetPosition !== undefined) {
      Motion_FeetPosition.encode(
        message.feetPosition,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Motion_MotionDebugInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion_MotionDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feetPosition = Motion_FeetPosition.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion_MotionDebugInfo {
    return {
      feetPosition: isSet(object.feetPosition)
        ? Motion_FeetPosition.fromJSON(object.feetPosition)
        : undefined,
    };
  },

  toJSON(message: Motion_MotionDebugInfo): unknown {
    const obj: any = {};
    message.feetPosition !== undefined &&
      (obj.feetPosition = message.feetPosition
        ? Motion_FeetPosition.toJSON(message.feetPosition)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion_MotionDebugInfo>, I>>(
    object: I
  ): Motion_MotionDebugInfo {
    const message = createBaseMotion_MotionDebugInfo();
    message.feetPosition =
      object.feetPosition !== undefined && object.feetPosition !== null
        ? Motion_FeetPosition.fromPartial(object.feetPosition)
        : undefined;
    return message;
  },
};

function createBaseMotion_FeetPosition(): Motion_FeetPosition {
  return { left: undefined, right: undefined };
}

export const Motion_FeetPosition = {
  encode(
    message: Motion_FeetPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.left !== undefined) {
      Motion_FootPosition.encode(
        message.left,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.right !== undefined) {
      Motion_FootPosition.encode(
        message.right,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Motion_FeetPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion_FeetPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.left = Motion_FootPosition.decode(reader, reader.uint32());
          break;
        case 2:
          message.right = Motion_FootPosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion_FeetPosition {
    return {
      left: isSet(object.left)
        ? Motion_FootPosition.fromJSON(object.left)
        : undefined,
      right: isSet(object.right)
        ? Motion_FootPosition.fromJSON(object.right)
        : undefined,
    };
  },

  toJSON(message: Motion_FeetPosition): unknown {
    const obj: any = {};
    message.left !== undefined &&
      (obj.left = message.left
        ? Motion_FootPosition.toJSON(message.left)
        : undefined);
    message.right !== undefined &&
      (obj.right = message.right
        ? Motion_FootPosition.toJSON(message.right)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion_FeetPosition>, I>>(
    object: I
  ): Motion_FeetPosition {
    const message = createBaseMotion_FeetPosition();
    message.left =
      object.left !== undefined && object.left !== null
        ? Motion_FootPosition.fromPartial(object.left)
        : undefined;
    message.right =
      object.right !== undefined && object.right !== null
        ? Motion_FootPosition.fromPartial(object.right)
        : undefined;
    return message;
  },
};

function createBaseMotion_FootPosition(): Motion_FootPosition {
  return { x: 0, y: 0, theta: 0 };
}

export const Motion_FootPosition = {
  encode(
    message: Motion_FootPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.theta !== 0) {
      writer.uint32(29).float(message.theta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Motion_FootPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMotion_FootPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.theta = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Motion_FootPosition {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      theta: isSet(object.theta) ? Number(object.theta) : 0,
    };
  },

  toJSON(message: Motion_FootPosition): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.theta !== undefined && (obj.theta = message.theta);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Motion_FootPosition>, I>>(
    object: I
  ): Motion_FootPosition {
    const message = createBaseMotion_FootPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.theta = object.theta ?? 0;
    return message;
  },
};

function createBasePerception(): Perception {
  return {
    behaviour: 0,
    kinematics: 0,
    stateEstimation: 0,
    total: 0,
    vision: 0,
  };
}

export const Perception = {
  encode(
    message: Perception,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.behaviour !== 0) {
      writer.uint32(8).uint32(message.behaviour);
    }
    if (message.kinematics !== 0) {
      writer.uint32(16).uint32(message.kinematics);
    }
    if (message.stateEstimation !== 0) {
      writer.uint32(24).uint32(message.stateEstimation);
    }
    if (message.total !== 0) {
      writer.uint32(32).uint32(message.total);
    }
    if (message.vision !== 0) {
      writer.uint32(40).uint32(message.vision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Perception {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerception();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.behaviour = reader.uint32();
          break;
        case 2:
          message.kinematics = reader.uint32();
          break;
        case 3:
          message.stateEstimation = reader.uint32();
          break;
        case 4:
          message.total = reader.uint32();
          break;
        case 5:
          message.vision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Perception {
    return {
      behaviour: isSet(object.behaviour) ? Number(object.behaviour) : 0,
      kinematics: isSet(object.kinematics) ? Number(object.kinematics) : 0,
      stateEstimation: isSet(object.stateEstimation)
        ? Number(object.stateEstimation)
        : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      vision: isSet(object.vision) ? Number(object.vision) : 0,
    };
  },

  toJSON(message: Perception): unknown {
    const obj: any = {};
    message.behaviour !== undefined &&
      (obj.behaviour = Math.round(message.behaviour));
    message.kinematics !== undefined &&
      (obj.kinematics = Math.round(message.kinematics));
    message.stateEstimation !== undefined &&
      (obj.stateEstimation = Math.round(message.stateEstimation));
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.vision !== undefined && (obj.vision = Math.round(message.vision));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Perception>, I>>(
    object: I
  ): Perception {
    const message = createBasePerception();
    message.behaviour = object.behaviour ?? 0;
    message.kinematics = object.kinematics ?? 0;
    message.stateEstimation = object.stateEstimation ?? 0;
    message.total = object.total ?? 0;
    message.vision = object.vision ?? 0;
    return message;
  },
};

function createBaseKinematics(): Kinematics {
  return { parameters: undefined };
}

export const Kinematics = {
  encode(
    message: Kinematics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parameters !== undefined) {
      Kinematics_Parameters.encode(
        message.parameters,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Kinematics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKinematics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.parameters = Kinematics_Parameters.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Kinematics {
    return {
      parameters: isSet(object.parameters)
        ? Kinematics_Parameters.fromJSON(object.parameters)
        : undefined,
    };
  },

  toJSON(message: Kinematics): unknown {
    const obj: any = {};
    message.parameters !== undefined &&
      (obj.parameters = message.parameters
        ? Kinematics_Parameters.toJSON(message.parameters)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Kinematics>, I>>(
    object: I
  ): Kinematics {
    const message = createBaseKinematics();
    message.parameters =
      object.parameters !== undefined && object.parameters !== null
        ? Kinematics_Parameters.fromPartial(object.parameters)
        : undefined;
    return message;
  },
};

function createBaseKinematics_Parameters(): Kinematics_Parameters {
  return {
    cameraPitchTop: 0,
    cameraYawTop: 0,
    cameraRollTop: 0,
    cameraYawBottom: 0,
    cameraPitchBottom: 0,
    cameraRollBottom: 0,
    bodyPitch: 0,
  };
}

export const Kinematics_Parameters = {
  encode(
    message: Kinematics_Parameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cameraPitchTop !== 0) {
      writer.uint32(13).float(message.cameraPitchTop);
    }
    if (message.cameraYawTop !== 0) {
      writer.uint32(21).float(message.cameraYawTop);
    }
    if (message.cameraRollTop !== 0) {
      writer.uint32(29).float(message.cameraRollTop);
    }
    if (message.cameraYawBottom !== 0) {
      writer.uint32(37).float(message.cameraYawBottom);
    }
    if (message.cameraPitchBottom !== 0) {
      writer.uint32(45).float(message.cameraPitchBottom);
    }
    if (message.cameraRollBottom !== 0) {
      writer.uint32(53).float(message.cameraRollBottom);
    }
    if (message.bodyPitch !== 0) {
      writer.uint32(61).float(message.bodyPitch);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Kinematics_Parameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKinematics_Parameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cameraPitchTop = reader.float();
          break;
        case 2:
          message.cameraYawTop = reader.float();
          break;
        case 3:
          message.cameraRollTop = reader.float();
          break;
        case 4:
          message.cameraYawBottom = reader.float();
          break;
        case 5:
          message.cameraPitchBottom = reader.float();
          break;
        case 6:
          message.cameraRollBottom = reader.float();
          break;
        case 7:
          message.bodyPitch = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Kinematics_Parameters {
    return {
      cameraPitchTop: isSet(object.cameraPitchTop)
        ? Number(object.cameraPitchTop)
        : 0,
      cameraYawTop: isSet(object.cameraYawTop)
        ? Number(object.cameraYawTop)
        : 0,
      cameraRollTop: isSet(object.cameraRollTop)
        ? Number(object.cameraRollTop)
        : 0,
      cameraYawBottom: isSet(object.cameraYawBottom)
        ? Number(object.cameraYawBottom)
        : 0,
      cameraPitchBottom: isSet(object.cameraPitchBottom)
        ? Number(object.cameraPitchBottom)
        : 0,
      cameraRollBottom: isSet(object.cameraRollBottom)
        ? Number(object.cameraRollBottom)
        : 0,
      bodyPitch: isSet(object.bodyPitch) ? Number(object.bodyPitch) : 0,
    };
  },

  toJSON(message: Kinematics_Parameters): unknown {
    const obj: any = {};
    message.cameraPitchTop !== undefined &&
      (obj.cameraPitchTop = message.cameraPitchTop);
    message.cameraYawTop !== undefined &&
      (obj.cameraYawTop = message.cameraYawTop);
    message.cameraRollTop !== undefined &&
      (obj.cameraRollTop = message.cameraRollTop);
    message.cameraYawBottom !== undefined &&
      (obj.cameraYawBottom = message.cameraYawBottom);
    message.cameraPitchBottom !== undefined &&
      (obj.cameraPitchBottom = message.cameraPitchBottom);
    message.cameraRollBottom !== undefined &&
      (obj.cameraRollBottom = message.cameraRollBottom);
    message.bodyPitch !== undefined && (obj.bodyPitch = message.bodyPitch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Kinematics_Parameters>, I>>(
    object: I
  ): Kinematics_Parameters {
    const message = createBaseKinematics_Parameters();
    message.cameraPitchTop = object.cameraPitchTop ?? 0;
    message.cameraYawTop = object.cameraYawTop ?? 0;
    message.cameraRollTop = object.cameraRollTop ?? 0;
    message.cameraYawBottom = object.cameraYawBottom ?? 0;
    message.cameraPitchBottom = object.cameraPitchBottom ?? 0;
    message.cameraRollBottom = object.cameraRollBottom ?? 0;
    message.bodyPitch = object.bodyPitch ?? 0;
    return message;
  },
};

function createBaseBehaviour(): Behaviour {
  return { request: [] };
}

export const Behaviour = {
  encode(
    message: Behaviour,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.request) {
      Behaviour_BehaviourRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Behaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request.push(
            Behaviour_BehaviourRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Behaviour {
    return {
      request: Array.isArray(object?.request)
        ? object.request.map((e: any) => Behaviour_BehaviourRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Behaviour): unknown {
    const obj: any = {};
    if (message.request) {
      obj.request = message.request.map((e) =>
        e ? Behaviour_BehaviourRequest.toJSON(e) : undefined
      );
    } else {
      obj.request = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Behaviour>, I>>(
    object: I
  ): Behaviour {
    const message = createBaseBehaviour();
    message.request =
      object.request?.map((e) => Behaviour_BehaviourRequest.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseBehaviour_BehaviourRequest(): Behaviour_BehaviourRequest {
  return {
    actions: undefined,
    behaviourDebugInfo: undefined,
    behaviourSharedData: undefined,
  };
}

export const Behaviour_BehaviourRequest = {
  encode(
    message: Behaviour_BehaviourRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actions !== undefined) {
      ActionCommandAll.encode(
        message.actions,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.behaviourDebugInfo !== undefined) {
      BehaviourDebugInfo.encode(
        message.behaviourDebugInfo,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.behaviourSharedData !== undefined) {
      BehaviourSharedData.encode(
        message.behaviourSharedData,
        writer.uint32(234).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Behaviour_BehaviourRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBehaviour_BehaviourRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.actions = ActionCommandAll.decode(reader, reader.uint32());
          break;
        case 28:
          message.behaviourDebugInfo = BehaviourDebugInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.behaviourSharedData = BehaviourSharedData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Behaviour_BehaviourRequest {
    return {
      actions: isSet(object.actions)
        ? ActionCommandAll.fromJSON(object.actions)
        : undefined,
      behaviourDebugInfo: isSet(object.behaviourDebugInfo)
        ? BehaviourDebugInfo.fromJSON(object.behaviourDebugInfo)
        : undefined,
      behaviourSharedData: isSet(object.behaviourSharedData)
        ? BehaviourSharedData.fromJSON(object.behaviourSharedData)
        : undefined,
    };
  },

  toJSON(message: Behaviour_BehaviourRequest): unknown {
    const obj: any = {};
    message.actions !== undefined &&
      (obj.actions = message.actions
        ? ActionCommandAll.toJSON(message.actions)
        : undefined);
    message.behaviourDebugInfo !== undefined &&
      (obj.behaviourDebugInfo = message.behaviourDebugInfo
        ? BehaviourDebugInfo.toJSON(message.behaviourDebugInfo)
        : undefined);
    message.behaviourSharedData !== undefined &&
      (obj.behaviourSharedData = message.behaviourSharedData
        ? BehaviourSharedData.toJSON(message.behaviourSharedData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Behaviour_BehaviourRequest>, I>>(
    object: I
  ): Behaviour_BehaviourRequest {
    const message = createBaseBehaviour_BehaviourRequest();
    message.actions =
      object.actions !== undefined && object.actions !== null
        ? ActionCommandAll.fromPartial(object.actions)
        : undefined;
    message.behaviourDebugInfo =
      object.behaviourDebugInfo !== undefined &&
      object.behaviourDebugInfo !== null
        ? BehaviourDebugInfo.fromPartial(object.behaviourDebugInfo)
        : undefined;
    message.behaviourSharedData =
      object.behaviourSharedData !== undefined &&
      object.behaviourSharedData !== null
        ? BehaviourSharedData.fromPartial(object.behaviourSharedData)
        : undefined;
    return message;
  },
};

function createBasePoint(): Point {
  return { x: 0, y: 0 };
}

export const Point = {
  encode(message: Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).sint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).sint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Point {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.sint32();
          break;
        case 2:
          message.y = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Point {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseBBox(): BBox {
  return { a: undefined, b: undefined };
}

export const BBox = {
  encode(message: BBox, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== undefined) {
      Point.encode(message.a, writer.uint32(10).fork()).ldelim();
    }
    if (message.b !== undefined) {
      Point.encode(message.b, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BBox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.b = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BBox {
    return {
      a: isSet(object.a) ? Point.fromJSON(object.a) : undefined,
      b: isSet(object.b) ? Point.fromJSON(object.b) : undefined,
    };
  },

  toJSON(message: BBox): unknown {
    const obj: any = {};
    message.a !== undefined &&
      (obj.a = message.a ? Point.toJSON(message.a) : undefined);
    message.b !== undefined &&
      (obj.b = message.b ? Point.toJSON(message.b) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BBox>, I>>(object: I): BBox {
    const message = createBaseBBox();
    message.a =
      object.a !== undefined && object.a !== null
        ? Point.fromPartial(object.a)
        : undefined;
    message.b =
      object.b !== undefined && object.b !== null
        ? Point.fromPartial(object.b)
        : undefined;
    return message;
  },
};

function createBaseRRCoord(): RRCoord {
  return { vec: [], var: undefined };
}

export const RRCoord = {
  encode(
    message: RRCoord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.vec) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.var !== undefined) {
      FloatMatrix.encode(message.var, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RRCoord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRRCoord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vec.push(reader.float());
            }
          } else {
            message.vec.push(reader.float());
          }
          break;
        case 2:
          message.var = FloatMatrix.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RRCoord {
    return {
      vec: Array.isArray(object?.vec)
        ? object.vec.map((e: any) => Number(e))
        : [],
      var: isSet(object.var) ? FloatMatrix.fromJSON(object.var) : undefined,
    };
  },

  toJSON(message: RRCoord): unknown {
    const obj: any = {};
    if (message.vec) {
      obj.vec = message.vec.map((e) => e);
    } else {
      obj.vec = [];
    }
    message.var !== undefined &&
      (obj.var = message.var ? FloatMatrix.toJSON(message.var) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RRCoord>, I>>(object: I): RRCoord {
    const message = createBaseRRCoord();
    message.vec = object.vec?.map((e) => e) || [];
    message.var =
      object.var !== undefined && object.var !== null
        ? FloatMatrix.fromPartial(object.var)
        : undefined;
    return message;
  },
};

function createBaseBehaviourSharedData(): BehaviourSharedData {
  return {
    role: 0,
    playingBall: false,
    needAssistance: false,
    isAssisting: false,
    secondsSinceLastKick: 0,
    isKickedOff: false,
    walkingToX: 0,
    walkingToY: 0,
    walkingToH: 0,
  };
}

export const BehaviourSharedData = {
  encode(
    message: BehaviourSharedData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.role !== 0) {
      writer.uint32(64).int32(message.role);
    }
    if (message.playingBall === true) {
      writer.uint32(72).bool(message.playingBall);
    }
    if (message.needAssistance === true) {
      writer.uint32(80).bool(message.needAssistance);
    }
    if (message.isAssisting === true) {
      writer.uint32(88).bool(message.isAssisting);
    }
    if (message.secondsSinceLastKick !== 0) {
      writer.uint32(96).int32(message.secondsSinceLastKick);
    }
    if (message.isKickedOff === true) {
      writer.uint32(112).bool(message.isKickedOff);
    }
    if (message.walkingToX !== 0) {
      writer.uint32(157).float(message.walkingToX);
    }
    if (message.walkingToY !== 0) {
      writer.uint32(165).float(message.walkingToY);
    }
    if (message.walkingToH !== 0) {
      writer.uint32(173).float(message.walkingToH);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BehaviourSharedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBehaviourSharedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.role = reader.int32();
          break;
        case 9:
          message.playingBall = reader.bool();
          break;
        case 10:
          message.needAssistance = reader.bool();
          break;
        case 11:
          message.isAssisting = reader.bool();
          break;
        case 12:
          message.secondsSinceLastKick = reader.int32();
          break;
        case 14:
          message.isKickedOff = reader.bool();
          break;
        case 19:
          message.walkingToX = reader.float();
          break;
        case 20:
          message.walkingToY = reader.float();
          break;
        case 21:
          message.walkingToH = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BehaviourSharedData {
    return {
      role: isSet(object.role) ? Number(object.role) : 0,
      playingBall: isSet(object.playingBall)
        ? Boolean(object.playingBall)
        : false,
      needAssistance: isSet(object.needAssistance)
        ? Boolean(object.needAssistance)
        : false,
      isAssisting: isSet(object.isAssisting)
        ? Boolean(object.isAssisting)
        : false,
      secondsSinceLastKick: isSet(object.secondsSinceLastKick)
        ? Number(object.secondsSinceLastKick)
        : 0,
      isKickedOff: isSet(object.isKickedOff)
        ? Boolean(object.isKickedOff)
        : false,
      walkingToX: isSet(object.walkingToX) ? Number(object.walkingToX) : 0,
      walkingToY: isSet(object.walkingToY) ? Number(object.walkingToY) : 0,
      walkingToH: isSet(object.walkingToH) ? Number(object.walkingToH) : 0,
    };
  },

  toJSON(message: BehaviourSharedData): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = Math.round(message.role));
    message.playingBall !== undefined &&
      (obj.playingBall = message.playingBall);
    message.needAssistance !== undefined &&
      (obj.needAssistance = message.needAssistance);
    message.isAssisting !== undefined &&
      (obj.isAssisting = message.isAssisting);
    message.secondsSinceLastKick !== undefined &&
      (obj.secondsSinceLastKick = Math.round(message.secondsSinceLastKick));
    message.isKickedOff !== undefined &&
      (obj.isKickedOff = message.isKickedOff);
    message.walkingToX !== undefined && (obj.walkingToX = message.walkingToX);
    message.walkingToY !== undefined && (obj.walkingToY = message.walkingToY);
    message.walkingToH !== undefined && (obj.walkingToH = message.walkingToH);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BehaviourSharedData>, I>>(
    object: I
  ): BehaviourSharedData {
    const message = createBaseBehaviourSharedData();
    message.role = object.role ?? 0;
    message.playingBall = object.playingBall ?? false;
    message.needAssistance = object.needAssistance ?? false;
    message.isAssisting = object.isAssisting ?? false;
    message.secondsSinceLastKick = object.secondsSinceLastKick ?? 0;
    message.isKickedOff = object.isKickedOff ?? false;
    message.walkingToX = object.walkingToX ?? 0;
    message.walkingToY = object.walkingToY ?? 0;
    message.walkingToH = object.walkingToH ?? 0;
    return message;
  },
};

function createBaseVision(): Vision {
  return {
    timestamp: 0,
    balls: [],
    robots: [],
    fieldBoundaries: [],
    fieldFeatures: [],
    regions: [],
    topCameraSettings: undefined,
    botCameraSettings: undefined,
    topSaliency: new Uint8Array(),
    botSaliency: new Uint8Array(),
    topFrame: new Uint8Array(),
    botFrame: new Uint8Array(),
    horizontalFieldOfView: 0,
    verticalFieldOfView: 0,
    topFrameJPEG: new Uint8Array(),
    botFrameJPEG: new Uint8Array(),
    ATWindowSizeTop: 0,
    ATWindowSizeBot: 0,
    ATPercentageTop: 0,
    ATPercentageBot: 0,
  };
}

export const Vision = {
  encode(
    message: Vision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(16).int64(message.timestamp);
    }
    for (const v of message.balls) {
      Vision_BallInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.robots) {
      Vision_RobotVisionInfo.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.fieldBoundaries) {
      Vision_FieldBoundaryInfo.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.fieldFeatures) {
      Vision_FieldFeatureInfo.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.regions) {
      Vision_RegionI.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.topCameraSettings !== undefined) {
      Vision_CameraSettings.encode(
        message.topCameraSettings,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.botCameraSettings !== undefined) {
      Vision_CameraSettings.encode(
        message.botCameraSettings,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.topSaliency.length !== 0) {
      writer.uint32(162).bytes(message.topSaliency);
    }
    if (message.botSaliency.length !== 0) {
      writer.uint32(170).bytes(message.botSaliency);
    }
    if (message.topFrame.length !== 0) {
      writer.uint32(178).bytes(message.topFrame);
    }
    if (message.botFrame.length !== 0) {
      writer.uint32(186).bytes(message.botFrame);
    }
    if (message.horizontalFieldOfView !== 0) {
      writer.uint32(197).float(message.horizontalFieldOfView);
    }
    if (message.verticalFieldOfView !== 0) {
      writer.uint32(205).float(message.verticalFieldOfView);
    }
    if (message.topFrameJPEG.length !== 0) {
      writer.uint32(210).bytes(message.topFrameJPEG);
    }
    if (message.botFrameJPEG.length !== 0) {
      writer.uint32(218).bytes(message.botFrameJPEG);
    }
    if (message.ATWindowSizeTop !== 0) {
      writer.uint32(224).uint32(message.ATWindowSizeTop);
    }
    if (message.ATWindowSizeBot !== 0) {
      writer.uint32(232).uint32(message.ATWindowSizeBot);
    }
    if (message.ATPercentageTop !== 0) {
      writer.uint32(240).int32(message.ATPercentageTop);
    }
    if (message.ATPercentageBot !== 0) {
      writer.uint32(248).int32(message.ATPercentageBot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.balls.push(Vision_BallInfo.decode(reader, reader.uint32()));
          break;
        case 11:
          message.robots.push(
            Vision_RobotVisionInfo.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.fieldBoundaries.push(
            Vision_FieldBoundaryInfo.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.fieldFeatures.push(
            Vision_FieldFeatureInfo.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.regions.push(Vision_RegionI.decode(reader, reader.uint32()));
          break;
        case 17:
          message.topCameraSettings = Vision_CameraSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.botCameraSettings = Vision_CameraSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.topSaliency = reader.bytes();
          break;
        case 21:
          message.botSaliency = reader.bytes();
          break;
        case 22:
          message.topFrame = reader.bytes();
          break;
        case 23:
          message.botFrame = reader.bytes();
          break;
        case 24:
          message.horizontalFieldOfView = reader.float();
          break;
        case 25:
          message.verticalFieldOfView = reader.float();
          break;
        case 26:
          message.topFrameJPEG = reader.bytes();
          break;
        case 27:
          message.botFrameJPEG = reader.bytes();
          break;
        case 28:
          message.ATWindowSizeTop = reader.uint32();
          break;
        case 29:
          message.ATWindowSizeBot = reader.uint32();
          break;
        case 30:
          message.ATPercentageTop = reader.int32();
          break;
        case 31:
          message.ATPercentageBot = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      balls: Array.isArray(object?.balls)
        ? object.balls.map((e: any) => Vision_BallInfo.fromJSON(e))
        : [],
      robots: Array.isArray(object?.robots)
        ? object.robots.map((e: any) => Vision_RobotVisionInfo.fromJSON(e))
        : [],
      fieldBoundaries: Array.isArray(object?.fieldBoundaries)
        ? object.fieldBoundaries.map((e: any) =>
            Vision_FieldBoundaryInfo.fromJSON(e)
          )
        : [],
      fieldFeatures: Array.isArray(object?.fieldFeatures)
        ? object.fieldFeatures.map((e: any) =>
            Vision_FieldFeatureInfo.fromJSON(e)
          )
        : [],
      regions: Array.isArray(object?.regions)
        ? object.regions.map((e: any) => Vision_RegionI.fromJSON(e))
        : [],
      topCameraSettings: isSet(object.topCameraSettings)
        ? Vision_CameraSettings.fromJSON(object.topCameraSettings)
        : undefined,
      botCameraSettings: isSet(object.botCameraSettings)
        ? Vision_CameraSettings.fromJSON(object.botCameraSettings)
        : undefined,
      topSaliency: isSet(object.topSaliency)
        ? bytesFromBase64(object.topSaliency)
        : new Uint8Array(),
      botSaliency: isSet(object.botSaliency)
        ? bytesFromBase64(object.botSaliency)
        : new Uint8Array(),
      topFrame: isSet(object.topFrame)
        ? bytesFromBase64(object.topFrame)
        : new Uint8Array(),
      botFrame: isSet(object.botFrame)
        ? bytesFromBase64(object.botFrame)
        : new Uint8Array(),
      horizontalFieldOfView: isSet(object.horizontalFieldOfView)
        ? Number(object.horizontalFieldOfView)
        : 0,
      verticalFieldOfView: isSet(object.verticalFieldOfView)
        ? Number(object.verticalFieldOfView)
        : 0,
      topFrameJPEG: isSet(object.topFrameJPEG)
        ? bytesFromBase64(object.topFrameJPEG)
        : new Uint8Array(),
      botFrameJPEG: isSet(object.botFrameJPEG)
        ? bytesFromBase64(object.botFrameJPEG)
        : new Uint8Array(),
      ATWindowSizeTop: isSet(object.ATWindowSizeTop)
        ? Number(object.ATWindowSizeTop)
        : 0,
      ATWindowSizeBot: isSet(object.ATWindowSizeBot)
        ? Number(object.ATWindowSizeBot)
        : 0,
      ATPercentageTop: isSet(object.ATPercentageTop)
        ? Number(object.ATPercentageTop)
        : 0,
      ATPercentageBot: isSet(object.ATPercentageBot)
        ? Number(object.ATPercentageBot)
        : 0,
    };
  },

  toJSON(message: Vision): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    if (message.balls) {
      obj.balls = message.balls.map((e) =>
        e ? Vision_BallInfo.toJSON(e) : undefined
      );
    } else {
      obj.balls = [];
    }
    if (message.robots) {
      obj.robots = message.robots.map((e) =>
        e ? Vision_RobotVisionInfo.toJSON(e) : undefined
      );
    } else {
      obj.robots = [];
    }
    if (message.fieldBoundaries) {
      obj.fieldBoundaries = message.fieldBoundaries.map((e) =>
        e ? Vision_FieldBoundaryInfo.toJSON(e) : undefined
      );
    } else {
      obj.fieldBoundaries = [];
    }
    if (message.fieldFeatures) {
      obj.fieldFeatures = message.fieldFeatures.map((e) =>
        e ? Vision_FieldFeatureInfo.toJSON(e) : undefined
      );
    } else {
      obj.fieldFeatures = [];
    }
    if (message.regions) {
      obj.regions = message.regions.map((e) =>
        e ? Vision_RegionI.toJSON(e) : undefined
      );
    } else {
      obj.regions = [];
    }
    message.topCameraSettings !== undefined &&
      (obj.topCameraSettings = message.topCameraSettings
        ? Vision_CameraSettings.toJSON(message.topCameraSettings)
        : undefined);
    message.botCameraSettings !== undefined &&
      (obj.botCameraSettings = message.botCameraSettings
        ? Vision_CameraSettings.toJSON(message.botCameraSettings)
        : undefined);
    message.topSaliency !== undefined &&
      (obj.topSaliency = base64FromBytes(
        message.topSaliency !== undefined
          ? message.topSaliency
          : new Uint8Array()
      ));
    message.botSaliency !== undefined &&
      (obj.botSaliency = base64FromBytes(
        message.botSaliency !== undefined
          ? message.botSaliency
          : new Uint8Array()
      ));
    message.topFrame !== undefined &&
      (obj.topFrame = base64FromBytes(
        message.topFrame !== undefined ? message.topFrame : new Uint8Array()
      ));
    message.botFrame !== undefined &&
      (obj.botFrame = base64FromBytes(
        message.botFrame !== undefined ? message.botFrame : new Uint8Array()
      ));
    message.horizontalFieldOfView !== undefined &&
      (obj.horizontalFieldOfView = message.horizontalFieldOfView);
    message.verticalFieldOfView !== undefined &&
      (obj.verticalFieldOfView = message.verticalFieldOfView);
    message.topFrameJPEG !== undefined &&
      (obj.topFrameJPEG = base64FromBytes(
        message.topFrameJPEG !== undefined
          ? message.topFrameJPEG
          : new Uint8Array()
      ));
    message.botFrameJPEG !== undefined &&
      (obj.botFrameJPEG = base64FromBytes(
        message.botFrameJPEG !== undefined
          ? message.botFrameJPEG
          : new Uint8Array()
      ));
    message.ATWindowSizeTop !== undefined &&
      (obj.ATWindowSizeTop = Math.round(message.ATWindowSizeTop));
    message.ATWindowSizeBot !== undefined &&
      (obj.ATWindowSizeBot = Math.round(message.ATWindowSizeBot));
    message.ATPercentageTop !== undefined &&
      (obj.ATPercentageTop = Math.round(message.ATPercentageTop));
    message.ATPercentageBot !== undefined &&
      (obj.ATPercentageBot = Math.round(message.ATPercentageBot));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision>, I>>(object: I): Vision {
    const message = createBaseVision();
    message.timestamp = object.timestamp ?? 0;
    message.balls =
      object.balls?.map((e) => Vision_BallInfo.fromPartial(e)) || [];
    message.robots =
      object.robots?.map((e) => Vision_RobotVisionInfo.fromPartial(e)) || [];
    message.fieldBoundaries =
      object.fieldBoundaries?.map((e) =>
        Vision_FieldBoundaryInfo.fromPartial(e)
      ) || [];
    message.fieldFeatures =
      object.fieldFeatures?.map((e) =>
        Vision_FieldFeatureInfo.fromPartial(e)
      ) || [];
    message.regions =
      object.regions?.map((e) => Vision_RegionI.fromPartial(e)) || [];
    message.topCameraSettings =
      object.topCameraSettings !== undefined &&
      object.topCameraSettings !== null
        ? Vision_CameraSettings.fromPartial(object.topCameraSettings)
        : undefined;
    message.botCameraSettings =
      object.botCameraSettings !== undefined &&
      object.botCameraSettings !== null
        ? Vision_CameraSettings.fromPartial(object.botCameraSettings)
        : undefined;
    message.topSaliency = object.topSaliency ?? new Uint8Array();
    message.botSaliency = object.botSaliency ?? new Uint8Array();
    message.topFrame = object.topFrame ?? new Uint8Array();
    message.botFrame = object.botFrame ?? new Uint8Array();
    message.horizontalFieldOfView = object.horizontalFieldOfView ?? 0;
    message.verticalFieldOfView = object.verticalFieldOfView ?? 0;
    message.topFrameJPEG = object.topFrameJPEG ?? new Uint8Array();
    message.botFrameJPEG = object.botFrameJPEG ?? new Uint8Array();
    message.ATWindowSizeTop = object.ATWindowSizeTop ?? 0;
    message.ATWindowSizeBot = object.ATWindowSizeBot ?? 0;
    message.ATPercentageTop = object.ATPercentageTop ?? 0;
    message.ATPercentageBot = object.ATPercentageBot ?? 0;
    return message;
  },
};

function createBaseVision_BallInfo(): Vision_BallInfo {
  return {
    rr: undefined,
    radius: 0,
    imageCoords: undefined,
    neckRelative: undefined,
    topCamera: false,
  };
}

export const Vision_BallInfo = {
  encode(
    message: Vision_BallInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(16).int32(message.radius);
    }
    if (message.imageCoords !== undefined) {
      Point.encode(message.imageCoords, writer.uint32(26).fork()).ldelim();
    }
    if (message.neckRelative !== undefined) {
      XYZCoord.encode(message.neckRelative, writer.uint32(34).fork()).ldelim();
    }
    if (message.topCamera === true) {
      writer.uint32(40).bool(message.topCamera);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vision_BallInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_BallInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.int32();
          break;
        case 3:
          message.imageCoords = Point.decode(reader, reader.uint32());
          break;
        case 4:
          message.neckRelative = XYZCoord.decode(reader, reader.uint32());
          break;
        case 5:
          message.topCamera = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_BallInfo {
    return {
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      imageCoords: isSet(object.imageCoords)
        ? Point.fromJSON(object.imageCoords)
        : undefined,
      neckRelative: isSet(object.neckRelative)
        ? XYZCoord.fromJSON(object.neckRelative)
        : undefined,
      topCamera: isSet(object.topCamera) ? Boolean(object.topCamera) : false,
    };
  },

  toJSON(message: Vision_BallInfo): unknown {
    const obj: any = {};
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    message.radius !== undefined && (obj.radius = Math.round(message.radius));
    message.imageCoords !== undefined &&
      (obj.imageCoords = message.imageCoords
        ? Point.toJSON(message.imageCoords)
        : undefined);
    message.neckRelative !== undefined &&
      (obj.neckRelative = message.neckRelative
        ? XYZCoord.toJSON(message.neckRelative)
        : undefined);
    message.topCamera !== undefined && (obj.topCamera = message.topCamera);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_BallInfo>, I>>(
    object: I
  ): Vision_BallInfo {
    const message = createBaseVision_BallInfo();
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    message.radius = object.radius ?? 0;
    message.imageCoords =
      object.imageCoords !== undefined && object.imageCoords !== null
        ? Point.fromPartial(object.imageCoords)
        : undefined;
    message.neckRelative =
      object.neckRelative !== undefined && object.neckRelative !== null
        ? XYZCoord.fromPartial(object.neckRelative)
        : undefined;
    message.topCamera = object.topCamera ?? false;
    return message;
  },
};

function createBaseVision_PostInfo(): Vision_PostInfo {
  return {
    rr: undefined,
    type: 0,
    imageCoords: undefined,
    wDistance: 0,
    kDistance: 0,
    trustDistance: false,
    dir: 0,
  };
}

export const Vision_PostInfo = {
  encode(
    message: Vision_PostInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.imageCoords !== undefined) {
      BBox.encode(message.imageCoords, writer.uint32(26).fork()).ldelim();
    }
    if (message.wDistance !== 0) {
      writer.uint32(37).float(message.wDistance);
    }
    if (message.kDistance !== 0) {
      writer.uint32(45).float(message.kDistance);
    }
    if (message.trustDistance === true) {
      writer.uint32(48).bool(message.trustDistance);
    }
    if (message.dir !== 0) {
      writer.uint32(56).int32(message.dir);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vision_PostInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_PostInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.imageCoords = BBox.decode(reader, reader.uint32());
          break;
        case 4:
          message.wDistance = reader.float();
          break;
        case 5:
          message.kDistance = reader.float();
          break;
        case 6:
          message.trustDistance = reader.bool();
          break;
        case 7:
          message.dir = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_PostInfo {
    return {
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
      type: isSet(object.type) ? vision_PostInfoTypeFromJSON(object.type) : 0,
      imageCoords: isSet(object.imageCoords)
        ? BBox.fromJSON(object.imageCoords)
        : undefined,
      wDistance: isSet(object.wDistance) ? Number(object.wDistance) : 0,
      kDistance: isSet(object.kDistance) ? Number(object.kDistance) : 0,
      trustDistance: isSet(object.trustDistance)
        ? Boolean(object.trustDistance)
        : false,
      dir: isSet(object.dir) ? vision_PostInfoDirectionFromJSON(object.dir) : 0,
    };
  },

  toJSON(message: Vision_PostInfo): unknown {
    const obj: any = {};
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    message.type !== undefined &&
      (obj.type = vision_PostInfoTypeToJSON(message.type));
    message.imageCoords !== undefined &&
      (obj.imageCoords = message.imageCoords
        ? BBox.toJSON(message.imageCoords)
        : undefined);
    message.wDistance !== undefined && (obj.wDistance = message.wDistance);
    message.kDistance !== undefined && (obj.kDistance = message.kDistance);
    message.trustDistance !== undefined &&
      (obj.trustDistance = message.trustDistance);
    message.dir !== undefined &&
      (obj.dir = vision_PostInfoDirectionToJSON(message.dir));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_PostInfo>, I>>(
    object: I
  ): Vision_PostInfo {
    const message = createBaseVision_PostInfo();
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    message.type = object.type ?? 0;
    message.imageCoords =
      object.imageCoords !== undefined && object.imageCoords !== null
        ? BBox.fromPartial(object.imageCoords)
        : undefined;
    message.wDistance = object.wDistance ?? 0;
    message.kDistance = object.kDistance ?? 0;
    message.trustDistance = object.trustDistance ?? false;
    message.dir = object.dir ?? 0;
    return message;
  },
};

function createBaseVision_RobotVisionInfo(): Vision_RobotVisionInfo {
  return {
    rr: undefined,
    type: 0,
    cameras: 0,
    imageCoords: undefined,
    topImageCoords: undefined,
    botImageCoords: undefined,
  };
}

export const Vision_RobotVisionInfo = {
  encode(
    message: Vision_RobotVisionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.cameras !== 0) {
      writer.uint32(24).int32(message.cameras);
    }
    if (message.imageCoords !== undefined) {
      BBox.encode(message.imageCoords, writer.uint32(34).fork()).ldelim();
    }
    if (message.topImageCoords !== undefined) {
      BBox.encode(message.topImageCoords, writer.uint32(42).fork()).ldelim();
    }
    if (message.botImageCoords !== undefined) {
      BBox.encode(message.botImageCoords, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_RobotVisionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_RobotVisionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.cameras = reader.int32() as any;
          break;
        case 4:
          message.imageCoords = BBox.decode(reader, reader.uint32());
          break;
        case 5:
          message.topImageCoords = BBox.decode(reader, reader.uint32());
          break;
        case 6:
          message.botImageCoords = BBox.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_RobotVisionInfo {
    return {
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
      type: isSet(object.type) ? robotVisionInfoTypeFromJSON(object.type) : 0,
      cameras: isSet(object.cameras)
        ? vision_CamerasFromJSON(object.cameras)
        : 0,
      imageCoords: isSet(object.imageCoords)
        ? BBox.fromJSON(object.imageCoords)
        : undefined,
      topImageCoords: isSet(object.topImageCoords)
        ? BBox.fromJSON(object.topImageCoords)
        : undefined,
      botImageCoords: isSet(object.botImageCoords)
        ? BBox.fromJSON(object.botImageCoords)
        : undefined,
    };
  },

  toJSON(message: Vision_RobotVisionInfo): unknown {
    const obj: any = {};
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    message.type !== undefined &&
      (obj.type = robotVisionInfoTypeToJSON(message.type));
    message.cameras !== undefined &&
      (obj.cameras = vision_CamerasToJSON(message.cameras));
    message.imageCoords !== undefined &&
      (obj.imageCoords = message.imageCoords
        ? BBox.toJSON(message.imageCoords)
        : undefined);
    message.topImageCoords !== undefined &&
      (obj.topImageCoords = message.topImageCoords
        ? BBox.toJSON(message.topImageCoords)
        : undefined);
    message.botImageCoords !== undefined &&
      (obj.botImageCoords = message.botImageCoords
        ? BBox.toJSON(message.botImageCoords)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_RobotVisionInfo>, I>>(
    object: I
  ): Vision_RobotVisionInfo {
    const message = createBaseVision_RobotVisionInfo();
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    message.type = object.type ?? 0;
    message.cameras = object.cameras ?? 0;
    message.imageCoords =
      object.imageCoords !== undefined && object.imageCoords !== null
        ? BBox.fromPartial(object.imageCoords)
        : undefined;
    message.topImageCoords =
      object.topImageCoords !== undefined && object.topImageCoords !== null
        ? BBox.fromPartial(object.topImageCoords)
        : undefined;
    message.botImageCoords =
      object.botImageCoords !== undefined && object.botImageCoords !== null
        ? BBox.fromPartial(object.botImageCoords)
        : undefined;
    return message;
  },
};

function createBaseVision_RANSACLine(): Vision_RANSACLine {
  return { t1: 0, t2: 0, t3: 0, var: 0, p1: undefined, p2: undefined };
}

export const Vision_RANSACLine = {
  encode(
    message: Vision_RANSACLine,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.t1 !== 0) {
      writer.uint32(8).sint64(message.t1);
    }
    if (message.t2 !== 0) {
      writer.uint32(16).sint64(message.t2);
    }
    if (message.t3 !== 0) {
      writer.uint32(24).sint64(message.t3);
    }
    if (message.var !== 0) {
      writer.uint32(37).float(message.var);
    }
    if (message.p1 !== undefined) {
      Point.encode(message.p1, writer.uint32(42).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      Point.encode(message.p2, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vision_RANSACLine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_RANSACLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.t1 = longToNumber(reader.sint64() as Long);
          break;
        case 2:
          message.t2 = longToNumber(reader.sint64() as Long);
          break;
        case 3:
          message.t3 = longToNumber(reader.sint64() as Long);
          break;
        case 4:
          message.var = reader.float();
          break;
        case 5:
          message.p1 = Point.decode(reader, reader.uint32());
          break;
        case 6:
          message.p2 = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_RANSACLine {
    return {
      t1: isSet(object.t1) ? Number(object.t1) : 0,
      t2: isSet(object.t2) ? Number(object.t2) : 0,
      t3: isSet(object.t3) ? Number(object.t3) : 0,
      var: isSet(object.var) ? Number(object.var) : 0,
      p1: isSet(object.p1) ? Point.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? Point.fromJSON(object.p2) : undefined,
    };
  },

  toJSON(message: Vision_RANSACLine): unknown {
    const obj: any = {};
    message.t1 !== undefined && (obj.t1 = Math.round(message.t1));
    message.t2 !== undefined && (obj.t2 = Math.round(message.t2));
    message.t3 !== undefined && (obj.t3 = Math.round(message.t3));
    message.var !== undefined && (obj.var = message.var);
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? Point.toJSON(message.p1) : undefined);
    message.p2 !== undefined &&
      (obj.p2 = message.p2 ? Point.toJSON(message.p2) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_RANSACLine>, I>>(
    object: I
  ): Vision_RANSACLine {
    const message = createBaseVision_RANSACLine();
    message.t1 = object.t1 ?? 0;
    message.t2 = object.t2 ?? 0;
    message.t3 = object.t3 ?? 0;
    message.var = object.var ?? 0;
    message.p1 =
      object.p1 !== undefined && object.p1 !== null
        ? Point.fromPartial(object.p1)
        : undefined;
    message.p2 =
      object.p2 !== undefined && object.p2 !== null
        ? Point.fromPartial(object.p2)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldBoundaryInfo(): Vision_FieldBoundaryInfo {
  return { rrBoundary: undefined, imageBoundary: undefined };
}

export const Vision_FieldBoundaryInfo = {
  encode(
    message: Vision_FieldBoundaryInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rrBoundary !== undefined) {
      Vision_RANSACLine.encode(
        message.rrBoundary,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.imageBoundary !== undefined) {
      Vision_RANSACLine.encode(
        message.imageBoundary,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldBoundaryInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldBoundaryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rrBoundary = Vision_RANSACLine.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.imageBoundary = Vision_RANSACLine.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldBoundaryInfo {
    return {
      rrBoundary: isSet(object.rrBoundary)
        ? Vision_RANSACLine.fromJSON(object.rrBoundary)
        : undefined,
      imageBoundary: isSet(object.imageBoundary)
        ? Vision_RANSACLine.fromJSON(object.imageBoundary)
        : undefined,
    };
  },

  toJSON(message: Vision_FieldBoundaryInfo): unknown {
    const obj: any = {};
    message.rrBoundary !== undefined &&
      (obj.rrBoundary = message.rrBoundary
        ? Vision_RANSACLine.toJSON(message.rrBoundary)
        : undefined);
    message.imageBoundary !== undefined &&
      (obj.imageBoundary = message.imageBoundary
        ? Vision_RANSACLine.toJSON(message.imageBoundary)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_FieldBoundaryInfo>, I>>(
    object: I
  ): Vision_FieldBoundaryInfo {
    const message = createBaseVision_FieldBoundaryInfo();
    message.rrBoundary =
      object.rrBoundary !== undefined && object.rrBoundary !== null
        ? Vision_RANSACLine.fromPartial(object.rrBoundary)
        : undefined;
    message.imageBoundary =
      object.imageBoundary !== undefined && object.imageBoundary !== null
        ? Vision_RANSACLine.fromPartial(object.imageBoundary)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo(): Vision_FieldFeatureInfo {
  return { rr: undefined, type: 0, p1: undefined, p2: undefined };
}

export const Vision_FieldFeatureInfo = {
  encode(
    message: Vision_FieldFeatureInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.p1 !== undefined) {
      Point.encode(message.p1, writer.uint32(106).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      Point.encode(message.p2, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 13:
          message.p1 = Point.decode(reader, reader.uint32());
          break;
        case 14:
          message.p2 = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo {
    return {
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
      type: isSet(object.type)
        ? vision_FieldFeatureInfoTypeFromJSON(object.type)
        : 0,
      p1: isSet(object.p1) ? Point.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? Point.fromJSON(object.p2) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo): unknown {
    const obj: any = {};
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    message.type !== undefined &&
      (obj.type = vision_FieldFeatureInfoTypeToJSON(message.type));
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? Point.toJSON(message.p1) : undefined);
    message.p2 !== undefined &&
      (obj.p2 = message.p2 ? Point.toJSON(message.p2) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_FieldFeatureInfo>, I>>(
    object: I
  ): Vision_FieldFeatureInfo {
    const message = createBaseVision_FieldFeatureInfo();
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    message.type = object.type ?? 0;
    message.p1 =
      object.p1 !== undefined && object.p1 !== null
        ? Point.fromPartial(object.p1)
        : undefined;
    message.p2 =
      object.p2 !== undefined && object.p2 !== null
        ? Point.fromPartial(object.p2)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_FieldLinePointInfo(): Vision_FieldFeatureInfo_FieldLinePointInfo {
  return { p: undefined, rrp: undefined };
}

export const Vision_FieldFeatureInfo_FieldLinePointInfo = {
  encode(
    message: Vision_FieldFeatureInfo_FieldLinePointInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    if (message.rrp !== undefined) {
      Point.encode(message.rrp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_FieldLinePointInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_FieldLinePointInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.rrp = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_FieldLinePointInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
      rrp: isSet(object.rrp) ? Point.fromJSON(object.rrp) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_FieldLinePointInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    message.rrp !== undefined &&
      (obj.rrp = message.rrp ? Point.toJSON(message.rrp) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_FieldLinePointInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_FieldLinePointInfo {
    const message = createBaseVision_FieldFeatureInfo_FieldLinePointInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    message.rrp =
      object.rrp !== undefined && object.rrp !== null
        ? Point.fromPartial(object.rrp)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_LineInfo(): Vision_FieldFeatureInfo_LineInfo {
  return { p1: undefined, p2: undefined, t1: 0, t2: 0, t3: 0, rr: undefined };
}

export const Vision_FieldFeatureInfo_LineInfo = {
  encode(
    message: Vision_FieldFeatureInfo_LineInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p1 !== undefined) {
      Point.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      Point.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.t1 !== 0) {
      writer.uint32(24).sint32(message.t1);
    }
    if (message.t2 !== 0) {
      writer.uint32(32).sint32(message.t2);
    }
    if (message.t3 !== 0) {
      writer.uint32(40).sint32(message.t3);
    }
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_LineInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_LineInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.t1 = reader.sint32();
          break;
        case 4:
          message.t2 = reader.sint32();
          break;
        case 5:
          message.t3 = reader.sint32();
          break;
        case 6:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_LineInfo {
    return {
      p1: isSet(object.p1) ? Point.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? Point.fromJSON(object.p2) : undefined,
      t1: isSet(object.t1) ? Number(object.t1) : 0,
      t2: isSet(object.t2) ? Number(object.t2) : 0,
      t3: isSet(object.t3) ? Number(object.t3) : 0,
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_LineInfo): unknown {
    const obj: any = {};
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? Point.toJSON(message.p1) : undefined);
    message.p2 !== undefined &&
      (obj.p2 = message.p2 ? Point.toJSON(message.p2) : undefined);
    message.t1 !== undefined && (obj.t1 = Math.round(message.t1));
    message.t2 !== undefined && (obj.t2 = Math.round(message.t2));
    message.t3 !== undefined && (obj.t3 = Math.round(message.t3));
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_LineInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_LineInfo {
    const message = createBaseVision_FieldFeatureInfo_LineInfo();
    message.p1 =
      object.p1 !== undefined && object.p1 !== null
        ? Point.fromPartial(object.p1)
        : undefined;
    message.p2 =
      object.p2 !== undefined && object.p2 !== null
        ? Point.fromPartial(object.p2)
        : undefined;
    message.t1 = object.t1 ?? 0;
    message.t2 = object.t2 ?? 0;
    message.t3 = object.t3 ?? 0;
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_CornerInfo(): Vision_FieldFeatureInfo_CornerInfo {
  return { p: undefined, e1: undefined, e2: undefined };
}

export const Vision_FieldFeatureInfo_CornerInfo = {
  encode(
    message: Vision_FieldFeatureInfo_CornerInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    if (message.e1 !== undefined) {
      Point.encode(message.e1, writer.uint32(18).fork()).ldelim();
    }
    if (message.e2 !== undefined) {
      Point.encode(message.e2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_CornerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_CornerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.e1 = Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.e2 = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_CornerInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
      e1: isSet(object.e1) ? Point.fromJSON(object.e1) : undefined,
      e2: isSet(object.e2) ? Point.fromJSON(object.e2) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_CornerInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    message.e1 !== undefined &&
      (obj.e1 = message.e1 ? Point.toJSON(message.e1) : undefined);
    message.e2 !== undefined &&
      (obj.e2 = message.e2 ? Point.toJSON(message.e2) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_CornerInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_CornerInfo {
    const message = createBaseVision_FieldFeatureInfo_CornerInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    message.e1 =
      object.e1 !== undefined && object.e1 !== null
        ? Point.fromPartial(object.e1)
        : undefined;
    message.e2 =
      object.e2 !== undefined && object.e2 !== null
        ? Point.fromPartial(object.e2)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_TJunctionInfo(): Vision_FieldFeatureInfo_TJunctionInfo {
  return { p: undefined };
}

export const Vision_FieldFeatureInfo_TJunctionInfo = {
  encode(
    message: Vision_FieldFeatureInfo_TJunctionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_TJunctionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_TJunctionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_TJunctionInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_TJunctionInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_TJunctionInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_TJunctionInfo {
    const message = createBaseVision_FieldFeatureInfo_TJunctionInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_GoalBoxCornerInfo(): Vision_FieldFeatureInfo_GoalBoxCornerInfo {
  return { p: undefined, leftCorner: false };
}

export const Vision_FieldFeatureInfo_GoalBoxCornerInfo = {
  encode(
    message: Vision_FieldFeatureInfo_GoalBoxCornerInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    if (message.leftCorner === true) {
      writer.uint32(16).bool(message.leftCorner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_GoalBoxCornerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_GoalBoxCornerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.leftCorner = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_GoalBoxCornerInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
      leftCorner: isSet(object.leftCorner) ? Boolean(object.leftCorner) : false,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_GoalBoxCornerInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    message.leftCorner !== undefined && (obj.leftCorner = message.leftCorner);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_GoalBoxCornerInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_GoalBoxCornerInfo {
    const message = createBaseVision_FieldFeatureInfo_GoalBoxCornerInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    message.leftCorner = object.leftCorner ?? false;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_PenaltySpotInfo(): Vision_FieldFeatureInfo_PenaltySpotInfo {
  return { p: undefined, w: 0, h: 0 };
}

export const Vision_FieldFeatureInfo_PenaltySpotInfo = {
  encode(
    message: Vision_FieldFeatureInfo_PenaltySpotInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    if (message.w !== 0) {
      writer.uint32(16).sint32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(24).sint32(message.h);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_PenaltySpotInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_PenaltySpotInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.w = reader.sint32();
          break;
        case 3:
          message.h = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_PenaltySpotInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
      w: isSet(object.w) ? Number(object.w) : 0,
      h: isSet(object.h) ? Number(object.h) : 0,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_PenaltySpotInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    message.w !== undefined && (obj.w = Math.round(message.w));
    message.h !== undefined && (obj.h = Math.round(message.h));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_PenaltySpotInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_PenaltySpotInfo {
    const message = createBaseVision_FieldFeatureInfo_PenaltySpotInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    message.w = object.w ?? 0;
    message.h = object.h ?? 0;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_XJunctionInfo(): Vision_FieldFeatureInfo_XJunctionInfo {
  return { p: undefined };
}

export const Vision_FieldFeatureInfo_XJunctionInfo = {
  encode(
    message: Vision_FieldFeatureInfo_XJunctionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_XJunctionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_XJunctionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_XJunctionInfo {
    return {
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_XJunctionInfo): unknown {
    const obj: any = {};
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_XJunctionInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_XJunctionInfo {
    const message = createBaseVision_FieldFeatureInfo_XJunctionInfo();
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_CentreCircleInfo(): Vision_FieldFeatureInfo_CentreCircleInfo {
  return {};
}

export const Vision_FieldFeatureInfo_CentreCircleInfo = {
  encode(
    _: Vision_FieldFeatureInfo_CentreCircleInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_CentreCircleInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_CentreCircleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Vision_FieldFeatureInfo_CentreCircleInfo {
    return {};
  },

  toJSON(_: Vision_FieldFeatureInfo_CentreCircleInfo): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_CentreCircleInfo>, I>
  >(_: I): Vision_FieldFeatureInfo_CentreCircleInfo {
    const message = createBaseVision_FieldFeatureInfo_CentreCircleInfo();
    return message;
  },
};

function createBaseVision_FieldFeatureInfo_ParallelLinesInfo(): Vision_FieldFeatureInfo_ParallelLinesInfo {
  return { l1: undefined, l2: undefined };
}

export const Vision_FieldFeatureInfo_ParallelLinesInfo = {
  encode(
    message: Vision_FieldFeatureInfo_ParallelLinesInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.l1 !== undefined) {
      Vision_FieldFeatureInfo_LineInfo.encode(
        message.l1,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.l2 !== undefined) {
      Vision_FieldFeatureInfo_LineInfo.encode(
        message.l2,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_FieldFeatureInfo_ParallelLinesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_FieldFeatureInfo_ParallelLinesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.l1 = Vision_FieldFeatureInfo_LineInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.l2 = Vision_FieldFeatureInfo_LineInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_FieldFeatureInfo_ParallelLinesInfo {
    return {
      l1: isSet(object.l1)
        ? Vision_FieldFeatureInfo_LineInfo.fromJSON(object.l1)
        : undefined,
      l2: isSet(object.l2)
        ? Vision_FieldFeatureInfo_LineInfo.fromJSON(object.l2)
        : undefined,
    };
  },

  toJSON(message: Vision_FieldFeatureInfo_ParallelLinesInfo): unknown {
    const obj: any = {};
    message.l1 !== undefined &&
      (obj.l1 = message.l1
        ? Vision_FieldFeatureInfo_LineInfo.toJSON(message.l1)
        : undefined);
    message.l2 !== undefined &&
      (obj.l2 = message.l2
        ? Vision_FieldFeatureInfo_LineInfo.toJSON(message.l2)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<Vision_FieldFeatureInfo_ParallelLinesInfo>, I>
  >(object: I): Vision_FieldFeatureInfo_ParallelLinesInfo {
    const message = createBaseVision_FieldFeatureInfo_ParallelLinesInfo();
    message.l1 =
      object.l1 !== undefined && object.l1 !== null
        ? Vision_FieldFeatureInfo_LineInfo.fromPartial(object.l1)
        : undefined;
    message.l2 =
      object.l2 !== undefined && object.l2 !== null
        ? Vision_FieldFeatureInfo_LineInfo.fromPartial(object.l2)
        : undefined;
    return message;
  },
};

function createBaseVision_RegionI(): Vision_RegionI {
  return {
    isTopCamera: false,
    boundingBoxRel: undefined,
    boundingBoxFovea: undefined,
    boundingBoxRaw: undefined,
    nRawColsInRegion: 0,
    nRawRowsInRegion: 0,
    densityToRaw: 0,
    yOffsetRaw: 0,
    xOffsetRaw: 0,
    rawTotalWidth: 0,
    rawToFoveaDensity: 0,
    foveaWidth: 0,
  };
}

export const Vision_RegionI = {
  encode(
    message: Vision_RegionI,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isTopCamera === true) {
      writer.uint32(8).bool(message.isTopCamera);
    }
    if (message.boundingBoxRel !== undefined) {
      BBox.encode(message.boundingBoxRel, writer.uint32(18).fork()).ldelim();
    }
    if (message.boundingBoxFovea !== undefined) {
      BBox.encode(message.boundingBoxFovea, writer.uint32(26).fork()).ldelim();
    }
    if (message.boundingBoxRaw !== undefined) {
      BBox.encode(message.boundingBoxRaw, writer.uint32(34).fork()).ldelim();
    }
    if (message.nRawColsInRegion !== 0) {
      writer.uint32(40).int32(message.nRawColsInRegion);
    }
    if (message.nRawRowsInRegion !== 0) {
      writer.uint32(48).int32(message.nRawRowsInRegion);
    }
    if (message.densityToRaw !== 0) {
      writer.uint32(56).int32(message.densityToRaw);
    }
    if (message.yOffsetRaw !== 0) {
      writer.uint32(64).int32(message.yOffsetRaw);
    }
    if (message.xOffsetRaw !== 0) {
      writer.uint32(72).int32(message.xOffsetRaw);
    }
    if (message.rawTotalWidth !== 0) {
      writer.uint32(80).int32(message.rawTotalWidth);
    }
    if (message.rawToFoveaDensity !== 0) {
      writer.uint32(88).int32(message.rawToFoveaDensity);
    }
    if (message.foveaWidth !== 0) {
      writer.uint32(96).int32(message.foveaWidth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vision_RegionI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_RegionI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isTopCamera = reader.bool();
          break;
        case 2:
          message.boundingBoxRel = BBox.decode(reader, reader.uint32());
          break;
        case 3:
          message.boundingBoxFovea = BBox.decode(reader, reader.uint32());
          break;
        case 4:
          message.boundingBoxRaw = BBox.decode(reader, reader.uint32());
          break;
        case 5:
          message.nRawColsInRegion = reader.int32();
          break;
        case 6:
          message.nRawRowsInRegion = reader.int32();
          break;
        case 7:
          message.densityToRaw = reader.int32();
          break;
        case 8:
          message.yOffsetRaw = reader.int32();
          break;
        case 9:
          message.xOffsetRaw = reader.int32();
          break;
        case 10:
          message.rawTotalWidth = reader.int32();
          break;
        case 11:
          message.rawToFoveaDensity = reader.int32();
          break;
        case 12:
          message.foveaWidth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_RegionI {
    return {
      isTopCamera: isSet(object.isTopCamera)
        ? Boolean(object.isTopCamera)
        : false,
      boundingBoxRel: isSet(object.boundingBoxRel)
        ? BBox.fromJSON(object.boundingBoxRel)
        : undefined,
      boundingBoxFovea: isSet(object.boundingBoxFovea)
        ? BBox.fromJSON(object.boundingBoxFovea)
        : undefined,
      boundingBoxRaw: isSet(object.boundingBoxRaw)
        ? BBox.fromJSON(object.boundingBoxRaw)
        : undefined,
      nRawColsInRegion: isSet(object.nRawColsInRegion)
        ? Number(object.nRawColsInRegion)
        : 0,
      nRawRowsInRegion: isSet(object.nRawRowsInRegion)
        ? Number(object.nRawRowsInRegion)
        : 0,
      densityToRaw: isSet(object.densityToRaw)
        ? Number(object.densityToRaw)
        : 0,
      yOffsetRaw: isSet(object.yOffsetRaw) ? Number(object.yOffsetRaw) : 0,
      xOffsetRaw: isSet(object.xOffsetRaw) ? Number(object.xOffsetRaw) : 0,
      rawTotalWidth: isSet(object.rawTotalWidth)
        ? Number(object.rawTotalWidth)
        : 0,
      rawToFoveaDensity: isSet(object.rawToFoveaDensity)
        ? Number(object.rawToFoveaDensity)
        : 0,
      foveaWidth: isSet(object.foveaWidth) ? Number(object.foveaWidth) : 0,
    };
  },

  toJSON(message: Vision_RegionI): unknown {
    const obj: any = {};
    message.isTopCamera !== undefined &&
      (obj.isTopCamera = message.isTopCamera);
    message.boundingBoxRel !== undefined &&
      (obj.boundingBoxRel = message.boundingBoxRel
        ? BBox.toJSON(message.boundingBoxRel)
        : undefined);
    message.boundingBoxFovea !== undefined &&
      (obj.boundingBoxFovea = message.boundingBoxFovea
        ? BBox.toJSON(message.boundingBoxFovea)
        : undefined);
    message.boundingBoxRaw !== undefined &&
      (obj.boundingBoxRaw = message.boundingBoxRaw
        ? BBox.toJSON(message.boundingBoxRaw)
        : undefined);
    message.nRawColsInRegion !== undefined &&
      (obj.nRawColsInRegion = Math.round(message.nRawColsInRegion));
    message.nRawRowsInRegion !== undefined &&
      (obj.nRawRowsInRegion = Math.round(message.nRawRowsInRegion));
    message.densityToRaw !== undefined &&
      (obj.densityToRaw = Math.round(message.densityToRaw));
    message.yOffsetRaw !== undefined &&
      (obj.yOffsetRaw = Math.round(message.yOffsetRaw));
    message.xOffsetRaw !== undefined &&
      (obj.xOffsetRaw = Math.round(message.xOffsetRaw));
    message.rawTotalWidth !== undefined &&
      (obj.rawTotalWidth = Math.round(message.rawTotalWidth));
    message.rawToFoveaDensity !== undefined &&
      (obj.rawToFoveaDensity = Math.round(message.rawToFoveaDensity));
    message.foveaWidth !== undefined &&
      (obj.foveaWidth = Math.round(message.foveaWidth));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_RegionI>, I>>(
    object: I
  ): Vision_RegionI {
    const message = createBaseVision_RegionI();
    message.isTopCamera = object.isTopCamera ?? false;
    message.boundingBoxRel =
      object.boundingBoxRel !== undefined && object.boundingBoxRel !== null
        ? BBox.fromPartial(object.boundingBoxRel)
        : undefined;
    message.boundingBoxFovea =
      object.boundingBoxFovea !== undefined && object.boundingBoxFovea !== null
        ? BBox.fromPartial(object.boundingBoxFovea)
        : undefined;
    message.boundingBoxRaw =
      object.boundingBoxRaw !== undefined && object.boundingBoxRaw !== null
        ? BBox.fromPartial(object.boundingBoxRaw)
        : undefined;
    message.nRawColsInRegion = object.nRawColsInRegion ?? 0;
    message.nRawRowsInRegion = object.nRawRowsInRegion ?? 0;
    message.densityToRaw = object.densityToRaw ?? 0;
    message.yOffsetRaw = object.yOffsetRaw ?? 0;
    message.xOffsetRaw = object.xOffsetRaw ?? 0;
    message.rawTotalWidth = object.rawTotalWidth ?? 0;
    message.rawToFoveaDensity = object.rawToFoveaDensity ?? 0;
    message.foveaWidth = object.foveaWidth ?? 0;
    return message;
  },
};

function createBaseVision_CameraSettings(): Vision_CameraSettings {
  return {
    hflip: 0,
    vflip: 0,
    brightness: 0,
    contrast: 0,
    saturation: 0,
    hue: 0,
    sharpness: 0,
    backlightCompensation: 0,
    exposure: 0,
    gain: 0,
    whiteBalance: 0,
    exposureAuto: 0,
    autoWhiteBalance: 0,
    autoFocus: 0,
    exposureAlgorithm: 0,
    aeTargetAvgLuma: 0,
    aeTargetAvgLumaDark: 0,
    aeTargetGain: 0,
    aeMinVirtGain: 0,
    aeMaxVirtGain: 0,
    aeMinVirtAGain: 0,
    aeMaxVirtAGain: 0,
    aeTargetExposure: 0,
    aeUseWeightTable: false,
  };
}

export const Vision_CameraSettings = {
  encode(
    message: Vision_CameraSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hflip !== 0) {
      writer.uint32(8).uint32(message.hflip);
    }
    if (message.vflip !== 0) {
      writer.uint32(16).uint32(message.vflip);
    }
    if (message.brightness !== 0) {
      writer.uint32(24).uint32(message.brightness);
    }
    if (message.contrast !== 0) {
      writer.uint32(32).uint32(message.contrast);
    }
    if (message.saturation !== 0) {
      writer.uint32(40).uint32(message.saturation);
    }
    if (message.hue !== 0) {
      writer.uint32(48).uint32(message.hue);
    }
    if (message.sharpness !== 0) {
      writer.uint32(56).uint32(message.sharpness);
    }
    if (message.backlightCompensation !== 0) {
      writer.uint32(64).uint32(message.backlightCompensation);
    }
    if (message.exposure !== 0) {
      writer.uint32(72).uint32(message.exposure);
    }
    if (message.gain !== 0) {
      writer.uint32(80).uint32(message.gain);
    }
    if (message.whiteBalance !== 0) {
      writer.uint32(88).uint32(message.whiteBalance);
    }
    if (message.exposureAuto !== 0) {
      writer.uint32(96).uint32(message.exposureAuto);
    }
    if (message.autoWhiteBalance !== 0) {
      writer.uint32(104).uint32(message.autoWhiteBalance);
    }
    if (message.autoFocus !== 0) {
      writer.uint32(112).uint32(message.autoFocus);
    }
    if (message.exposureAlgorithm !== 0) {
      writer.uint32(120).uint32(message.exposureAlgorithm);
    }
    if (message.aeTargetAvgLuma !== 0) {
      writer.uint32(128).uint32(message.aeTargetAvgLuma);
    }
    if (message.aeTargetAvgLumaDark !== 0) {
      writer.uint32(136).uint32(message.aeTargetAvgLumaDark);
    }
    if (message.aeTargetGain !== 0) {
      writer.uint32(144).uint32(message.aeTargetGain);
    }
    if (message.aeMinVirtGain !== 0) {
      writer.uint32(152).uint32(message.aeMinVirtGain);
    }
    if (message.aeMaxVirtGain !== 0) {
      writer.uint32(160).uint32(message.aeMaxVirtGain);
    }
    if (message.aeMinVirtAGain !== 0) {
      writer.uint32(168).uint32(message.aeMinVirtAGain);
    }
    if (message.aeMaxVirtAGain !== 0) {
      writer.uint32(176).uint32(message.aeMaxVirtAGain);
    }
    if (message.aeTargetExposure !== 0) {
      writer.uint32(184).uint32(message.aeTargetExposure);
    }
    if (message.aeUseWeightTable === true) {
      writer.uint32(192).bool(message.aeUseWeightTable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Vision_CameraSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVision_CameraSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hflip = reader.uint32();
          break;
        case 2:
          message.vflip = reader.uint32();
          break;
        case 3:
          message.brightness = reader.uint32();
          break;
        case 4:
          message.contrast = reader.uint32();
          break;
        case 5:
          message.saturation = reader.uint32();
          break;
        case 6:
          message.hue = reader.uint32();
          break;
        case 7:
          message.sharpness = reader.uint32();
          break;
        case 8:
          message.backlightCompensation = reader.uint32();
          break;
        case 9:
          message.exposure = reader.uint32();
          break;
        case 10:
          message.gain = reader.uint32();
          break;
        case 11:
          message.whiteBalance = reader.uint32();
          break;
        case 12:
          message.exposureAuto = reader.uint32();
          break;
        case 13:
          message.autoWhiteBalance = reader.uint32();
          break;
        case 14:
          message.autoFocus = reader.uint32();
          break;
        case 15:
          message.exposureAlgorithm = reader.uint32();
          break;
        case 16:
          message.aeTargetAvgLuma = reader.uint32();
          break;
        case 17:
          message.aeTargetAvgLumaDark = reader.uint32();
          break;
        case 18:
          message.aeTargetGain = reader.uint32();
          break;
        case 19:
          message.aeMinVirtGain = reader.uint32();
          break;
        case 20:
          message.aeMaxVirtGain = reader.uint32();
          break;
        case 21:
          message.aeMinVirtAGain = reader.uint32();
          break;
        case 22:
          message.aeMaxVirtAGain = reader.uint32();
          break;
        case 23:
          message.aeTargetExposure = reader.uint32();
          break;
        case 24:
          message.aeUseWeightTable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vision_CameraSettings {
    return {
      hflip: isSet(object.hflip) ? Number(object.hflip) : 0,
      vflip: isSet(object.vflip) ? Number(object.vflip) : 0,
      brightness: isSet(object.brightness) ? Number(object.brightness) : 0,
      contrast: isSet(object.contrast) ? Number(object.contrast) : 0,
      saturation: isSet(object.saturation) ? Number(object.saturation) : 0,
      hue: isSet(object.hue) ? Number(object.hue) : 0,
      sharpness: isSet(object.sharpness) ? Number(object.sharpness) : 0,
      backlightCompensation: isSet(object.backlightCompensation)
        ? Number(object.backlightCompensation)
        : 0,
      exposure: isSet(object.exposure) ? Number(object.exposure) : 0,
      gain: isSet(object.gain) ? Number(object.gain) : 0,
      whiteBalance: isSet(object.whiteBalance)
        ? Number(object.whiteBalance)
        : 0,
      exposureAuto: isSet(object.exposureAuto)
        ? Number(object.exposureAuto)
        : 0,
      autoWhiteBalance: isSet(object.autoWhiteBalance)
        ? Number(object.autoWhiteBalance)
        : 0,
      autoFocus: isSet(object.autoFocus) ? Number(object.autoFocus) : 0,
      exposureAlgorithm: isSet(object.exposureAlgorithm)
        ? Number(object.exposureAlgorithm)
        : 0,
      aeTargetAvgLuma: isSet(object.aeTargetAvgLuma)
        ? Number(object.aeTargetAvgLuma)
        : 0,
      aeTargetAvgLumaDark: isSet(object.aeTargetAvgLumaDark)
        ? Number(object.aeTargetAvgLumaDark)
        : 0,
      aeTargetGain: isSet(object.aeTargetGain)
        ? Number(object.aeTargetGain)
        : 0,
      aeMinVirtGain: isSet(object.aeMinVirtGain)
        ? Number(object.aeMinVirtGain)
        : 0,
      aeMaxVirtGain: isSet(object.aeMaxVirtGain)
        ? Number(object.aeMaxVirtGain)
        : 0,
      aeMinVirtAGain: isSet(object.aeMinVirtAGain)
        ? Number(object.aeMinVirtAGain)
        : 0,
      aeMaxVirtAGain: isSet(object.aeMaxVirtAGain)
        ? Number(object.aeMaxVirtAGain)
        : 0,
      aeTargetExposure: isSet(object.aeTargetExposure)
        ? Number(object.aeTargetExposure)
        : 0,
      aeUseWeightTable: isSet(object.aeUseWeightTable)
        ? Boolean(object.aeUseWeightTable)
        : false,
    };
  },

  toJSON(message: Vision_CameraSettings): unknown {
    const obj: any = {};
    message.hflip !== undefined && (obj.hflip = Math.round(message.hflip));
    message.vflip !== undefined && (obj.vflip = Math.round(message.vflip));
    message.brightness !== undefined &&
      (obj.brightness = Math.round(message.brightness));
    message.contrast !== undefined &&
      (obj.contrast = Math.round(message.contrast));
    message.saturation !== undefined &&
      (obj.saturation = Math.round(message.saturation));
    message.hue !== undefined && (obj.hue = Math.round(message.hue));
    message.sharpness !== undefined &&
      (obj.sharpness = Math.round(message.sharpness));
    message.backlightCompensation !== undefined &&
      (obj.backlightCompensation = Math.round(message.backlightCompensation));
    message.exposure !== undefined &&
      (obj.exposure = Math.round(message.exposure));
    message.gain !== undefined && (obj.gain = Math.round(message.gain));
    message.whiteBalance !== undefined &&
      (obj.whiteBalance = Math.round(message.whiteBalance));
    message.exposureAuto !== undefined &&
      (obj.exposureAuto = Math.round(message.exposureAuto));
    message.autoWhiteBalance !== undefined &&
      (obj.autoWhiteBalance = Math.round(message.autoWhiteBalance));
    message.autoFocus !== undefined &&
      (obj.autoFocus = Math.round(message.autoFocus));
    message.exposureAlgorithm !== undefined &&
      (obj.exposureAlgorithm = Math.round(message.exposureAlgorithm));
    message.aeTargetAvgLuma !== undefined &&
      (obj.aeTargetAvgLuma = Math.round(message.aeTargetAvgLuma));
    message.aeTargetAvgLumaDark !== undefined &&
      (obj.aeTargetAvgLumaDark = Math.round(message.aeTargetAvgLumaDark));
    message.aeTargetGain !== undefined &&
      (obj.aeTargetGain = Math.round(message.aeTargetGain));
    message.aeMinVirtGain !== undefined &&
      (obj.aeMinVirtGain = Math.round(message.aeMinVirtGain));
    message.aeMaxVirtGain !== undefined &&
      (obj.aeMaxVirtGain = Math.round(message.aeMaxVirtGain));
    message.aeMinVirtAGain !== undefined &&
      (obj.aeMinVirtAGain = Math.round(message.aeMinVirtAGain));
    message.aeMaxVirtAGain !== undefined &&
      (obj.aeMaxVirtAGain = Math.round(message.aeMaxVirtAGain));
    message.aeTargetExposure !== undefined &&
      (obj.aeTargetExposure = Math.round(message.aeTargetExposure));
    message.aeUseWeightTable !== undefined &&
      (obj.aeUseWeightTable = message.aeUseWeightTable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vision_CameraSettings>, I>>(
    object: I
  ): Vision_CameraSettings {
    const message = createBaseVision_CameraSettings();
    message.hflip = object.hflip ?? 0;
    message.vflip = object.vflip ?? 0;
    message.brightness = object.brightness ?? 0;
    message.contrast = object.contrast ?? 0;
    message.saturation = object.saturation ?? 0;
    message.hue = object.hue ?? 0;
    message.sharpness = object.sharpness ?? 0;
    message.backlightCompensation = object.backlightCompensation ?? 0;
    message.exposure = object.exposure ?? 0;
    message.gain = object.gain ?? 0;
    message.whiteBalance = object.whiteBalance ?? 0;
    message.exposureAuto = object.exposureAuto ?? 0;
    message.autoWhiteBalance = object.autoWhiteBalance ?? 0;
    message.autoFocus = object.autoFocus ?? 0;
    message.exposureAlgorithm = object.exposureAlgorithm ?? 0;
    message.aeTargetAvgLuma = object.aeTargetAvgLuma ?? 0;
    message.aeTargetAvgLumaDark = object.aeTargetAvgLumaDark ?? 0;
    message.aeTargetGain = object.aeTargetGain ?? 0;
    message.aeMinVirtGain = object.aeMinVirtGain ?? 0;
    message.aeMaxVirtGain = object.aeMaxVirtGain ?? 0;
    message.aeMinVirtAGain = object.aeMinVirtAGain ?? 0;
    message.aeMaxVirtAGain = object.aeMaxVirtAGain ?? 0;
    message.aeTargetExposure = object.aeTargetExposure ?? 0;
    message.aeUseWeightTable = object.aeUseWeightTable ?? false;
    return message;
  },
};

function createBaseReceiver(): Receiver {
  return { message: [], data: [], lastReceived: [], incapacitated: [] };
}

export const Receiver = {
  encode(
    message: Receiver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.message) {
      Receiver_SPLStandardMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.data) {
      Receiver_BroadcastData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.lastReceived) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.incapacitated) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message.push(
            Receiver_SPLStandardMessage.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.data.push(
            Receiver_BroadcastData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lastReceived.push(reader.int32());
            }
          } else {
            message.lastReceived.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.incapacitated.push(reader.bool());
            }
          } else {
            message.incapacitated.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receiver {
    return {
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) =>
            Receiver_SPLStandardMessage.fromJSON(e)
          )
        : [],
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Receiver_BroadcastData.fromJSON(e))
        : [],
      lastReceived: Array.isArray(object?.lastReceived)
        ? object.lastReceived.map((e: any) => Number(e))
        : [],
      incapacitated: Array.isArray(object?.incapacitated)
        ? object.incapacitated.map((e: any) => Boolean(e))
        : [],
    };
  },

  toJSON(message: Receiver): unknown {
    const obj: any = {};
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Receiver_SPLStandardMessage.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? Receiver_BroadcastData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    if (message.lastReceived) {
      obj.lastReceived = message.lastReceived.map((e) => Math.round(e));
    } else {
      obj.lastReceived = [];
    }
    if (message.incapacitated) {
      obj.incapacitated = message.incapacitated.map((e) => e);
    } else {
      obj.incapacitated = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Receiver>, I>>(object: I): Receiver {
    const message = createBaseReceiver();
    message.message =
      object.message?.map((e) => Receiver_SPLStandardMessage.fromPartial(e)) ||
      [];
    message.data =
      object.data?.map((e) => Receiver_BroadcastData.fromPartial(e)) || [];
    message.lastReceived = object.lastReceived?.map((e) => e) || [];
    message.incapacitated = object.incapacitated?.map((e) => e) || [];
    return message;
  },
};

function createBaseReceiver_SPLStandardMessage(): Receiver_SPLStandardMessage {
  return {
    header: "",
    version: 0,
    playerNum: 0,
    teamNum: 0,
    fallen: 0,
    pose: [],
    ballAge: 0,
    ball: [],
    numOfDataBytes: 0,
    data: new Uint8Array(),
  };
}

export const Receiver_SPLStandardMessage = {
  encode(
    message: Receiver_SPLStandardMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.playerNum !== 0) {
      writer.uint32(24).uint32(message.playerNum);
    }
    if (message.teamNum !== 0) {
      writer.uint32(32).uint32(message.teamNum);
    }
    if (message.fallen !== 0) {
      writer.uint32(40).uint32(message.fallen);
    }
    writer.uint32(50).fork();
    for (const v of message.pose) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.ballAge !== 0) {
      writer.uint32(61).float(message.ballAge);
    }
    writer.uint32(66).fork();
    for (const v of message.ball) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.numOfDataBytes !== 0) {
      writer.uint32(72).uint32(message.numOfDataBytes);
    }
    if (message.data.length !== 0) {
      writer.uint32(82).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Receiver_SPLStandardMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver_SPLStandardMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = reader.string();
          break;
        case 2:
          message.version = reader.uint32();
          break;
        case 3:
          message.playerNum = reader.uint32();
          break;
        case 4:
          message.teamNum = reader.uint32();
          break;
        case 5:
          message.fallen = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pose.push(reader.float());
            }
          } else {
            message.pose.push(reader.float());
          }
          break;
        case 7:
          message.ballAge = reader.float();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ball.push(reader.float());
            }
          } else {
            message.ball.push(reader.float());
          }
          break;
        case 9:
          message.numOfDataBytes = reader.uint32();
          break;
        case 10:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receiver_SPLStandardMessage {
    return {
      header: isSet(object.header) ? String(object.header) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      playerNum: isSet(object.playerNum) ? Number(object.playerNum) : 0,
      teamNum: isSet(object.teamNum) ? Number(object.teamNum) : 0,
      fallen: isSet(object.fallen) ? Number(object.fallen) : 0,
      pose: Array.isArray(object?.pose)
        ? object.pose.map((e: any) => Number(e))
        : [],
      ballAge: isSet(object.ballAge) ? Number(object.ballAge) : 0,
      ball: Array.isArray(object?.ball)
        ? object.ball.map((e: any) => Number(e))
        : [],
      numOfDataBytes: isSet(object.numOfDataBytes)
        ? Number(object.numOfDataBytes)
        : 0,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: Receiver_SPLStandardMessage): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.playerNum !== undefined &&
      (obj.playerNum = Math.round(message.playerNum));
    message.teamNum !== undefined &&
      (obj.teamNum = Math.round(message.teamNum));
    message.fallen !== undefined && (obj.fallen = Math.round(message.fallen));
    if (message.pose) {
      obj.pose = message.pose.map((e) => e);
    } else {
      obj.pose = [];
    }
    message.ballAge !== undefined && (obj.ballAge = message.ballAge);
    if (message.ball) {
      obj.ball = message.ball.map((e) => e);
    } else {
      obj.ball = [];
    }
    message.numOfDataBytes !== undefined &&
      (obj.numOfDataBytes = Math.round(message.numOfDataBytes));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Receiver_SPLStandardMessage>, I>>(
    object: I
  ): Receiver_SPLStandardMessage {
    const message = createBaseReceiver_SPLStandardMessage();
    message.header = object.header ?? "";
    message.version = object.version ?? 0;
    message.playerNum = object.playerNum ?? 0;
    message.teamNum = object.teamNum ?? 0;
    message.fallen = object.fallen ?? 0;
    message.pose = object.pose?.map((e) => e) || [];
    message.ballAge = object.ballAge ?? 0;
    message.ball = object.ball?.map((e) => e) || [];
    message.numOfDataBytes = object.numOfDataBytes ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseReceiver_BroadcastData(): Receiver_BroadcastData {
  return {
    playerNum: 0,
    robotPos: [],
    ballPosAbs: undefined,
    ballPosRR: undefined,
    sharedStateEstimationBundle: undefined,
    behaviourSharedData: undefined,
    acB: 0,
    uptime: 0,
    gameState: 0,
  };
}

export const Receiver_BroadcastData = {
  encode(
    message: Receiver_BroadcastData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playerNum !== 0) {
      writer.uint32(8).int32(message.playerNum);
    }
    writer.uint32(18).fork();
    for (const v of message.robotPos) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.ballPosAbs !== undefined) {
      AbsCoord.encode(message.ballPosAbs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ballPosRR !== undefined) {
      RRCoord.encode(message.ballPosRR, writer.uint32(34).fork()).ldelim();
    }
    if (message.sharedStateEstimationBundle !== undefined) {
      SharedStateEstimationBundle.encode(
        message.sharedStateEstimationBundle,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.behaviourSharedData !== undefined) {
      BehaviourSharedData.encode(
        message.behaviourSharedData,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.acB !== 0) {
      writer.uint32(56).int32(message.acB);
    }
    if (message.uptime !== 0) {
      writer.uint32(69).float(message.uptime);
    }
    if (message.gameState !== 0) {
      writer.uint32(72).uint32(message.gameState);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Receiver_BroadcastData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver_BroadcastData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerNum = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.robotPos.push(reader.float());
            }
          } else {
            message.robotPos.push(reader.float());
          }
          break;
        case 3:
          message.ballPosAbs = AbsCoord.decode(reader, reader.uint32());
          break;
        case 4:
          message.ballPosRR = RRCoord.decode(reader, reader.uint32());
          break;
        case 5:
          message.sharedStateEstimationBundle =
            SharedStateEstimationBundle.decode(reader, reader.uint32());
          break;
        case 6:
          message.behaviourSharedData = BehaviourSharedData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.acB = reader.int32() as any;
          break;
        case 8:
          message.uptime = reader.float();
          break;
        case 9:
          message.gameState = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receiver_BroadcastData {
    return {
      playerNum: isSet(object.playerNum) ? Number(object.playerNum) : 0,
      robotPos: Array.isArray(object?.robotPos)
        ? object.robotPos.map((e: any) => Number(e))
        : [],
      ballPosAbs: isSet(object.ballPosAbs)
        ? AbsCoord.fromJSON(object.ballPosAbs)
        : undefined,
      ballPosRR: isSet(object.ballPosRR)
        ? RRCoord.fromJSON(object.ballPosRR)
        : undefined,
      sharedStateEstimationBundle: isSet(object.sharedStateEstimationBundle)
        ? SharedStateEstimationBundle.fromJSON(
            object.sharedStateEstimationBundle
          )
        : undefined,
      behaviourSharedData: isSet(object.behaviourSharedData)
        ? BehaviourSharedData.fromJSON(object.behaviourSharedData)
        : undefined,
      acB: isSet(object.acB) ? actionTypeFromJSON(object.acB) : 0,
      uptime: isSet(object.uptime) ? Number(object.uptime) : 0,
      gameState: isSet(object.gameState) ? Number(object.gameState) : 0,
    };
  },

  toJSON(message: Receiver_BroadcastData): unknown {
    const obj: any = {};
    message.playerNum !== undefined &&
      (obj.playerNum = Math.round(message.playerNum));
    if (message.robotPos) {
      obj.robotPos = message.robotPos.map((e) => e);
    } else {
      obj.robotPos = [];
    }
    message.ballPosAbs !== undefined &&
      (obj.ballPosAbs = message.ballPosAbs
        ? AbsCoord.toJSON(message.ballPosAbs)
        : undefined);
    message.ballPosRR !== undefined &&
      (obj.ballPosRR = message.ballPosRR
        ? RRCoord.toJSON(message.ballPosRR)
        : undefined);
    message.sharedStateEstimationBundle !== undefined &&
      (obj.sharedStateEstimationBundle = message.sharedStateEstimationBundle
        ? SharedStateEstimationBundle.toJSON(
            message.sharedStateEstimationBundle
          )
        : undefined);
    message.behaviourSharedData !== undefined &&
      (obj.behaviourSharedData = message.behaviourSharedData
        ? BehaviourSharedData.toJSON(message.behaviourSharedData)
        : undefined);
    message.acB !== undefined && (obj.acB = actionTypeToJSON(message.acB));
    message.uptime !== undefined && (obj.uptime = message.uptime);
    message.gameState !== undefined &&
      (obj.gameState = Math.round(message.gameState));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Receiver_BroadcastData>, I>>(
    object: I
  ): Receiver_BroadcastData {
    const message = createBaseReceiver_BroadcastData();
    message.playerNum = object.playerNum ?? 0;
    message.robotPos = object.robotPos?.map((e) => e) || [];
    message.ballPosAbs =
      object.ballPosAbs !== undefined && object.ballPosAbs !== null
        ? AbsCoord.fromPartial(object.ballPosAbs)
        : undefined;
    message.ballPosRR =
      object.ballPosRR !== undefined && object.ballPosRR !== null
        ? RRCoord.fromPartial(object.ballPosRR)
        : undefined;
    message.sharedStateEstimationBundle =
      object.sharedStateEstimationBundle !== undefined &&
      object.sharedStateEstimationBundle !== null
        ? SharedStateEstimationBundle.fromPartial(
            object.sharedStateEstimationBundle
          )
        : undefined;
    message.behaviourSharedData =
      object.behaviourSharedData !== undefined &&
      object.behaviourSharedData !== null
        ? BehaviourSharedData.fromPartial(object.behaviourSharedData)
        : undefined;
    message.acB = object.acB ?? 0;
    message.uptime = object.uptime ?? 0;
    message.gameState = object.gameState ?? 0;
    return message;
  },
};

function createBaseStateEstimation(): StateEstimation {
  return {
    robotObstacles: [],
    robotPos: undefined,
    allRobotPos: [],
    ballPosRR: undefined,
    ballPosRRC: undefined,
    ballVelRRC: undefined,
    ballVel: undefined,
    ballPos: undefined,
    teamBallPos: undefined,
    teamBallVel: undefined,
    sharedStateEstimationBundle: undefined,
    havePendingOutgoingSharedBundle: false,
    havePendingIncomingSharedBundle: [],
  };
}

export const StateEstimation = {
  encode(
    message: StateEstimation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.robotObstacles) {
      StateEstimation_RobotObstacle.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.robotPos !== undefined) {
      AbsCoord.encode(message.robotPos, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.allRobotPos) {
      AbsCoord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.ballPosRR !== undefined) {
      RRCoord.encode(message.ballPosRR, writer.uint32(34).fork()).ldelim();
    }
    if (message.ballPosRRC !== undefined) {
      AbsCoord.encode(message.ballPosRRC, writer.uint32(42).fork()).ldelim();
    }
    if (message.ballVelRRC !== undefined) {
      AbsCoord.encode(message.ballVelRRC, writer.uint32(50).fork()).ldelim();
    }
    if (message.ballVel !== undefined) {
      AbsCoord.encode(message.ballVel, writer.uint32(58).fork()).ldelim();
    }
    if (message.ballPos !== undefined) {
      AbsCoord.encode(message.ballPos, writer.uint32(66).fork()).ldelim();
    }
    if (message.teamBallPos !== undefined) {
      AbsCoord.encode(message.teamBallPos, writer.uint32(74).fork()).ldelim();
    }
    if (message.teamBallVel !== undefined) {
      AbsCoord.encode(message.teamBallVel, writer.uint32(82).fork()).ldelim();
    }
    if (message.sharedStateEstimationBundle !== undefined) {
      SharedStateEstimationBundle.encode(
        message.sharedStateEstimationBundle,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.havePendingOutgoingSharedBundle === true) {
      writer.uint32(96).bool(message.havePendingOutgoingSharedBundle);
    }
    writer.uint32(106).fork();
    for (const v of message.havePendingIncomingSharedBundle) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateEstimation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateEstimation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.robotObstacles.push(
            StateEstimation_RobotObstacle.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.robotPos = AbsCoord.decode(reader, reader.uint32());
          break;
        case 3:
          message.allRobotPos.push(AbsCoord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.ballPosRR = RRCoord.decode(reader, reader.uint32());
          break;
        case 5:
          message.ballPosRRC = AbsCoord.decode(reader, reader.uint32());
          break;
        case 6:
          message.ballVelRRC = AbsCoord.decode(reader, reader.uint32());
          break;
        case 7:
          message.ballVel = AbsCoord.decode(reader, reader.uint32());
          break;
        case 8:
          message.ballPos = AbsCoord.decode(reader, reader.uint32());
          break;
        case 9:
          message.teamBallPos = AbsCoord.decode(reader, reader.uint32());
          break;
        case 10:
          message.teamBallVel = AbsCoord.decode(reader, reader.uint32());
          break;
        case 11:
          message.sharedStateEstimationBundle =
            SharedStateEstimationBundle.decode(reader, reader.uint32());
          break;
        case 12:
          message.havePendingOutgoingSharedBundle = reader.bool();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.havePendingIncomingSharedBundle.push(reader.bool());
            }
          } else {
            message.havePendingIncomingSharedBundle.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateEstimation {
    return {
      robotObstacles: Array.isArray(object?.robotObstacles)
        ? object.robotObstacles.map((e: any) =>
            StateEstimation_RobotObstacle.fromJSON(e)
          )
        : [],
      robotPos: isSet(object.robotPos)
        ? AbsCoord.fromJSON(object.robotPos)
        : undefined,
      allRobotPos: Array.isArray(object?.allRobotPos)
        ? object.allRobotPos.map((e: any) => AbsCoord.fromJSON(e))
        : [],
      ballPosRR: isSet(object.ballPosRR)
        ? RRCoord.fromJSON(object.ballPosRR)
        : undefined,
      ballPosRRC: isSet(object.ballPosRRC)
        ? AbsCoord.fromJSON(object.ballPosRRC)
        : undefined,
      ballVelRRC: isSet(object.ballVelRRC)
        ? AbsCoord.fromJSON(object.ballVelRRC)
        : undefined,
      ballVel: isSet(object.ballVel)
        ? AbsCoord.fromJSON(object.ballVel)
        : undefined,
      ballPos: isSet(object.ballPos)
        ? AbsCoord.fromJSON(object.ballPos)
        : undefined,
      teamBallPos: isSet(object.teamBallPos)
        ? AbsCoord.fromJSON(object.teamBallPos)
        : undefined,
      teamBallVel: isSet(object.teamBallVel)
        ? AbsCoord.fromJSON(object.teamBallVel)
        : undefined,
      sharedStateEstimationBundle: isSet(object.sharedStateEstimationBundle)
        ? SharedStateEstimationBundle.fromJSON(
            object.sharedStateEstimationBundle
          )
        : undefined,
      havePendingOutgoingSharedBundle: isSet(
        object.havePendingOutgoingSharedBundle
      )
        ? Boolean(object.havePendingOutgoingSharedBundle)
        : false,
      havePendingIncomingSharedBundle: Array.isArray(
        object?.havePendingIncomingSharedBundle
      )
        ? object.havePendingIncomingSharedBundle.map((e: any) => Boolean(e))
        : [],
    };
  },

  toJSON(message: StateEstimation): unknown {
    const obj: any = {};
    if (message.robotObstacles) {
      obj.robotObstacles = message.robotObstacles.map((e) =>
        e ? StateEstimation_RobotObstacle.toJSON(e) : undefined
      );
    } else {
      obj.robotObstacles = [];
    }
    message.robotPos !== undefined &&
      (obj.robotPos = message.robotPos
        ? AbsCoord.toJSON(message.robotPos)
        : undefined);
    if (message.allRobotPos) {
      obj.allRobotPos = message.allRobotPos.map((e) =>
        e ? AbsCoord.toJSON(e) : undefined
      );
    } else {
      obj.allRobotPos = [];
    }
    message.ballPosRR !== undefined &&
      (obj.ballPosRR = message.ballPosRR
        ? RRCoord.toJSON(message.ballPosRR)
        : undefined);
    message.ballPosRRC !== undefined &&
      (obj.ballPosRRC = message.ballPosRRC
        ? AbsCoord.toJSON(message.ballPosRRC)
        : undefined);
    message.ballVelRRC !== undefined &&
      (obj.ballVelRRC = message.ballVelRRC
        ? AbsCoord.toJSON(message.ballVelRRC)
        : undefined);
    message.ballVel !== undefined &&
      (obj.ballVel = message.ballVel
        ? AbsCoord.toJSON(message.ballVel)
        : undefined);
    message.ballPos !== undefined &&
      (obj.ballPos = message.ballPos
        ? AbsCoord.toJSON(message.ballPos)
        : undefined);
    message.teamBallPos !== undefined &&
      (obj.teamBallPos = message.teamBallPos
        ? AbsCoord.toJSON(message.teamBallPos)
        : undefined);
    message.teamBallVel !== undefined &&
      (obj.teamBallVel = message.teamBallVel
        ? AbsCoord.toJSON(message.teamBallVel)
        : undefined);
    message.sharedStateEstimationBundle !== undefined &&
      (obj.sharedStateEstimationBundle = message.sharedStateEstimationBundle
        ? SharedStateEstimationBundle.toJSON(
            message.sharedStateEstimationBundle
          )
        : undefined);
    message.havePendingOutgoingSharedBundle !== undefined &&
      (obj.havePendingOutgoingSharedBundle =
        message.havePendingOutgoingSharedBundle);
    if (message.havePendingIncomingSharedBundle) {
      obj.havePendingIncomingSharedBundle =
        message.havePendingIncomingSharedBundle.map((e) => e);
    } else {
      obj.havePendingIncomingSharedBundle = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateEstimation>, I>>(
    object: I
  ): StateEstimation {
    const message = createBaseStateEstimation();
    message.robotObstacles =
      object.robotObstacles?.map((e) =>
        StateEstimation_RobotObstacle.fromPartial(e)
      ) || [];
    message.robotPos =
      object.robotPos !== undefined && object.robotPos !== null
        ? AbsCoord.fromPartial(object.robotPos)
        : undefined;
    message.allRobotPos =
      object.allRobotPos?.map((e) => AbsCoord.fromPartial(e)) || [];
    message.ballPosRR =
      object.ballPosRR !== undefined && object.ballPosRR !== null
        ? RRCoord.fromPartial(object.ballPosRR)
        : undefined;
    message.ballPosRRC =
      object.ballPosRRC !== undefined && object.ballPosRRC !== null
        ? AbsCoord.fromPartial(object.ballPosRRC)
        : undefined;
    message.ballVelRRC =
      object.ballVelRRC !== undefined && object.ballVelRRC !== null
        ? AbsCoord.fromPartial(object.ballVelRRC)
        : undefined;
    message.ballVel =
      object.ballVel !== undefined && object.ballVel !== null
        ? AbsCoord.fromPartial(object.ballVel)
        : undefined;
    message.ballPos =
      object.ballPos !== undefined && object.ballPos !== null
        ? AbsCoord.fromPartial(object.ballPos)
        : undefined;
    message.teamBallPos =
      object.teamBallPos !== undefined && object.teamBallPos !== null
        ? AbsCoord.fromPartial(object.teamBallPos)
        : undefined;
    message.teamBallVel =
      object.teamBallVel !== undefined && object.teamBallVel !== null
        ? AbsCoord.fromPartial(object.teamBallVel)
        : undefined;
    message.sharedStateEstimationBundle =
      object.sharedStateEstimationBundle !== undefined &&
      object.sharedStateEstimationBundle !== null
        ? SharedStateEstimationBundle.fromPartial(
            object.sharedStateEstimationBundle
          )
        : undefined;
    message.havePendingOutgoingSharedBundle =
      object.havePendingOutgoingSharedBundle ?? false;
    message.havePendingIncomingSharedBundle =
      object.havePendingIncomingSharedBundle?.map((e) => e) || [];
    return message;
  },
};

function createBaseStateEstimation_RobotObstacle(): StateEstimation_RobotObstacle {
  return {
    rr: undefined,
    type: 0,
    rrc: undefined,
    pos: undefined,
    tangentHeadingLeft: 0,
    tangentHeadingRight: 0,
    evadeVectorLeft: undefined,
    evadeVectorRight: undefined,
  };
}

export const StateEstimation_RobotObstacle = {
  encode(
    message: StateEstimation_RobotObstacle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rr !== undefined) {
      RRCoord.encode(message.rr, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.rrc !== undefined) {
      AbsCoord.encode(message.rrc, writer.uint32(26).fork()).ldelim();
    }
    if (message.pos !== undefined) {
      AbsCoord.encode(message.pos, writer.uint32(34).fork()).ldelim();
    }
    if (message.tangentHeadingLeft !== 0) {
      writer.uint32(41).double(message.tangentHeadingLeft);
    }
    if (message.tangentHeadingRight !== 0) {
      writer.uint32(49).double(message.tangentHeadingRight);
    }
    if (message.evadeVectorLeft !== undefined) {
      RRCoord.encode(
        message.evadeVectorLeft,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.evadeVectorRight !== undefined) {
      RRCoord.encode(
        message.evadeVectorRight,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StateEstimation_RobotObstacle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateEstimation_RobotObstacle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rr = RRCoord.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.rrc = AbsCoord.decode(reader, reader.uint32());
          break;
        case 4:
          message.pos = AbsCoord.decode(reader, reader.uint32());
          break;
        case 5:
          message.tangentHeadingLeft = reader.double();
          break;
        case 6:
          message.tangentHeadingRight = reader.double();
          break;
        case 7:
          message.evadeVectorLeft = RRCoord.decode(reader, reader.uint32());
          break;
        case 8:
          message.evadeVectorRight = RRCoord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateEstimation_RobotObstacle {
    return {
      rr: isSet(object.rr) ? RRCoord.fromJSON(object.rr) : undefined,
      type: isSet(object.type) ? robotVisionInfoTypeFromJSON(object.type) : 0,
      rrc: isSet(object.rrc) ? AbsCoord.fromJSON(object.rrc) : undefined,
      pos: isSet(object.pos) ? AbsCoord.fromJSON(object.pos) : undefined,
      tangentHeadingLeft: isSet(object.tangentHeadingLeft)
        ? Number(object.tangentHeadingLeft)
        : 0,
      tangentHeadingRight: isSet(object.tangentHeadingRight)
        ? Number(object.tangentHeadingRight)
        : 0,
      evadeVectorLeft: isSet(object.evadeVectorLeft)
        ? RRCoord.fromJSON(object.evadeVectorLeft)
        : undefined,
      evadeVectorRight: isSet(object.evadeVectorRight)
        ? RRCoord.fromJSON(object.evadeVectorRight)
        : undefined,
    };
  },

  toJSON(message: StateEstimation_RobotObstacle): unknown {
    const obj: any = {};
    message.rr !== undefined &&
      (obj.rr = message.rr ? RRCoord.toJSON(message.rr) : undefined);
    message.type !== undefined &&
      (obj.type = robotVisionInfoTypeToJSON(message.type));
    message.rrc !== undefined &&
      (obj.rrc = message.rrc ? AbsCoord.toJSON(message.rrc) : undefined);
    message.pos !== undefined &&
      (obj.pos = message.pos ? AbsCoord.toJSON(message.pos) : undefined);
    message.tangentHeadingLeft !== undefined &&
      (obj.tangentHeadingLeft = message.tangentHeadingLeft);
    message.tangentHeadingRight !== undefined &&
      (obj.tangentHeadingRight = message.tangentHeadingRight);
    message.evadeVectorLeft !== undefined &&
      (obj.evadeVectorLeft = message.evadeVectorLeft
        ? RRCoord.toJSON(message.evadeVectorLeft)
        : undefined);
    message.evadeVectorRight !== undefined &&
      (obj.evadeVectorRight = message.evadeVectorRight
        ? RRCoord.toJSON(message.evadeVectorRight)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateEstimation_RobotObstacle>, I>>(
    object: I
  ): StateEstimation_RobotObstacle {
    const message = createBaseStateEstimation_RobotObstacle();
    message.rr =
      object.rr !== undefined && object.rr !== null
        ? RRCoord.fromPartial(object.rr)
        : undefined;
    message.type = object.type ?? 0;
    message.rrc =
      object.rrc !== undefined && object.rrc !== null
        ? AbsCoord.fromPartial(object.rrc)
        : undefined;
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? AbsCoord.fromPartial(object.pos)
        : undefined;
    message.tangentHeadingLeft = object.tangentHeadingLeft ?? 0;
    message.tangentHeadingRight = object.tangentHeadingRight ?? 0;
    message.evadeVectorLeft =
      object.evadeVectorLeft !== undefined && object.evadeVectorLeft !== null
        ? RRCoord.fromPartial(object.evadeVectorLeft)
        : undefined;
    message.evadeVectorRight =
      object.evadeVectorRight !== undefined && object.evadeVectorRight !== null
        ? RRCoord.fromPartial(object.evadeVectorRight)
        : undefined;
    return message;
  },
};

function createBaseBehaviourDebugInfo(): BehaviourDebugInfo {
  return {
    bodyBehaviourHierarchy: "",
    headBehaviourHierarchy: "",
    haveBallManoeuvreTarget: false,
    ballManoeuvreTargetX: 0,
    ballManoeuvreTargetY: 0,
    ballManoeuvreHeadingError: 0,
    ballManoeuvreType: "",
    ballManoeuvreHard: false,
    anticipating: false,
    anticipateX: 0,
    anticipateY: 0,
    anticipateH: 0,
  };
}

export const BehaviourDebugInfo = {
  encode(
    message: BehaviourDebugInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bodyBehaviourHierarchy !== "") {
      writer.uint32(10).string(message.bodyBehaviourHierarchy);
    }
    if (message.headBehaviourHierarchy !== "") {
      writer.uint32(18).string(message.headBehaviourHierarchy);
    }
    if (message.haveBallManoeuvreTarget === true) {
      writer.uint32(24).bool(message.haveBallManoeuvreTarget);
    }
    if (message.ballManoeuvreTargetX !== 0) {
      writer.uint32(37).float(message.ballManoeuvreTargetX);
    }
    if (message.ballManoeuvreTargetY !== 0) {
      writer.uint32(45).float(message.ballManoeuvreTargetY);
    }
    if (message.ballManoeuvreHeadingError !== 0) {
      writer.uint32(53).float(message.ballManoeuvreHeadingError);
    }
    if (message.ballManoeuvreType !== "") {
      writer.uint32(58).string(message.ballManoeuvreType);
    }
    if (message.ballManoeuvreHard === true) {
      writer.uint32(64).bool(message.ballManoeuvreHard);
    }
    if (message.anticipating === true) {
      writer.uint32(72).bool(message.anticipating);
    }
    if (message.anticipateX !== 0) {
      writer.uint32(85).float(message.anticipateX);
    }
    if (message.anticipateY !== 0) {
      writer.uint32(93).float(message.anticipateY);
    }
    if (message.anticipateH !== 0) {
      writer.uint32(101).float(message.anticipateH);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BehaviourDebugInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBehaviourDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBehaviourHierarchy = reader.string();
          break;
        case 2:
          message.headBehaviourHierarchy = reader.string();
          break;
        case 3:
          message.haveBallManoeuvreTarget = reader.bool();
          break;
        case 4:
          message.ballManoeuvreTargetX = reader.float();
          break;
        case 5:
          message.ballManoeuvreTargetY = reader.float();
          break;
        case 6:
          message.ballManoeuvreHeadingError = reader.float();
          break;
        case 7:
          message.ballManoeuvreType = reader.string();
          break;
        case 8:
          message.ballManoeuvreHard = reader.bool();
          break;
        case 9:
          message.anticipating = reader.bool();
          break;
        case 10:
          message.anticipateX = reader.float();
          break;
        case 11:
          message.anticipateY = reader.float();
          break;
        case 12:
          message.anticipateH = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BehaviourDebugInfo {
    return {
      bodyBehaviourHierarchy: isSet(object.bodyBehaviourHierarchy)
        ? String(object.bodyBehaviourHierarchy)
        : "",
      headBehaviourHierarchy: isSet(object.headBehaviourHierarchy)
        ? String(object.headBehaviourHierarchy)
        : "",
      haveBallManoeuvreTarget: isSet(object.haveBallManoeuvreTarget)
        ? Boolean(object.haveBallManoeuvreTarget)
        : false,
      ballManoeuvreTargetX: isSet(object.ballManoeuvreTargetX)
        ? Number(object.ballManoeuvreTargetX)
        : 0,
      ballManoeuvreTargetY: isSet(object.ballManoeuvreTargetY)
        ? Number(object.ballManoeuvreTargetY)
        : 0,
      ballManoeuvreHeadingError: isSet(object.ballManoeuvreHeadingError)
        ? Number(object.ballManoeuvreHeadingError)
        : 0,
      ballManoeuvreType: isSet(object.ballManoeuvreType)
        ? String(object.ballManoeuvreType)
        : "",
      ballManoeuvreHard: isSet(object.ballManoeuvreHard)
        ? Boolean(object.ballManoeuvreHard)
        : false,
      anticipating: isSet(object.anticipating)
        ? Boolean(object.anticipating)
        : false,
      anticipateX: isSet(object.anticipateX) ? Number(object.anticipateX) : 0,
      anticipateY: isSet(object.anticipateY) ? Number(object.anticipateY) : 0,
      anticipateH: isSet(object.anticipateH) ? Number(object.anticipateH) : 0,
    };
  },

  toJSON(message: BehaviourDebugInfo): unknown {
    const obj: any = {};
    message.bodyBehaviourHierarchy !== undefined &&
      (obj.bodyBehaviourHierarchy = message.bodyBehaviourHierarchy);
    message.headBehaviourHierarchy !== undefined &&
      (obj.headBehaviourHierarchy = message.headBehaviourHierarchy);
    message.haveBallManoeuvreTarget !== undefined &&
      (obj.haveBallManoeuvreTarget = message.haveBallManoeuvreTarget);
    message.ballManoeuvreTargetX !== undefined &&
      (obj.ballManoeuvreTargetX = message.ballManoeuvreTargetX);
    message.ballManoeuvreTargetY !== undefined &&
      (obj.ballManoeuvreTargetY = message.ballManoeuvreTargetY);
    message.ballManoeuvreHeadingError !== undefined &&
      (obj.ballManoeuvreHeadingError = message.ballManoeuvreHeadingError);
    message.ballManoeuvreType !== undefined &&
      (obj.ballManoeuvreType = message.ballManoeuvreType);
    message.ballManoeuvreHard !== undefined &&
      (obj.ballManoeuvreHard = message.ballManoeuvreHard);
    message.anticipating !== undefined &&
      (obj.anticipating = message.anticipating);
    message.anticipateX !== undefined &&
      (obj.anticipateX = message.anticipateX);
    message.anticipateY !== undefined &&
      (obj.anticipateY = message.anticipateY);
    message.anticipateH !== undefined &&
      (obj.anticipateH = message.anticipateH);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BehaviourDebugInfo>, I>>(
    object: I
  ): BehaviourDebugInfo {
    const message = createBaseBehaviourDebugInfo();
    message.bodyBehaviourHierarchy = object.bodyBehaviourHierarchy ?? "";
    message.headBehaviourHierarchy = object.headBehaviourHierarchy ?? "";
    message.haveBallManoeuvreTarget = object.haveBallManoeuvreTarget ?? false;
    message.ballManoeuvreTargetX = object.ballManoeuvreTargetX ?? 0;
    message.ballManoeuvreTargetY = object.ballManoeuvreTargetY ?? 0;
    message.ballManoeuvreHeadingError = object.ballManoeuvreHeadingError ?? 0;
    message.ballManoeuvreType = object.ballManoeuvreType ?? "";
    message.ballManoeuvreHard = object.ballManoeuvreHard ?? false;
    message.anticipating = object.anticipating ?? false;
    message.anticipateX = object.anticipateX ?? 0;
    message.anticipateY = object.anticipateY ?? 0;
    message.anticipateH = object.anticipateH ?? 0;
    return message;
  },
};

function createBaseBlackboard(): Blackboard {
  return {
    mask: 0,
    gameController: undefined,
    motion: undefined,
    behaviour: undefined,
    perception: undefined,
    kinematics: undefined,
    vision: undefined,
    receiver: undefined,
    stateEstimation: undefined,
  };
}

export const Blackboard = {
  encode(
    message: Blackboard,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mask !== 0) {
      writer.uint32(8).uint64(message.mask);
    }
    if (message.gameController !== undefined) {
      GameController.encode(
        message.gameController,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.motion !== undefined) {
      Motion.encode(message.motion, writer.uint32(26).fork()).ldelim();
    }
    if (message.behaviour !== undefined) {
      Behaviour.encode(message.behaviour, writer.uint32(34).fork()).ldelim();
    }
    if (message.perception !== undefined) {
      Perception.encode(message.perception, writer.uint32(42).fork()).ldelim();
    }
    if (message.kinematics !== undefined) {
      Kinematics.encode(message.kinematics, writer.uint32(50).fork()).ldelim();
    }
    if (message.vision !== undefined) {
      Vision.encode(message.vision, writer.uint32(58).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(66).fork()).ldelim();
    }
    if (message.stateEstimation !== undefined) {
      StateEstimation.encode(
        message.stateEstimation,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blackboard {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlackboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mask = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.gameController = GameController.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.motion = Motion.decode(reader, reader.uint32());
          break;
        case 4:
          message.behaviour = Behaviour.decode(reader, reader.uint32());
          break;
        case 5:
          message.perception = Perception.decode(reader, reader.uint32());
          break;
        case 6:
          message.kinematics = Kinematics.decode(reader, reader.uint32());
          break;
        case 7:
          message.vision = Vision.decode(reader, reader.uint32());
          break;
        case 8:
          message.receiver = Receiver.decode(reader, reader.uint32());
          break;
        case 9:
          message.stateEstimation = StateEstimation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blackboard {
    return {
      mask: isSet(object.mask) ? Number(object.mask) : 0,
      gameController: isSet(object.gameController)
        ? GameController.fromJSON(object.gameController)
        : undefined,
      motion: isSet(object.motion) ? Motion.fromJSON(object.motion) : undefined,
      behaviour: isSet(object.behaviour)
        ? Behaviour.fromJSON(object.behaviour)
        : undefined,
      perception: isSet(object.perception)
        ? Perception.fromJSON(object.perception)
        : undefined,
      kinematics: isSet(object.kinematics)
        ? Kinematics.fromJSON(object.kinematics)
        : undefined,
      vision: isSet(object.vision) ? Vision.fromJSON(object.vision) : undefined,
      receiver: isSet(object.receiver)
        ? Receiver.fromJSON(object.receiver)
        : undefined,
      stateEstimation: isSet(object.stateEstimation)
        ? StateEstimation.fromJSON(object.stateEstimation)
        : undefined,
    };
  },

  toJSON(message: Blackboard): unknown {
    const obj: any = {};
    message.mask !== undefined && (obj.mask = Math.round(message.mask));
    message.gameController !== undefined &&
      (obj.gameController = message.gameController
        ? GameController.toJSON(message.gameController)
        : undefined);
    message.motion !== undefined &&
      (obj.motion = message.motion ? Motion.toJSON(message.motion) : undefined);
    message.behaviour !== undefined &&
      (obj.behaviour = message.behaviour
        ? Behaviour.toJSON(message.behaviour)
        : undefined);
    message.perception !== undefined &&
      (obj.perception = message.perception
        ? Perception.toJSON(message.perception)
        : undefined);
    message.kinematics !== undefined &&
      (obj.kinematics = message.kinematics
        ? Kinematics.toJSON(message.kinematics)
        : undefined);
    message.vision !== undefined &&
      (obj.vision = message.vision ? Vision.toJSON(message.vision) : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? Receiver.toJSON(message.receiver)
        : undefined);
    message.stateEstimation !== undefined &&
      (obj.stateEstimation = message.stateEstimation
        ? StateEstimation.toJSON(message.stateEstimation)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Blackboard>, I>>(
    object: I
  ): Blackboard {
    const message = createBaseBlackboard();
    message.mask = object.mask ?? 0;
    message.gameController =
      object.gameController !== undefined && object.gameController !== null
        ? GameController.fromPartial(object.gameController)
        : undefined;
    message.motion =
      object.motion !== undefined && object.motion !== null
        ? Motion.fromPartial(object.motion)
        : undefined;
    message.behaviour =
      object.behaviour !== undefined && object.behaviour !== null
        ? Behaviour.fromPartial(object.behaviour)
        : undefined;
    message.perception =
      object.perception !== undefined && object.perception !== null
        ? Perception.fromPartial(object.perception)
        : undefined;
    message.kinematics =
      object.kinematics !== undefined && object.kinematics !== null
        ? Kinematics.fromPartial(object.kinematics)
        : undefined;
    message.vision =
      object.vision !== undefined && object.vision !== null
        ? Vision.fromPartial(object.vision)
        : undefined;
    message.receiver =
      object.receiver !== undefined && object.receiver !== null
        ? Receiver.fromPartial(object.receiver)
        : undefined;
    message.stateEstimation =
      object.stateEstimation !== undefined && object.stateEstimation !== null
        ? StateEstimation.fromPartial(object.stateEstimation)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
