export class Customer {
  private firstName: string;
  private lastName: string;
  private age: number;
  private phone: string;

  public constructor() {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
    this.phone = "";
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(value: string): this {
    this.firstName = value;
    return this;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(value: string): this {
    this.lastName = value;
    return this;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(value: number): this {
    this.age = value;
    return this;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(value: string): this {
    this.phone = value;
    return this;
  }
}
