import { getHexCoordinates, HexCoordinate } from "./hex";
import { easing } from "./easing";

const abs = Math.abs;
const SQRT3_OVER_2 = Math.sqrt(3) / 2;
const EDGE = 17;

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

export interface TransformConfig {
  screenW: number;
  screenH: number;
  sphereR: number;
  hexR: number;
  scrollX: number;
  scrollY: number;
}

interface PolarCoordinate {
  radius: number;
  angle: number;
}

interface CartesianCoordinate {
  x: number;
  y: number;
}

interface ProjectedCoordinate {
  radius: number;
  depth: number;
  angle: number;
}

const coordinates = getHexCoordinates();

const polarFromCartesian = (x: number, y: number): PolarCoordinate => {
  const radius = Math.sqrt(x * x + y * y);
  const angle = Math.atan2(y, x);
  return { radius, angle };
};

const cartesianFromPolar = (radius: number, angle: number): CartesianCoordinate => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle),
});

const sphereProject = (radius: number, angle: number, sphereR: number): ProjectedCoordinate => {
  const theta = radius / sphereR;
  let projectedRadius = radius;
  let depth = easing.easeInOutCubic(1, 1, -0.5, 1);

  if (theta < Math.PI / 2) {
    const factor = theta / (Math.PI / 2);
    projectedRadius = radius * easing.swing(factor, 1.5, -0.5, 1);
    depth = easing.easeInOutCubic(factor, 1, -0.5, 1);
  }

  return { radius: projectedRadius, depth, angle };
};

const adjustPosition = (value: number, screenLimit: number): number => {
  if (value < -screenLimit + 2 * EDGE) {
    return value + easing.easeInSine(screenLimit - abs(value) - 2 * EDGE, 0, 6, 2 * EDGE);
  }
  if (value > screenLimit - 2 * EDGE) {
    return value + easing.easeInSine(screenLimit - abs(value) - 2 * EDGE, 0, -6, 2 * EDGE);
  }
  return value;
};

const calculateScale = (x: number, y: number, depth: number, screenW: number, screenH: number): number => {
  if (abs(x) > screenW / 2 - EDGE || abs(y) > screenH / 2 - EDGE) {
    return depth * 0.4;
  }

  if (abs(x) > screenW / 2 - 2 * EDGE && abs(y) > screenH / 2 - 2 * EDGE) {
    const scaleX = easing.easeInOutSine(screenW / 2 - abs(x) - EDGE, 0.4, 0.6, EDGE);
    const scaleY = easing.easeInOutSine(screenH / 2 - abs(y) - EDGE, 0.3, 0.7, EDGE);
    return depth * Math.min(scaleX, scaleY);
  }

  if (abs(x) > screenW / 2 - 2 * EDGE) {
    return depth * easing.easeOutSine(screenW / 2 - abs(x) - EDGE, 0.4, 0.6, EDGE);
  }

  if (abs(y) > screenH / 2 - 2 * EDGE) {
    return depth * easing.easeOutSine(screenH / 2 - abs(y) - EDGE, 0.4, 0.6, EDGE);
  }

  return depth;
};

export const getTransform = (index: number, config: TransformConfig): Transform | null => {
  const { screenW, screenH, sphereR, hexR, scrollX, scrollY } = config;
  const coord = coordinates[index];

  if (!coord) {
    return null;
  }

  const hexCartesian: CartesianCoordinate = {
    x: (coord.x / 2 + coord.y) * hexR + scrollX,
    y: SQRT3_OVER_2 * coord.x * hexR + scrollY,
  };

  const polar = polarFromCartesian(hexCartesian.x, hexCartesian.y);
  const projected = sphereProject(polar.radius, polar.angle, sphereR);
  let { x, y } = cartesianFromPolar(projected.radius, projected.angle);

  x = Math.round(x * 10) / 10;
  y = (Math.round(y * 10) / 10) * 1.14;

  const depth = projected.depth;
  const scale = calculateScale(x, y, depth, screenW, screenH);

  x = adjustPosition(x, screenW / 2);
  y = adjustPosition(y, screenH / 2);

  return { x, y, scale };
};
