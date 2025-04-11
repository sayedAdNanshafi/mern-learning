"use strict";
// 🔥🔥
// var variable is only function scoped not block scoped
// const and let are both function scoped and block scoped
// functions are block scoped only in strict mode
// scope chain
// scope lookup;
// parent fuctions can't access variables of child functions but child functions can access variables of parent function
// sibling scopes can't have access to each other's variablesl as well
// javascript first looks for variables in current scope and if it doesn't find the variable in current scope only then it looksup in scope chain and if it does find variable in current scope then javascript will not lookup the scope chain
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();*/
// 🔥💖TDZ(temporal dead zone)

// console.log(age);
// console.log(name);
// console.log(job);

// var age = 21;
// let name = "adnan";
// const job = "student";

// console.log(adddecl(1, 2));
// console.log(addexpr(1, 2));
// // console.log(addarrow(1, 2));
// // function declarations can be called before initialization
// function adddecl(a, b) {
//   return a + b;
// }
// // 🚫⛔🔥addexp(function expressions) can not be called before intialization becouse it is simply a const variable in this case and const/let variable can't be called before intialization and if we change it to var then also an error will come becouse var is undefined before intialization
// const addexp = function (a, b) {
//   return a + b;
// };
// arrow functions can't be called before initiolization just like function expressions
// var addarrow = (a, b) => a + b;
// console.log(numproducts);
// if (!numproducts) deleteproducts();

// var numproducts = 10;

// function deleteproducts() {
//   console.log("All products deleted!");
// }

// variables declared with let and const don't create properties on the window object;

// var x = 1;
// const y = 2;
// let z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// 🔥🎃🧧This keyword is a special variable and is  created for every execution context (every function).value of this keyword is not static it depends on how function is called and it is assigned only after function is called.
// This keyword will take value of (points to) owner of method in which this keyword is used. It points to the object that is calling the method.
// 🔥🔥🎃🌹if a function is not attached to any object and it is called (not a method) then in this case this keyword will be undefined(in case of strict mode) and if strict mode is not used then this keyword will point to global object which in the case of browser is window object
// 🎉🔥🔥🌹🎃arrow functions don't have their own this keyword.If this keyword is used in arrow function then it will be this keyword of sourrounding function(parent function) and this is called lexical this keyword
// if a function is called as an event listener then this keyword will point to DOM element to which the handler function is attached
// This keyword will never point to function in which we are using it and it's variable environment
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

// Solution 1
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
// 🔥🔥🎉🧧 primitive data types and objects(reference types) are stored differently in memeory
// javascript engine has two components => call stack and heap
// in call stack functions are executed and in heap objects are stored
// primitive data types are stored in call stack
// 🧧🧧🔥🔥🎃 when a primitive data type is declared let's say a variable is declared then the name of that variable doesn't point to the value of that variable but rather it points to the memory address.😎😎Therefore a variable actually holds a memory address.
// objects are not directly stored in call stack but they are stored in heap
// objects don't hold direct memory address to heap but rather they hold a memory address to call stack.Reference memory address is stored in call stack and this reference memory address holds a value called reference value which is used to refer to object in heap.
// 😎😎 object=>reference address to call stack=>reference address holds a value=>value used as address to object in heap

// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// ///////////////////////////////////////
// // Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
