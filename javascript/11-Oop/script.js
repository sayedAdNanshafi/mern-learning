"use strict";
//constructor functions //
// arrow functions can't be used as function constructor becoz it doesn't have its own this keyword
// difference b/w regular function and constructor function is that we call constructor function using new operator
// const Person = function (firstname, birthyear) {
//   // instance properties
//   this.firstname = firstname;
//   this.birthyear = birthyear;
//   //   never do this (don't create method inside of constructor function)
//   // this.calcage = function () {
//   //   console.log(2037 - this.birthyear);
//   // };
// };
// const ady = new Person("ady", 2002);
// console.log(ady);
// when we call a function with new operator then 4 steps happen behind the secenes:
// 1-New empty object {} is created
// 2-function is called and in this function call the this keyword will be set to this newly created empty object
// 3-this newly created object is linked to a prototype
// 4-object that was created in the beginning(empty object {}) is then automatically returned from constructor function but at this point the empty object no longer needs to be empty
// const sarah = new Person("sarah", 2000);
// const jack = new Person("jack", 1990);
// // console.log(sarah, jack);
// const jay = "jay";
// console.log(ady instanceof Person);
// console.log(jay instanceof Person);
// Person.hey = function () {
//   console.log("hey there 👋");
// };
// Person.hey();
// ady.hey();//will give error becoz hey method is not on constructor function's prototype therefore not inherited by ady

// every object that is created by certain constructor function will get access to all the methods and properties that we define on constructors prototype property this  is called prototypal inheritance
// console.log(Person.prototype);
// Person.prototype.calcage = function () {
//   console.log(2037 - this.birthyear);
// };
// ady.calcage();
// sarah.calcage();
// console.log(ady.__proto__); //gives prototype of ady
// console.log(ady.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(ady));
// console.log(Person.prototype.isPrototypeOf(Person));
// Person.prototype is prototype of not Person itself but of objects that will be created by using Person constructor function
// __proto__property on an object is created during 3 phase of creating objects using constructor function as mentioned above and this property is set equal to the prototype property of constructor function
// Person.prototype.species = "Homo sapiens"; //setting property
// console.log(ady.species, sarah.species);
// console.log(ady.hasOwnProperty("firstname"));
// console.log(ady.hasOwnProperty("species"));
//Prototype chain: prototype of ady(or any object created from constructor function) is person.prototype but person.prototype is itself an object and therefore it also has a prototype i'e object.prototype which is usually at top of chain
// like scopechain in prototype chain also when a method or property is not found in an object then javascript looks up in chain
// console.log(ady.__proto__.__proto__); //gives object.prototype
// console.log(Person.prototype.constructor); //reference to constructor function
// console.dir(Person.prototype.constructor);

// const arr = [2, 3, 3, 5, 5, 6, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// don't do this
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector("h1");
// console.dir(h1);
// // DOM elements are behind the scenes objects
// console.dir((x) => x + 1);
// functions are also objects

// coding challenge //
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const bmw = new Car("BMW", 120);
// console.log(bmw);
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// bmw.accelerate();
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// bmw.brake();

// classes //
// classes are functions(special type of functions)
// class expression
// const PersonCl = class {};

// class declaration
// class PersonCl {
//   constructor(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   }
//   calcage() {
//     console.log(2037 - this.birthyear);
//   }
//   greet() {
//     console.log(`Hey! ${this.firstname}`);
//   }
// }
// const jessica = new PersonCl("jessica", 1996);
// console.log(jessica);
// console.log(jessica.__proto__ === PersonCl.prototype);
// jessica.calcage();
// // methods written outside constructor will be on prototype of objects not on objects themselves
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey! ${this.firstname}`);
// // };
// jessica.greet();

// classes are not hoisted
// classes are first-class citizens(i'e we can pass them into functions and also return them from functions)
// classes are executed in strict mode

// getter and setter //
// every object in javascript can have getter and setter property and we call these special properties as accessor properties
// const account = {
//   owner: "adnan",
//   movements: [200, 333, 600, 100],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   // instance methods
//   // methods below will be added to prototype of constructor function
//   calcage() {
//     console.log(2037 - this.birthyear);
//   }
//   greet() {
//     console.log(`Hey! ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthyear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // static method(will not be added to prototype)
//   static hey() {
//     console.log("hey there 👋");
//     console.log(this);
//   }
// }
// const aisha = new PersonCl("aisha shafi", 2012);
// PersonCl.hey();
// console.log(aisha);
// console.log(aisha.age);
// getters and setters used above are treated as properties not methods

// static methods //

// Array.from method doesn't work on arrays directly but only on array constructor(Array) becoz this method is not on array constructor's prototype therefore this is a static method
// Number.parsefloat etc are also static methods becoz they are not available on numbers but only on Number constructor(Number)
// hey method above is also a static method
// to add static method to a class add static keyword in front of function like above

// Object.create //
// we can use object.create to manually set prototype of an object to another object that we want
// const personProto = {
//   calcage() {
//     console.log(2037 - this.birthyear);
//   },
//   init(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   },
// };
// const steven = Object.create(personProto); //creates steven object with prototype personProto
// console.log(steven);
// steven.name = "steven";
// steven.birthyear = 2020;
// console.log(steven);
// steven.calcage();
// console.log(steven.__proto__ === personProto);
// const sarah = Object.create(personProto);
// sarah.init("sarah", 1990);
// sarah.calcage();

// coding challenge //

// class car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new car("ford", 120);
// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUs);
// ford.speedUs = 75;
// console.log(ford);

// // inheritance b/w classes //

// const person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };
// person.prototype.calcage = function () {
//   console.log(2037 - this.birthyear);
// };
// const Student = function (firstname, birthyear, course) {
//   // this.firstname = firstname;
//   // this.birthyear = birthyear;
//   // inherit above properties from person becoz they are just copy of properties already in person
//   person.call(this, firstname, birthyear);

//   this.course = course;
// };
// Student.prototype = Object.create(person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstname} and i study ${this.course}`);
// };
// const mike = new Student("mike", 2000, "computer science");
// console.log(mike);
// mike.introduce();
// mike.calcage();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// coding challenge //

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
// };
// const tesla = new EV("tesla", 120, 100);
// tesla.chargeBattery(50);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// console.log(tesla);

// // child class can overwrite a method of parent class like accelerate method above

// class PersonCl {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   // instance methods
//   // methods below will be added to prototype of constructor function
//   calcage() {
//     console.log(2037 - this.birthyear);
//   }
//   greet() {
//     console.log(`Hey! ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthyear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // static method(will not be added to prototype)
//   static hey() {
//     console.log("hey there 👋");
//     console.log(this);
//   }
// }
// class studentCl extends PersonCl {
//   constructor(fullName, birthyear, course) {
//     // always first call super
//     super(fullName, birthyear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }
//   calcage() {
//     console.log(
//       `I'm ${
//         2037 - this.birthyear
//       } years old but as a student i feel more like ${
//         2037 - this.birthyear + 10
//       }`
//     );
//   }
// }
// const martha = new studentCl("martha jones", 2010, "bsc");
// console.log(martha);
// martha.introduce();
// // martha.calcage();
// const personProto = {
//   calcage() {
//     console.log(2037 - this.birthyear);
//   },
//   init(firstname, birthyear) {
//     this.firstname = firstname;
//     this.birthyear = birthyear;
//   },
// };
// const steven = Object.create(personProto);
// const studentproto = Object.create(personProto);
// studentproto.init = function (firstname, birthyear, course) {
//   personProto.init.call(this, firstname, birthyear);
//   this.course = course;
// };
// studentproto.introduce = function () {
//   console.log(`My name is ${this.firstname} and i study ${this.course}`);
// };
// const jay = Object.create(studentproto);
// jay.init("jay", 2000, "bsc");
// jay.introduce();
// jay.calcage();

// class account {
//   constructor(owner, currency, pin, movements) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _approveloan(val) {
//     return true;
//   }
//   requestloan(val) {
//     if (this._approveloan(val)) {
//       this.deposit(val);
//       console.log(`Loan aprroved`);
//     }
//   }
//   getmovements() {
//     return this._movements;
//   }
// }
// const acc1 = new account("jonas", "USD", 1111);
// acc1.deposit(100);
// acc1.withdraw(50);
// acc1.requestloan(1000);
// console.log(acc1._pin); //we can access pin from outside(in this case) but we should not be able to do this in real world therefore we need data encapsulation
// acc1._approveloan(100); //we should not be able to access this method from outside as well
// console.log(acc1);
// console.log(acc1.getmovements());

// encapsulation //
// public fields
// private fields
// public methods
// private methods
// there is also static version for above(but they are less important)
// class account {
//   // public fields
//   // they will be on instances not on prototype
//   locale = navigator.language;
//   // private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin, movements) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // public methods
//   getmovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   requestloan(val) {
//     if (this.#approveloan(val)) {
//       this.deposit(val);
//       console.log(`Loan aprroved`);
//     }
//   }
//   static helper() {
//     console.log("helper");
//   }
//   // private methods
//   #approveloan(val) {
//     return true;
//   }
// }
// const acc1 = new account("jonas", "USD", 1111);
// acc1.deposit(100);
// acc1.withdraw(50);

// console.log(acc1);
// console.log(acc1.getmovements());
// account.helper();
// console.log(acc1.#movements);//gives error
// console.log(acc1.#pin);//gives error
// console.log(acc1.#approveloan(10));//gives error

// chaining //
// class account {
//   // public fields
//   // they will be on instances not on prototype
//   locale = navigator.language;
//   // private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin, movements) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // public methods
//   getmovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestloan(val) {
//     if (this.#approveloan(val)) {
//       this.deposit(val);
//       console.log(`Loan aprroved`);
//       return this;
//     }
//   }
//   static helper() {
//     console.log("helper");
//   }
//   // private methods
//   #approveloan(val) {
//     return true;
//   }
// }
// const acc1 = new account("jonas", "USD", 1111);
// acc1.deposit(100).deposit(200).withdraw(500).requestloan(1000).withdraw(900);
// console.log(acc1.getmovements());

// coding challenge //
class carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}
class EVcl extends carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    return this;
  }
}
const Rivian = new EVcl("Rivian", 120, 23);
Rivian.accelerate().brake().chargeBattery(40).accelerate();
console.log(Rivian);
// setters and getters are also availabel on instances
