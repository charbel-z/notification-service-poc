import { suite, test } from "@testdeck/jest";
import { instance, mock, resetCalls, verify, when } from "ts-mockito";
import { InversifyApplication } from "../src/InversifyApplication";
import { Counter } from "../src/guess/Counter";
import { EvenCounter } from "../src/guess/EvenCounter";
import { SecretMaker } from "../src/secret/SecretMaker";
import { EvenSecretMaker } from "../src/secret/EvenSecretMaker";

describe("InversifyApplicationTest", () => {
  @suite
  class Start {
    private mockedCounter: Counter = mock(EvenCounter);
    private mockedSecretMaker: SecretMaker = mock(EvenSecretMaker);

    private counter: Counter = instance(this.mockedCounter);
    private secretMaker: SecretMaker = instance(this.mockedSecretMaker);

    private inversifyApplication: InversifyApplication =
      new InversifyApplication(this.counter, this.secretMaker);

    before() {
      resetCalls(this.mockedCounter);
      resetCalls(this.mockedSecretMaker);
    }

    @test
    should_guess_right_after_two_guesses() {
      // Given
      when(this.mockedSecretMaker.generateSecret()).thenReturn(4);
      when(this.mockedCounter.next()).thenReturn(2, 4);

      // When
      this.inversifyApplication.start(400);

      // Then
      verify(this.mockedSecretMaker.generateSecret()).once();
      verify(this.mockedCounter.next()).times(2);
    }

    @test
    should_guess_right_after_five_guesses() {
      // Given
      when(this.mockedSecretMaker.generateSecret()).thenReturn(10);
      when(this.mockedCounter.next()).thenReturn(2, 4, 6, 8, 10);

      // When
      this.inversifyApplication.start(400);

      // Then
      verify(this.mockedSecretMaker.generateSecret()).once();
      verify(this.mockedCounter.next()).times(5);
    }

    @test
    should_exit_after_max_guesses_reached() {
      when(this.mockedSecretMaker.generateSecret()).thenReturn(10);
      when(this.mockedCounter.next()).thenReturn(2, 4, 6, 8, 10);

      this.inversifyApplication.start(2);

      verify(this.mockedSecretMaker.generateSecret()).once();
      verify(this.mockedCounter.next()).times(2);
    }
  }
});
