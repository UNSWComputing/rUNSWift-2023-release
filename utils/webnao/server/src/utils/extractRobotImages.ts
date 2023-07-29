import { Blackboard } from '@common/blackboard';
import { BBox, Point } from '@common/blackboard/definitions/Blackboard';
import { saveTopFrame, saveBottomFrame, IRectangleRegion  } from './image';
import { resolve as resolvePath  } from 'path';

function isSensiblePoint(point?: Point): boolean {
  if (!point) {
    return false;
  }
  return isSensibleCoordinate(point.x) && isSensibleCoordinate(point.y);
}
function isSensibleCoordinate(coord?: number): boolean {
  if (coord === null  || coord === undefined) {
    return false;
  }
  if (coord <= 0 || coord > 10000) {
    return false;
  }
  return true;
}
function rectangleRegionFromBBox(box?: BBox): IRectangleRegion | undefined {
  if (box && box.a && box.b && isSensiblePoint(box.a) && isSensiblePoint(box.b)) {
    return {
      left: box.a.x,
      top: box.a.y,
      width: box.b.x - box.a.x,
      height: box.b.y - box.a.y
    };
  }
  return undefined;
}

export async function robotExtractMiddleware(blackboardBytes: Uint8Array) {
  const bb = Blackboard.decode(blackboardBytes);
  await extractRobotImages(bb, resolvePath(__dirname, '../../.temp/robots'));
}
async function extractRobotImages(bb: Blackboard, folder: string) {
  if (bb.vision?.robots.length) {
    for (let i = 0; i < bb.vision.robots.length; i++) {
      const robotFileName = `${new Date().getTime().toString()}_${i}.png`;
      const robotFilePath = resolvePath(folder, robotFileName);
      const robot = bb.vision.robots[i];
      const regionTop = rectangleRegionFromBBox(robot.topImageCoords);
      if (regionTop) {
        await saveTopFrame(bb, robotFilePath, regionTop);
      }
      const regionBottom = rectangleRegionFromBBox(robot.botImageCoords);
      if (regionBottom) {
        await saveBottomFrame(bb, robotFilePath, regionBottom);
      }
    }
  }
}