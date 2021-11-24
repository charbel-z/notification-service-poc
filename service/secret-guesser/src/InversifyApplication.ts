import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IDENTIFIERS } from "./inversify.identifiers";
import { Counter } from "./guess/Counter";
import { SecretMaker } from "./secret/SecretMaker";

@injectable()
export class InversifyApplication {
  private counter: Counter;
  private secretMaker: SecretMaker;

  public constructor(
    @inject(IDENTIFIERS.EVEN_COUNTER_ID) counter: Counter,
    @inject(IDENTIFIERS.EVEN_SECRET_MAKER_ID) secretMaker: SecretMaker
  ) {
    this.counter = counter;
    this.secretMaker = secretMaker;
  }

  public start(maxGuesses: number): void {
    console.log("Inversify Application Starting...");

    const secret: number = this.secretMaker.generateSecret();

    console.log("The Secret is: " + secret);
    console.log(".");
    console.log("The Guesser is trying to find secret...");

    let guess = -1;
    let count = 0;
    while (guess != secret) {
      if (count >= maxGuesses) {
        console.log("MAX Guesses reached!!!");
        return;
      }
      count++;
      guess = this.counter.next();
      console.log("Guessing: " + guess);
    }

    console.log("FOUND! Secret is " + guess);
  }
}
