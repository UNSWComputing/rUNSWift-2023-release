export interface iRobotInfo {
    name: string;
    IPLastSegment: number;
    OSVer: string;
}
export const robotList = new Map<string, iRobotInfo>();
robotList.set("name", {name: "name", IPLastSegment: 2, "OSVer": "2.9"});
robotList.set("robot1", {name: "robot1", IPLastSegment: 0, "OSVer": "2.8"});
robotList.set("robot2", {name: "robot2", IPLastSegment: 1, "OSVer": "2.8"});
robotList.set("robot3", {name: "robot3", IPLastSegment: 2, "OSVer": "2.1"});
robotList.set("robot4", {name: "robot4", IPLastSegment: 3, "OSVer": "2.1"});

export function getRobotWifiIp(name: string) {
  const robot = robotList.get(name);
  if (!robot) {
      throw new Error(`Unknown robot [${name}]`);
  }
  const wifiIp = '10.0.18.1'
  + (robot.IPLastSegment < 10 ? '0': '')
  + robot.IPLastSegment;
  return wifiIp;
}

export function getRobotHostname(name: string) {
  return `${name}.local`;
}
