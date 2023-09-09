// 1. Given the data below, define a type alias for representing users.
type Users = {
  name: string,
  age: number,
  company?: string
}[]
const users: Users = [
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

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type daysOfWeek = ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" )
const secondDay: daysOfWeek = "Tuesday"

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
  constructor(public firstName: string, public lastName: string) {}
  printInfo = () => {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary.
class Employee extends Person {
  constructor(public firstName: string, public lastName: string, public salary: number){
    super(firstName, lastName)
    this.salary = salary
  };
};

const employee = new Employee('Mitchell', 'Hamm', 10000);

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface IAddress {
  street: string,
  city: string,
  zipCode: number
};

interface IEmployee {
  name: string,
  salary: number,
  address: IAddress
};

let newEmployee: IEmployee = {
  name: "Christian Askew",
  salary: 1_000_000,
  address: {
    street: "Thieves st",
    city: "Seattle",
    zipCode: 98101,
  },
};

console.log(employee);
