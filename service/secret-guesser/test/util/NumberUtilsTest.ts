import { suite, test } from "@testdeck/jest";
import { NumberUtils } from "../../src/util/NumberUtils";

describe("NumberUtilsTest", () => {
  @suite
  class IsEven {
    @test
    should_return_true_on_even_number() {
      // Given
      const input = 2;

      // When
      const actualResult: boolean = NumberUtils.isEven(input);

      // Then
      expect(actualResult).toBeTruthy();
    }

    @test
    should_return_false_on_odd_number() {
      // Given
      const input = 5;

      // When
      const actualResult: boolean = NumberUtils.isEven(input);

      // Then
      expect(actualResult).toBeFalsy();
    }
  }

  @suite
  class IsOdd {
    @test
    should_return_true_on_odd_number() {
      const input = 1;

      const actualResult: boolean = NumberUtils.isOdd(input);

      expect(actualResult).toBeTruthy();
    }

    @test
    should_return_false_on_even_number() {
      const input = 2;

      const actualResult: boolean = NumberUtils.isOdd(input);

      expect(actualResult).toBeFalsy();
    }
  }
});
