export interface Counter {
    getSeed(): number;
    getCount(): number;
    next(): number;
}
