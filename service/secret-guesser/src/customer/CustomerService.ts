import { injectable } from "inversify";
import "reflect-metadata";
import { Customer } from "./Customer";

export class CustomerService {
  public createDefaultCustomer(): Customer {
    return new Customer()
      .setFirstName("John")
      .setLastName("Smith")
      .setAge(37)
      .setPhone("+61403928837");
  }
}
