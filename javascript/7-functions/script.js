// "use strict";
// // Default parameters
// // const bookings = [];
// // const createbooking = function (
// //   flightnum,
// //   numpassengers = 1,
// //   price = 199 * numpassengers
// // ) {
// //   // in ES5
// //   // numpassengers=numpassengers||1
// //   // price=price||199
// //   const booking = {
// //     flightnum,
// //     numpassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };
// // createbooking("LH123");
// // createbooking("LH123", 23, 200);
// // createbooking("LH123", 10);
// // createbooking("LH123", undefined, 1000); //if we want to leave a parameter as default then write undefined at its place
// // const flight = "LH234";
// // const ady = {
// //   name: "Syed Adnan",
// //   passport: 2345473838,
// // };
// // const checkin = function (flightnum, passenger) {
// //   flightnum = "LH99";
// //   passenger.name = "Mr. " + passenger.name;
// //   if (passenger.passport === 2345473838) {
// //     alert("check in");
// //   } else {
// //     alert("Wrong passport!");
// //   }
// // };
// // // checkin(flight, ady);
// // // flight variable remains same even after changing it in function because it is primitive type and it was copied but ady variable was changed because it is object type and it's reference was copied by new variable(✅😎already studied this in javascript underhood)
// // console.log(flight);
// // console.log(ady);
// // const newpassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 1000000000);
// // };
// // newpassport(ady);
// // checkin(flight, ady);

// // functions are treated as values
// // functions are just another type of objects in javascript
// // Higher order function is a function that receives another function as an argument or returns another function and the function that is passed in is called as callback function becaude it will be called later by higher order function

// // const oneword = function (str) {
// //   //   return str.replaceAll(" ", "").toLowerCase();
// //   return str.replace(/ /g, "").toLowerCase();
// // };
// // const upperfirstword = function (str) {
// //   const [first, ...others] = str.split(" ");
// //   return [first.toUpperCase(), ...others].join(" ");
// // };
// // const transformer = function (str, fn) {
// //   console.log(`Original string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);
// //   console.log(`Transformed by: ${fn.name}`);
// //   //  functions can have properties as well
// //   // .name property gives name of function
// // };
// // transformer("Javascript is best!", upperfirstword);
// // transformer("Javascript is best!", oneword);

// // const high5 = function () {
// //   console.log("👋🏻👋");
// // };
// // document.body.addEventListener("click", high5);

// // functions returning functions
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// //  as function greet returns a function itself therefore variable greeterhey is also a function(as it stores return value of function greet which is another function)
// // const greeterhey = greet("Hey!");
// // greeterhey("Adnan");
// // greet("hey")("Adnan");

// // const greet = (greeting) =>
// //   function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // greet("hey")("Adnan");
// // above arrow function can also be written as:
// // const greetarr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// // greetarr("hey")("Adnan");

// // 😎✅call and apply method

// // const indigo = {
// //   airline: "indigo",
// //   iatacode: "LH",
// //   bookings: [],
// //   book(flightnum, name) {
// //     console.log(
// //       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightnum}`
// //     );
// //     this.bookings.push({ flight: `${this.iatacode}${flightnum}`, name });
// //   },
// // };
// // indigo.book(239, "Syed Adnan");
// // indigo.book(635, "Syed Aisha");
// // console.log(indigo);
// // const eurowings = {
// //   airline: "eurowings",
// //   iatacode: "EW",
// //   bookings: [],
// // };
// // const book = indigo.book; //book variable is now a function
// // // book(23, "sarah williams");//This doesn't work
// // // setting manually what this keyword will point to
// // book.call(eurowings, 23, "sarah williams"); //first argument in call method is what we want this keyword to point to
// // book.call(indigo, 40, "jabbar");
// // console.log(eurowings);

// // // Apply method

// // // Apply method does same work as call method but it doesn't receive arguments after this keyword like call method but rather it takes an array of arguments
// // const flightdata = [234, "john cooper"];
// // book.apply(indigo, flightdata);

// // book.call(eurowings, ...flightdata);

// // // 😎👋💖Bind method
// // // Bind method returns new function in which this keyword is always pointing towards  a given object
// // const bookew = book.bind(eurowings); //this is a new function in which this keyword is always pointing towards eurowings
// // const bookIn = book.bind(indigo);
// // bookew(232, "Steve Smith");
// // bookIn(226, "Steve Jobs");
// // // We can preset an argument also by using bind method this is called partial application
// // const bookew23 = book.bind(eurowings, 23);
// // bookew23("jonas");

// // indigo.planes = 100;
// // indigo.buyPlane = function () {
// //   console.log(this);
// //   this.planes++;
// //   console.log(this.planes);
// // };
// // Inside of eventlistener function this keyword points to element to which handler is attached to
// // document
// //   .querySelector(".buy")
// //   .addEventListener("click", indigo.buyPlane.bind(indigo));

// // Partial application
// // const addText = (rate, value) => value + (value * rate) / 100;
// // console.log(addText(10, 200));
// // const addVAT = addText.bind(null, 23); //null(standard) is for this keyword but we can use anything else as well
// // console.log(addVAT(100));
// // // below function is similar as above addVAT function
// // const addTaxRate = function (rate) {
// //   return function (value) {
// //     return value + (value * rate) / 100;
// //   };
// // };
// // const addVAT2 = addTaxRate(23);
// // console.log(addVAT2(100));

// // coding challenge //
// // let z = "";
// // let a;
// // const poll = {
// //   question: "What is your favourite programming language?",
// //   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// //   // This generates [0, 0, 0, 0]. More in the next section 😃
// //   answers: new Array(4).fill(0),
// //   registerNewAnswer() {
// // const x = poll.question;
// // for (const [i, el] of poll.options.entries()) {
// //   z += `${el}\n`;
// // }
// // const r = Number(prompt(`${x}\n${z}\n(Write option number)`));
// // other way of writing above code
// //     const answer = Number(
// //       prompt(
// //         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
// //       )
// //     );
// //     typeof answer === "number" &&
// //       answer < this.answers.length &&
// //       this.answers[answer]++;
// //     console.log(this.answers);
// //     this.displayResults();
// //     this.displayResults("string");
// //   },
// //   displayResults(type = "array") {
// //     if (type === "array") {
// //       console.log(this.answers);
// //     } else if (type === "string") {
// //       console.log(`Poll results are ${this.answers.join(", ")}`);
// //     }
// //   },
// // };
// // poll.registerNewAnswer();

// // document
// //   .querySelector(".poll")
// //   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // Immediately invoked function //

// // function which can be executed only once and then it disappears
// // By closing function inside of parenthesis we have tricked javascript into believing that this function is an expression
// // Immediately invoked function expression
// // (function () {
// //   console.log("This function will run only once");
// // })();
// // We wrote above function and called it
// // (() => console.log("This function will run only once"))();

// // Closures //

// const securebooking = function () {
//   let passengercount = 0;
//   return function () {
//     passengercount++;
//     console.log(`${passengercount} passengers`);
//   };
// };
// const booker = securebooking();
// booker();
// booker();
// booker();
// // ❤🔥❌booker variable is a function which is returned by securebooking function. when securebooking function returns function it's execution is over and if it's execution is over the variable stored in it (passengercount) should no longer be accessible to booker function but as we saw above it's not the case.So why is passengercount variable getting updated if it's stored in function whose execution is over(thrown out of call stack).Now, answer to this question is Closure
// // 🔥❌😎 Any function has access to variable environment of the execution context in which the function was created
// // As we know that booker function was created in the execution context of securebooking therefore it has access to variable environment of securebooking all the time(even after the execution context of securebooking is gone)
// // Closure has priority over scope chain which means javascript will first look into closure to find variable and then into scopechain
// // console.dir(booker);

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// // Re-assigning f
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f(); //here the closure of f is variable environment of function g
// // console.dir(f);
// h();
// f(); //here the closure of f is variable environment of function h
// // console.dir(f);
// // setTimeout(function () {
// //   console.log("Timer");
// // }, 3000);
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} Passengers`);
//     console.log(`There are 3 groups,each with ${perGroup} Passsengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 999; //if scopechain has priority over closure then call back function above will use this perGroup variable rather than the one defined in it's closure(boardPassengers variable environment)
// boardPassengers(99, 3);
// // setTimeout is a call back fuction
// // closure also includes arguments of a function
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
