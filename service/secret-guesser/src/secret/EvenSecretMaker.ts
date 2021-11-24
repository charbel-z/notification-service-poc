import { SecretMaker } from "./SecretMaker";
import { NumberUtils } from "../util/NumberUtils";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class EvenSecretMaker implements SecretMaker {
  private readonly min: number;
  private readonly max: number;

  public constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  generateSecret(): number {
    let secret = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    if (NumberUtils.isOdd(secret)) {
      secret++;
    }
    return secret;
  }
}
