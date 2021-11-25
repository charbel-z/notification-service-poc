import "reflect-metadata";
import { Counter } from "./guess/Counter";
import { SecretMaker } from "./secret/SecretMaker";
export declare class InversifyApplication {
    private counter;
    private secretMaker;
    constructor(counter: Counter, secretMaker: SecretMaker);
    start(maxGuesses: number): void;
}
