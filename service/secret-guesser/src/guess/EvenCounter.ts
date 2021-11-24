import { Counter } from "./Counter";
import { NumberUtils } from "../util/NumberUtils";

import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class EvenCounter implements Counter {
  private readonly seed: number;
  private count: number;

  public constructor(seed: number) {
    this.seed = Math.floor(seed);
    this.count = NumberUtils.isEven(seed) ? seed : seed + 1;
  }

  public getCount(): number {
    return this.count;
  }

  public getSeed(): number {
    return this.seed;
  }

  public next(): number {
    const next = this.count;
    this.count += 2;
    return next;
  }
}
