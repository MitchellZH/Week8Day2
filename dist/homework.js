"use strict";
const users = [
    {
        name: "Shoha Tsuchida",
        age: 99,
        company: "Coding Temple",
    },
    {
        name: "Dylan Katina",
        age: 99,
    },
];
console.log(users);
const secondDay = "Tuesday";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printInfo = () => {
            return `Hello ${this.firstName} ${this.lastName}`;
        };
    }
}
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.salary = salary;
    }
    ;
}
;
const employee = new Employee('Mitchell', 'Hamm', 10000);
;
;
let newEmployee = {
    name: "Christian Askew",
    salary: 1000000,
    address: {
        street: "Thieves st",
        city: "Seattle",
        zipCode: 98101,
    },
};
console.log(employee);
