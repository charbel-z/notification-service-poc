import { Counter } from "./Counter";
import "reflect-metadata";
export declare class EvenCounter implements Counter {
    private readonly seed;
    private count;
    constructor(seed: number);
    getCount(): number;
    getSeed(): number;
    next(): number;
}
