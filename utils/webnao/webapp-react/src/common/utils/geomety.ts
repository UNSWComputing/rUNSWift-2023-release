import { BBox, Point } from '../blackboard/definitions/Blackboard';


export interface IRectangleRegion {
  left: number;
  top: number;
  width: number
  height: number
}

export function isSensiblePoint(point?: Point): boolean {
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

export function rectangleRegionFromBBox(box?: BBox): IRectangleRegion | undefined {
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