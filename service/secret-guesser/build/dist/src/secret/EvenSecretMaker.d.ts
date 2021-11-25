import { SecretMaker } from "./SecretMaker";
import "reflect-metadata";
export declare class EvenSecretMaker implements SecretMaker {
    private readonly min;
    private readonly max;
    constructor(min: number, max: number);
    generateSecret(): number;
}
