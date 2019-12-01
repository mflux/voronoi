import { Vector } from './vector';

/** Orientation of three positions. */
export enum Orientation {
  Colinear = 0,
  Clockwise = 1,
  CounterClockwise = -1,
};

/** Edge composed of two vertices used to compute straight skeletons. */
export type Edge = [Vector, Vector];