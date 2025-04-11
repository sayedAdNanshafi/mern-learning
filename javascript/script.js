"use strict";
// function logger() {
//   console.log("My name is Adnan");
// }
// logger();
// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4,0));
// const x = fruitProcessor(4, 0);
// console.log(x);
// const calcage=function(birthyear){
//   return 2024-birthyear;
// }
// const age=calcage(2002);
// console.log(age);
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// const calcAverage=(a,b,c)=>(a+b+c)/3;
// const scoreDolphins=calcAverage(44,23,71);
// const scoreKoalas=calcAverage(65,54,49);
// function checkWinner(avgDolphins,avgKoalas){
//     if(avgKoalas>avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }else if(avgDolphins>avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }else {
//         console.log(`nobody wins`);
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);
// const ady = ["adnan", "shafi", 21, "student"];
// const ady1 = {
//   firstname: "adnan",
//   lastname: "shafi",
//   birthyear: 2002,
//   job: "student",
//   friends: ["a", "b", "c"],
//   hasDriversLicense: false,
//   calcage: function (birthyear) {
//     return 2024 - this.birthyear;
//   },
//   getSummary: function () {
//     return `${this.firstname} is ${this.calcage()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };
// console.log(ady1);
// console.log(ady1.firstname);
// console.log(ady1["firstname"]);
// const namekey = "name";
// console.log(ady1["first" + namekey]);
// console.log(ady1["last" + namekey]);
// ady1.location = "india";
// ady1["snap"] = "ady";
// console.log(ady1);
// console.log(
//   `${ady1.firstname} has ${ady1.friends.length} friends, and his best friend is called ${ady1.friends[0]}`
// );
// const a = ady1.calcage();
// console.log(a);
// console.log(ady1.getSummary());
// const y = ["adnan", "shafi", 21, true];
// let b = [];
// for (let i = 0; i < y.length; i++) {
//   b.push(typeof y[i]);
// }
// console.log(b);
// for (let i = 1; i < 4; i++) {
//   console.log(`exercise ${i}`);
//   for (let i = 1; i < 6; i++) {
//     console.log(`${i}`);
//   }
// }
// let i = Math.trunc(Math.random() * 6) + 1;
// console.log(i);
// while (i != 6) {
//   console.log(i);
//   i = Math.trunc(Math.random() * 6) + 1;
// }

///// guess my number /////
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
// let score = 20;
// let highscore = 0;
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess ").value);
//   if (!guess) document.querySelector(".message").textContent = "⛔ No Number";
//   else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "🎉 Correct Number";
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (highscore < score) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🔥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "🔥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".guess ").value = "";
// });

//// modal project ////
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener("click", openModal);
// }
// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

//// pig game ////

// let current = 0;
// let score = [0, 0];
// let currentPlayer = 0;

// const dice = document.querySelector(".dice");
// const btnRoll = document.querySelector(".btn--roll");
// const score0 = document.querySelector("#score--0");
// const score1 = document.querySelector("#score--1");
// const btnHold = document.querySelector(".btn--hold");
// const btnNew = document.querySelector(".btn--new");
// const player0 = document.querySelector(".player--0");
// const player1 = document.querySelector(".player--1");
// let playing = true;
// const x = function () {
//   current = 0;
//   document.querySelector(`#current--${currentPlayer}`).textContent = current;
//   document
//     .querySelector(`.player--${currentPlayer}`)
//     .classList.remove("player--active");
//   currentPlayer = currentPlayer === 0 ? 1 : 0;
//   document
//     .querySelector(`.player--${currentPlayer}`)
//     .classList.add("player--active");
// };
// dice.classList.add("hidden");
// score0.textContent = 0;
// score1.textContent = 0;
// btnRoll.addEventListener("click", function () {
//   if (playing) {
//     const number = Math.trunc(Math.random() * 6) + 1;
//     dice.src = `dice-${number}.png`;
//     dice.classList.remove("hidden");
//     if (number !== 1) {
//       current += number;
//       document.querySelector(`#current--${currentPlayer}`).textContent =
//         current;
//     } else {
//       x();
//     }
//   }
// });
// btnHold.addEventListener("click", function () {
//   score[currentPlayer] += current;
//   document.querySelector(`#score--${currentPlayer}`).textContent =
//     score[currentPlayer];
//   if (score[currentPlayer] >= 20) {
//     document
//       .querySelector(`.player--${currentPlayer}`)
//       .classList.add("player--winner");
//     document
//       .querySelector(`.player--${currentPlayer}`)
//       .classList.remove("player--active");
//     current = 0;
//     document.querySelector(`#current--${currentPlayer}`).textContent = current;
//     dice.classList.add("hidden");
//     playing = false;
//   } else {
//     x();
//   }
// });
// btnNew.addEventListener("click", function () {
//   playing = true;
//   current = 0;
//   currentPlayer = 0;
//   score[0] = 0;
//   score[1] = 0;
//   score0.textContent = 0;
//   score1.textContent = 0;
//   player0.classList.remove("player--winner");
//   player1.classList.remove("player--winner");
//   player0.classList.add("player--active");
//   player1.classList.remove("player--active");
//   dice.classList.add("hidden");
// });

//// data structures ////
// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// // const aa = [1, 2, 3];
// // let [x, y] = aa;
// // console.log(x, y);
// // [x, y] = [y, x];
// // console.log(x, y);
// // const obj = { name: "adnan", age: 21, birthyear: 2002 };
// // const { name, birthyear } = obj;
// // console.log(name,birthyear);
// // const x = "ady";
// // console.log(...x);

// // coding challenge //
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// // console.log(players1,players2);
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// // console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1,draw,team2);
// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(players.length);
// };
// // printGoals(...allPlayers);
// console.log(
//   (team1 > team2 && `${game.team2}`) || (team1 < team2 && `${game.team1}`)
// );
// for (const [i,j] of players1.entries()) {
//   console.log(i+1,j);
// }
// console.log(Object.entries(restaurant.openingHours));
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }
// let sum = 0;
// for (const el of Object.values(game.odds)) {
//   sum += el;
// }
// console.log(sum);
// console.log(sum / Object.values(game.odds).length);
// for (const [i, el] of Object.entries(game.odds)) {
//   console.log(`odd of ${i === "x" ? "draw" : `victory ${game[i]}`}: ${el}`);
// }
// const scorers = {};
// for (const el of game.scored) {
//   scorers[el]?scorers[el]++:scorers[el]=1;
// }
// console.log(scorers);

/// coding challenge ///
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// const arr = [...new Set(gameEvents.values())];
// console.log(arr);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [i, el] of gameEvents) {
//   i <= 45
//     ? console.log(`[first half] ${i}:${el}`)
//     : console.log(`[second half] ${i}:${el}`);
// }
/// coding challenge ///

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const newtext = text.split("\n");
//   for (const [i, el] of newtext.entries()) {
//     const [first, second] = el.toLowerCase().trim().split("_");
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output.padEnd(20, " ") + "✅".repeat(i + 1));
//   }

// });

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const arr = flights.split("+");
// for (const el of arr) {
//   const newarr = el.split(";");
//   const [a, b, c, d] = newarr;
//   const x = a.replace("_", " ");
//   const output=` ${
//   x.includes("Delayed") ? `🛑${x}` : `${x}`
// } ${b.slice(0, 3).toUpperCase()} ${c
//   .slice(0, 3)
//   .toUpperCase()} (${d.replace(":", "h")})`
//   console.log(output.padStart(36));
// }

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   displayResults(type) {
//     if (typeof type === "object") {
//       console.log(type);
//     } else if (typeof type == "string") {
//       console.log(`Poll Results are ${type}`);
//     }
//   },
//   registerNewAnswer() {
//     const num = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")} \n(write option number)`
//       )
//     );
//     if (num >= 0 && num < this.answers.length && typeof num === "number") {
//       this.answers[num]++;
//     }
//     this.displayResults(this.answers);
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// working with arrays //
// coding challenge //
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliacopy = dogsJulia.slice();
//   dogsJuliacopy.splice(0, 1);
//   dogsJuliacopy.splice(-2);
//   const alldogs = dogsJuliacopy.concat(dogsKate);
//   alldogs.forEach(function (age, i) {
//     const type = age > 3 ? `an adult and is ${age} years old` : "still a puppy";
//     console.log(`Dog number ${i + 1} is ${type}`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     "2019-11-18T21:31:17.178Z",
//     "2019-12-23T07:42:02.383Z",
//     "2020-01-28T09:15:04.904Z",
//     "2020-04-01T10:17:24.185Z",
//     "2020-05-08T14:11:59.604Z",
//     "2020-05-27T17:01:17.194Z",
//     "2020-07-11T23:36:17.929Z",
//     "2020-07-12T10:51:36.790Z",
//   ],
//   currency: "EUR",
//   locale: "pt-PT", // de-DE
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     "2019-11-01T13:15:33.035Z",
//     "2019-11-30T09:48:16.867Z",
//     "2019-12-25T06:04:23.907Z",
//     "2020-01-25T14:18:46.235Z",
//     "2020-02-05T16:33:06.386Z",
//     "2020-04-10T14:43:26.374Z",
//     "2020-06-25T18:49:59.371Z",
//     "2020-07-26T12:01:20.894Z",
//   ],
//   currency: "USD",
//   locale: "en-US",
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// // Functions

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = "";

//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((deposit) => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount;

// btnLogin.addEventListener("click", function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = "";

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = Math.floor(inputLoanAmount.value);

//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     // Add movement
//     currentAccount.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = "";
// });

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = "";
// });

// let sorted = false;
// btnSort.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(navigator.language);

// advanced dom //

///////////////////////////////////////
// Modal window

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// const person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };
// const ady = new person("adnan", 2002);
// console.log(ady);
// console.log(ady instanceof person);
// person.prototype.calcage = function () {
//   console.log(2024 - this.birthyear);
// };
// ady.calcage();
// console.log(ady.__proto__ === person.prototype);
// console.log(person.prototype);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake=function(){
//   this.speed-=5;
//   console.log(this.speed);
// }
// const bmw = new Car("bmw", 120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

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
//   get speedUS() {
//     return this.speed /= 1.6;

//   }
//   set speedUS(speed) {
//     this.speed=speed*1.6

//   }
// }
// const ford = new car("ford", 120);
// // ford.accelerate();
// // ford.brake();
// ford.speedUS = 100;
// console.log(ford);

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const EV = function (make, speed, charge) {
//   car.call(this, make, speed);
//   this.charge = charge;
// };
// car.prototype.accelerate = function () {
//   this.speed += 20;
// };
// EV.prototype = Object.create(car.prototype);
// EV.prototype.constructor = Ev;
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed} has ${this.charge}% charge`);
// };
// const audi = new EV("audi", 100, 100);
// audi.chargeBattery(50);
// audi.accelerate();
// console.log(audi);

// class account {
//   locale = navigator.language;
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//   }
//   #approveloan(val) {
//     this.#movements = val;
//     return true;
//   }
// }
// const ady = new account("adnan", "rs", 1111);

// console.log(ady);

// prettier-ignore
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector(".form");
// const containerWorkouts = document.querySelector(".workouts");
// const inputType = document.querySelector(".form__input--type");
// const inputDistance = document.querySelector(".form__input--distance");
// const inputDuration = document.querySelector(".form__input--duration");
// const inputCadence = document.querySelector(".form__input--cadence");
// const inputElevation = document.querySelector(".form__input--elevation");
// let map, mapEvent;

// class App {
//   #map;
//   #mapEvent;
//   constructor() {
//     this._getPosition();
//     form.addEventListener("submit", this._newWorkout.bind(this));
//   }
//   _getPosition() {
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert("could not get your position");
//         }
//       );
//   }
//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//     const coords = [latitude, longitude];
//     this.#map = L.map("map").setView(coords, 13);
//     L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     this.#map.on("click", this._showForm.bind(this));
//   }
//   _showForm(mapE) {
//     mapEvent = mapE;
//     form.classList.remove("hidden");
//     inputDistance.focus();
//   }
//   _toggleElevationField() {}
//   _newWorkout(e) {
//     e.preventDefault();
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         "";
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxwidth: 250,
//           minwidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: "running-popup",
//         })
//       )
//       .openPopup();
//   }
// }
// const app = new App();

// inputType.addEventListener("change", function () {
//   inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
//   inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
// });

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector(".countries");
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
// };
// const renderCountry = function (data, className = "") {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src='${data.flags.png}' />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(+data.population / 1000).toFixed(
//       1
//     )} people</p>
//     <p class="country__row"><span>💰</span>${data.currencies.name}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
///////////////////////////////////////

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/alpha/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     // console.log(request.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const [...neighbour] = data.borders?.[0];
//     console.log(neighbour.join(""));

//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://restcountries.com/v3.1/alpha/${neighbour.join("")}`
//     );
//     request2.send();
//     request2.addEventListener("load", function () {
//       // console.log(this.responseText);
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// // getCountry("ind");
// getCountry("usa");

// promises and fetch api //
// const request = fetch(`https://restcountries.com/v3.1/alpha/ind`);
// console.log(request);
// const getJson = function (url, errorMsg = "something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   getJson(
//     `https://restcountries.com/v3.1/alpha/${country}`,
//     "country not found"
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//       console.log(data);
//       const [...neigh] = data[0].borders[0];
//       const neighbour = neigh.join("");
//       if (!neighbour) throw new Error("neighbour not found");
//       return getJson(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "country not found"
//       );
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       renderError(`Oops!
//     something went wrong. ${err.message}
//     Try Again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener("click", function () {
//   getCountryData("aus");
// });
// // getCountryData("elajlkd");

// const WhereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=312041989572572291810x124563`
//   )
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.country}`);
//       return fetch(
//         `https://restcountries.com/v3.1/alpha/${data.country.slice(0, 3)}`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error("country not found");
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => `oops!${err.message}`);
// };
// WhereAmI("52.508", "13.381");
// WhereAmI("19.037", "72.873");
// WhereAmI("-33.933", "18.474");

// console.log("test start");
// setTimeout(() => console.log("0 sec timer"));
// Promise.resolve("promise resolved").then((res) => console.log(res));
// console.log("test end");

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) resolve("you won!");
//     else reject(new Error("you lost your money"));
//   }, 2000);
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log("i waited 1 sec");
//     return wait(1);
//   })
//   .then(() => console.log("i waited 2 sec"));
// Promise.resolve("abc").then((res) => console.log(res));
// Promise.reject("abc").catch((err) => console.error(err));

// const loc = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// loc()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// const WhereAmI = function (lat, lng) {
//   loc()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=312041989572572291810x124563`
//       );
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.country}`);
//       return fetch(
//         `https://restcountries.com/v3.1/alpha/${data.country.slice(0, 3)}`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error("country not found");
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => `oops!${err.message}`);
// };
// btn.addEventListener("click", WhereAmI);
// const img = document.createElement("img");
// let image;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       document.querySelector(".images").append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("image failed to load"));
//     });
//   });
// };
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// createImage("img/img-1.jpg")
//   .then((img) => {
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     image.style.display = "";
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = "none";
//     return createImage("img/img-.jpg");
//   })
//   .then((img) => {
//     image.style.display = "";
//     image = img;
//     return wait(2);
//   })
//   .then(() => (image.style.display = "none"))
//   .catch((err) => console.error(err));

// const WhereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
//     console.log(res);
//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.log(err.message);
//     renderError(`something went wrong ${err.message}`);
//   }
// };
// WhereAmI("ind");
// console.log("a");
// const hey = async function () {
//   const a = await "hey";
//   console.log(a);
// };
// hey();
// console.log("b");

// const abc = async function () {
//   return "hey how are you!";
// };
// abc().then((a) => console.log(a));

// (async function () {
//   const a = await WhereAmI();
//   console.log(a);
// })();

// const getJson = function (url, errorMsg = "something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJson(`https://restcountries.com/v3.1/alpha/${c1}`);
// const [data2] = await getJson(`https://restcountries.com/v3.1/alpha/${c2}`);
// const [data3] = await getJson(`https://restcountries.com/v3.1/alpha/${c3}`);
// console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
//     const data = Promise.all([
//       getJson(`https://restcountries.com/v3.1/alpha/${c1}`),
//       getJson(`https://restcountries.com/v3.1/alpha/${c2}`),
//       getJson(`https://restcountries.com/v3.1/alpha/${c3}`),
//     ]);
//     console.log(data);
//   } catch (err) {}
// };
// get3Countries("ind", "pak", "por");
// const getJson = function (url, errorMsg = "something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// (async function () {
//   Promise.race([
//     getJson("https://restcountries.com/v3.1/alpha/ind"),
//     getJson("https://restcountries.com/v3.1/alpha/pak"),
//     getJson("https://restcountries.com/v3.1/alpha/por"),
//   ]).then((res) => console.log(res[0]));
// })();

// const timeOut = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("request took too long!"));
//     }, sec * 1000);
//   });
// };
// Promise.race([
//   getJson("https://restcountries.com/v3.1/alpha/ind"),
//   timeOut(0.0001),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.any([
//   Promise.reject("success"),
//   Promise.reject("error"),
//   Promise.resolve("another success"),
// ]).then((res) => console.log(res));
// const img = document.createElement("img");
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       document.querySelector(".images").append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("image failed to load"));
//     });
//   });
// };
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const loadNPause = async function () {
//   try {
//     let img = await createImage("img/img-1.jpg");

//     await wait(2);
//     img.style.display = "none";
//     img = await createImage("img/img-2.jpg");
//     img.style.display = "";

//     await wait(2);
//     img.style.display = "none";
//     img = await createImage("img/img-3.jpg");
// img.style.display = "";

// await wait(2);
//     img.style.display = "none";
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// // loadNPause();
// const loadAll = async function (imageArr) {
//   const imgs = imageArr.map(async (el) => await createImage(el));
//   console.log(imgs);
//   const res = await Promise.all(imgs);
//   console.log(res);
//   res.forEach((el) => el.classList.add("parallel"));
// };
// loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

// importing module
// import * as shoppingCart from "./shoppingCart.js";
// console.log("importing module");
// shoppingCart.addToCart("bread", 5);
// shoppingCart.addToCart("pizza", 5);
// console.log(shoppingCart.totalPrice, shoppingCart.tq);
// console.log(shoppingCart.cart);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// // import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash-es";
// const state = {
//   cart: [
//     { product: "bread", quantity: 4 },
//     { product: "pizza", quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };
// const clone = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(clone);
// if (module.hot) {
//   module.hot.accept();
// }

// let i=Math.trunc(Math.random()*6+1);
// while (i !== 6) {
//   console.log(i);
//   i = Math.trunc(Math.random() * 6 + 1);
//   if (i === 6) console.log("loop ended");
// }
// let score=20
// let highscore = 0;
// let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);
// const btnCheck = document.querySelector(".check");
// const btnAgain = document.querySelector(".again");

// btnCheck.addEventListener("click", function () {
//   const inputValue = Number(document.querySelector(".guess").value);
//   if (!inputValue) {
//     document.querySelector(".message").textContent = "⛔No Number";
//   }
//   if (score > 1 && inputValue) {
//     if (inputValue !== randomNumber) {
//       score--;
//       document.querySelector(".score").textContent = score;
//       document.querySelector(".message").textContent =
//         inputValue < randomNumber ? "too low" : "too high";
//     } else {
//       if (score > highscore) {
//         highscore = score;
//       }
//       document.querySelector(".highscore").textContent = highscore;
//       document.body.style.backgroundColor = "#60b347";
//       document.querySelector(".number").textContent = randomNumber;
//       document.querySelector(".message").textContent = "correct number";
//       document.querySelector(".number").style.width = "30rem";
//     }
//   } else {
//     document.querySelector(".message").textContent = "You lost the game!🎉";
//     document.querySelector(".score").textContent = 0;
//   }
// });
// btnAgain.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".guess").value = "";
//   score = 20;
//   document.querySelector(".score").textContent = score;
//   randomNumber = Math.trunc(Math.random() * 20 + 1);
//   console.log(randomNumber);
// });
// const modal=document.querySelector('.modal')
// const btns = document.querySelectorAll(".show-modal");
// const btnclose = document.querySelector(".close-modal");
// const overlay = document.querySelector(".overlay");
// const hide = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// const showmodal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// btns.forEach((btn) => {
//   btn.addEventListener("click", showmodal);
// });
// overlay.addEventListener("click", hide);
// btnclose.addEventListener("click", hide);
// document.addEventListener("keydown", function (e) {
//   console.log(e);
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     hide();
//   }
// });

// const score=[0,0];
// let currentScore = 0;
// let currentPlayer = 0;
// const player0 = document.querySelector(".player--0");
// const player1 = document.querySelector(".player--1");
// const diceImg = document.querySelector(".dice");
// const btnroll = document.querySelector(".btn--roll");
// const btnHold = document.querySelector(".btn--hold");
// const btnNew = document.querySelector(".btn--new");
// let playing = true;
// const switchPlayer = function () {
//   currentScore = 0;
//   document.querySelector(`#current--${currentPlayer}`).textContent =
//     currentScore;
//   player0.classList.toggle("player--active");
//   player1.classList.toggle("player--active");
//   currentPlayer = currentPlayer === 0 ? 1 : 0;
// };
// diceImg.classList.add("hidden");
// document.querySelector("#score--0").textContent = 0;
// document.querySelector("#score--1").textContent = 0;
// btnroll.addEventListener("click", function () {
//   if (playing) {
//     let number = Math.trunc(Math.random() * 6) + 1;
//     diceImg.src = `dice-${number}.png`;
//     diceImg.classList.remove("hidden");
//     if (number !== 1) {
//       currentScore += number;
//       document.querySelector(`#current--${currentPlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnHold.addEventListener("click", function () {
//   if (playing) {
//     score[currentPlayer] += currentScore;
//     document.getElementById(`score--${currentPlayer}`).textContent =
//       score[currentPlayer];
//     if (score[currentPlayer] >= 100) {
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.add("player--winner");
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.remove("player--active");
//       document.querySelector(`#current--${currentPlayer}`).textContent = 0;
//       diceImg.classList.add("hidden");
//       playing = false;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnNew.addEventListener("click", function () {
//   score[0] = 0;
//   score[1] = 0;
//   currentScore = 0;
//   currentPlayer = 0;
//   playing = true;
//   document.getElementById(`score--0`).textContent = 0;
//   document.getElementById(`score--1`).textContent = 0;
//   document.querySelector(`.player--0`).classList.remove("player--winner");
//   document.querySelector(`.player--1`).classList.remove("player--winner");
//   document.querySelector(`.player--0`).classList.add("player--active");
//   document.querySelector(`.player--1`).classList.remove("player--active");
//   document.querySelector(`#current--0`).textContent = 0;
//   document.querySelector(`#current--1`).textContent = 0;
//   diceImg.classList.remove("hidden");
// });

'use strict';

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// const { openingHours, name, location, menu = "abc" } = restaurant;
// const {name, ...rest} = restaurant;
// console.log(name,rest);
// console.log(name, location, menu);
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const [a, , c,d=2] = [1, 2, 3];
// console.log(a, c,d);
// const [first,,second]=restaurant.starterMenu;
// console.log(first,second);
// console.log(restaurant.order(1,2))
// const [starter,main]=restaurant.order(1,2)
// console.log(`you ordered pizza with ${starter} and ${main}`);
// const nested=[1,2,[3,4]]
// const [i,,[j,k]]=nested;
// console.log(i,j,k);

// console.log(...[1,2,3]);
// console.log([...'abc']);
// const newRestaurant={...restaurant,founder:"ady"}
// console.log(newRestaurant);
// const x = 0;
// const y=3||'a'
// const a = x && undefined;
// const b = x || undefined;
// console.log(a, b,y);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// const players1Final = [...players1, "thiago", "coutinho", "perisic"];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`${players.length} goals scored`);
// };
// // printGoals("a", "b", "c");
// const win = (team1 > team2 && "team2 wins") || (team1 < team2 && "team1 wins");
// console.log(win);
// for (const [index,name] of allPlayers.entries()) {

//   console.log(index+1,name);
// }
// console.log(restaurant.openingHours.mon?.open||'not open');
// for (const [key, value] of Object.entries(restaurant)) {
//   console.log(key, value);
// }

// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}:${el}`);
// }
// let sum = 0;
// for (const i of Object.values(game.odds)) {
//   sum += i;
// }
// console.log(sum / Object.values(game.odds).length);

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(
//     `odds of ${key === "x" ? "draw" : `victory ${game[key]}`}:${value}`
//   );
// }
// const scorers = {};

// for (const el of game.scored) {
//   scorers[el] = !scorers[el] ? 1 : scorers[el] + 1;
// }
// console.log(scorers);

// const x = new Set([1, 1, 1, 2, 4]);
// x.add(30);
// x.add("adnan");
// x.delete("adnan");
// // x.clear() deletes all elements from set
// console.log(x);
// console.log(x.size);
// console.log(x.has(2));
// for (const el of x) {
//   console.log(el);
// }
// console.log(new Set('adnan').size);
// const y = new Map();
// y.set(true, "adnan");
// y.set(1, "abc");
// console.log(y.set(2, "def"));
// y.set("x", "y").set("y", "z").set(9, 10);
// console.log(y);
// console.log( y.get(1))
// const n=new Map([['a','b'],['b','c'],['c','d'],['d','e']])
// console.log(n);
// const z=new Map(Object.entries(restaurant))
// // console.log(z);
// for (const [key,value] of n) {
//   console.log(key,value);
// }

// const eventsunique = new Set();
// for (const [key, value] of gameEvents) {
//   eventsunique.add(value);
// }
// console.log(eventsunique);
// const events = [...eventsunique];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `an event happened, on average,every ${90 / gameEvents.size} minutes`
// );
// for (const [key, value] of gameEvents) {
//   console.log(
//     (key <= 45 && `[First Half] ${key}:${value}`) ||
//       (key >= 45 && `[Second Half] ${key}:${value}`)
//   );
// }
// console.log("adnan".replace("a", "z").replace("d", ""));
// console.log("adnan".replaceAll("a", "z"));
// console.log("adnan".replace(/a/g, "z"));
// console.log("ady".includes("z"));
// console.log("adnan".startsWith("d"));
// console.log("adnan".endsWith("n"));
// console.log("a+d+n+a+n".split("+").join(""));
// const name = ['mr.','syed', 'adnan'.toUpperCase()].join(' ')
// console.log(name);
// const capitalize = function (n) {
//   const NameArr = n.split(" ");
//   let correctName = [];
//   for (const el of NameArr) {
//     correctName.push(el.replace(el[0], el[0].toUpperCase()));
//   }
//   console.log(correctName.join(" "));
// };
// capitalize("adnan shafi ady");
// console.log("adnan".replace("a", "a".toUpperCase()));
// console.log('adnan'.padEnd(10,'n'));
// const hide = function (num) {
//   const str = num + "";
//   console.log(str.slice(-4).padStart(str.length, "*"));
// };
// hide(12345694784849);
// console.log("adnan".repeat(2));
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   // const arr=[]
//   for (const [i, el] of rows.entries()) {
//     const [first, second] = el.trim().toLowerCase().split("_");

//     const output = first + second.replace(second[0], second[0].toUpperCase());
//     console.log(output.padEnd(20, " ") + "✅".repeat(i + 1));
//   }
// });
// const a = flights.split("+");
// for (const el of a) {
//   const x = el.replace("_", "").toUpperCase().split(";");
//   console.log(x);
//   if (x.join().includes("DELAYED")) {
//     console.log(
//       `🛑 ${x[0].replace("_", " ")} from ${x[1].slice(0, 3)} to  ${x[2].slice(
//         0,
//         3
//       )} (${x[3].replace(":", "h")})`
//     );
//   } else {
//     console.log(
//       `${x[0]} from ${x[1].slice(0, 3)} to  ${x[2].slice(0, 3)} (${x[3].replace(
//         ":",
//         "h"
//       )})`
//     );
//   }
// }
// const sum = function (a, b = 1 + a) {
//   console.log(a + b);
// };
// sum(1);
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("hey")("ady")
// (function () {
//   console.log("hey this is an IIFE");
// })();
// (() => console.log("hi,this is also an IIFE"))();
// (function () {
//   const h1 = document.querySelector("h1");
//   h1.style.color = "red";
//   h1.addEventListener("click", function () {
//     h1.style.color = "blue";
//   });
// })();
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   displayResults(type) {
//     if (typeof type === "string") {
//       console.log(`poll results are ${type}`);
//     } else {
//       console.log(type);
//     }
//   },
//   registerNewAnswer() {
//     const ans = Number(
//       prompt(
//         this.question +
//           "\n" +
//           this.options.join("\n") +
//           "\n" +
//           "(write option number)"
//       )
//     );
//     if (typeof ans === "number" && ans <= this.answers.length)
//       this.answers[ans] += 1;
//     this.displayResults(this.answers);
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// // poll.displayResults("1,2,3,4");

("use strict");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
("use strict");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     "2019-11-18T21:31:17.178Z",
//     "2019-12-23T07:42:02.383Z",
//     "2020-01-28T09:15:04.904Z",
//     "2020-04-01T10:17:24.185Z",
//     "2020-05-08T14:11:59.604Z",
//     "2020-05-27T17:01:17.194Z",
//     "2020-07-11T23:36:17.929Z",
//     "2020-07-12T10:51:36.790Z",
//   ],
//   currency: "EUR",
//   locale: "pt-PT", // de-DE
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     "2019-11-01T13:15:33.035Z",
//     "2019-11-30T09:48:16.867Z",
//     "2019-12-25T06:04:23.907Z",
//     "2020-01-25T14:18:46.235Z",
//     "2020-02-05T16:33:06.386Z",
//     "2020-04-10T14:43:26.374Z",
//     "2020-06-25T18:49:59.371Z",
//     "2020-07-26T12:01:20.894Z",
//   ],
//   currency: "USD",
//   locale: "en-US",
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// // Functions

// const displayMovements = function (acc, sort = false) {
//   containerMovements.innerHTML = "";

//   const movs = sort
//     ? acc.movements.slice().sort((a, b) => a - b)
//     : acc.movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const date = new Date(acc.movementsDates[i]);

//     const day = `${date.getDate()}`.padStart(2, 0);
//     const month = `${date.getMonth() + 1}`.padStart(2, 0);
//     const year = date.getFullYear();
//     const displayDate = `${day}/${month}/${year}`;
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__date">${displayDate}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((deposit) => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount;
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// btnLogin.addEventListener("click", function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;
//     const now = new Date();
//     const day = `${now.getDate()}`.padStart(2, 0);
//     const month = `${now.getMonth() + 1}`.padStart(2, 0);
//     const year = now.getFullYear();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     labelDate.textContent = `${day}/${month}/${year},${hours}:${minutes}`;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = "";

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     // Add movement
//     currentAccount.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = "";
// });

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = "";
// });

// let sorted = false;
// btnSort.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount, !sorted);
//   sorted = !sorted;
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// const copy = movements.slice();
// console.log(copy);
// movements.forEach((el, index, arr) => {
//   el > 0
//     ? console.log(`${index + 1} transaction: you deposited ${el}`)
//     : console.log(`${index + 1} transaction: you withdrew ${Math.abs(el)}`);
// });
// currencies.forEach((value, key, map) => console.log(key, value, map));
// const currenciesUnique = new Set(["usd", "gbp", "usd", "usd", "rs"]);
// currenciesUnique.forEach((value, key) => console.log(value, key));

// const checkDogs = function (dogsJulia, dogsKate) {
//   const copyDogsJulia = dogsJulia.slice();
//   copyDogsJulia.splice(-2);
//   copyDogsJulia.splice(0, 1);
//   console.log(copyDogsJulia);
//   const totalDogs = copyDogsJulia.concat(dogsKate);
//   totalDogs.forEach((age, i) => {
//     const str =
//       age < 3
//         ? `Dog number ${i + 1} is still a puppy`
//         : `Dog number ${i + 1} is an adult, and is ${age} years old`;
//     console.log(str);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// const arr = [1, 2, 23, 3, 4, 5, 5];
// const newarr = arr.map((el) => el + 1);
// // console.log(newarr);
// const arr2 = arr.filter((el) => el > 3);
// // console.log(arr2);
// const arr3 = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(arr3);
// const eurToUsd = 1.1;
// const movementsUsd = movements.map((mov) => mov * eurToUsd);
// console.log(movementsUsd);

// const calcAverageHumanAge = function (ages) {
//   const dogAge = ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((el) => el >= 18);
//   console.log(dogAge);
//   const avg = dogAge.reduce((acc, el) => acc + el, 0) / dogAge.length;
//   return avg;
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(movements.includes(200));
// console.log(movements.some((mov) => mov > 500));
// console.log(movements.every((mov) => mov > 0));
// console.log(new Array(4).fill(0));
// const x = Array.from({ length: 4 }, (el) => 1);
// console.log(x);
// const x = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => (mov >= 1000 ? acc + 1 : acc), 0);
// console.log(x);

// const y = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (acc, mov) => {
//       mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += mov);
//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(y);
// const convert = function (str) {
//   const a = str.split(" ");
//   const b = a
//     .filter((el) => el !== "a")
//     .map((el) => el.replace(el[0], el[0].toUpperCase()))
//     .join(" ");
//   console.log(b);
// };
// convert("hey how a are you");
("use strict");

///////////////////////////////////////
// Modal window
// const header = document.querySelector("header");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML = `we use cookies for improved functionality and analytics <button class='btn btn--close--cookie'>Got it!</button>`;
// header.append(message);
// document
//   .querySelector(".btn--close--cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
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

// class CarCl {
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
//     return this;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl("ford", 120);
// console.log(ford);
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
//   console.log(this.speed, this.charge);
// };

// const tesla = new EV("tesla", 120, 23);
// tesla.brake();
// tesla.accelerate();
// console.log(tesla);

// class EVCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     return this;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
// }
// const bmw = new EVCl("bmw", 120, 25);
// bmw.accelerate().chargeBattery(30).brake().brake();
// console.log(bmw);

("use strict");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/alpha/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const neighbour = data.borders?.[0];
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbour("ind");
const getJson = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);
    return res.json();
  });
};
const getCountryData = function (country) {
  getJson(
    `https://restcountries.com/v3.1/alpha/${country}`,
    "country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "neighbour not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(err);
      renderError(`something went wrong! ${err.message} Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener("click", function () {
  getCountryData("aus");
});
// const x = fetch(
//   `https://geocode.xyz/${lat},${lng}?geoit=json&auth=312041989572572291810x124563`
// );
// const WhereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=312041989572572291810x124563`
//   )
//     .then((res) => {
//       if (!res.ok) throw new Error("couldn't find your location");
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res.country.slice(0, 3));
//       return fetch(
//         `https://restcountries.com/v3.1/alpha/${res.country
//           .toLowerCase()
//           .slice(0, 3)}`
//       );
//     })
//     .then((res) => res.json())
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };
// WhereAmI(52.508, 13.381);
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("you won");
//   } else {
//     reject(new Error("you lost"));
//   }
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// // const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log("i waited for 1 second");
//     return wait(1);
//   })
//   .then(() => console.log("i waited for 2 seconds"));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then((res) => console.log(res.coords));

const WhereAmI = async function (country) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${country}`
  );
  console.log(response);
  const data = await response.json();
  renderCountry(data[0]);
};
WhereAmI("ind");
