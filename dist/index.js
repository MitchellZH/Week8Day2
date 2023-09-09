"use strict";
console.log('testing');
const favNum = 3;
const students = ['omar', 3, 'sam', 1];
const employes = {
    id: 1,
    name: 'dylan',
    location: 'USA'
};
const myNumOrStr = 1;
function kgToLbs(weight) {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
}
console.log(kgToLbs('90'));
const kgToLbs2 = (weight) => {
    if (typeof weight === "string") {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
};
console.log(kgToLbs2("90"));
const largeShirts = 50;
const smallShirts = 25;
const speed = 5;
const ride = {
    mph: speed !== null && speed !== void 0 ? speed : null
};
ride.mph = 25;
console.log(ride);
class Team {
    constructor(myCity, myName) {
        this.printInfo = () => {
            return `The ${this.name} are from ${this.city}.`;
        };
        this.city = myCity;
        this.name = myName;
    }
}
;
const bulls = new Team('chicago', 'bulls');
console.log(bulls.printInfo());
console.log(bulls instanceof Team);
class Team2 {
    constructor(_id, city, name) {
        this._id = _id;
        this.city = city;
        this.name = name;
        this.printInfo = () => {
            return `The ${this.name} are from ${this.city}.`;
        };
        this.printId = () => {
            return this._id;
        };
    }
}
const lakers = new Team2(0, 'LA', 'Lakers');
console.log(lakers.printInfo());
console.log(lakers.printId());
console.log(lakers.city);
class Team3 {
    constructor(_id, city, name, playerName) {
        this._id = _id;
        this.city = city;
        this.name = name;
        this.playerName = playerName;
        this.printInfo = () => {
            return `${this._id} ${this.city} ${this.name}`;
        };
    }
}
const seahawks = new Team3(1, 'seattle', 'seahawks', 'bobby wagner');
