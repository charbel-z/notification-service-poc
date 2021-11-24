export class NumberUtils {
  public static isEven(number: number): boolean {
    return number % 2 == 0;
  }

  public static isOdd(number: number): boolean {
    return !this.isEven(number);
  }
}
