export declare class Receipt {
    private firstName;
    private lastName;
    private age;
    private phone;
    constructor();
    getFirstName(): string;
    setFirstName(value: string): void;
    getLastName(): string;
    setLastName(value: string): void;
    getAge(): number;
    setAge(value: number): void;
    getPhone(): string;
    setPhone(value: string): void;
    static PersonBuilder: {
        new (): {
            person: Receipt;
        };
    };
}
