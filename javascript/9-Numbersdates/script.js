"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-08-19T14:43:26.374Z",
    "2023-08-23T18:49:59.371Z",
    "2023-08-24T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-08-19T14:43:26.374Z",
    "2023-08-23T18:49:59.371Z",
    "2023-08-24T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions
const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const dayspassed = calcDaysPassed(new Date(), date);
  console.log(dayspassed);
  if (dayspassed === 0) return "Today";
  if (dayspassed === 1) return "Yesterday";
  if (dayspassed <= 7) return `${dayspassed} days ago`;
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displaydate = formatMovementsDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displaydate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
const startLogOutTimer = function () {
  const tick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    time--;
  };
  let time = 120;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;
// Fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// Experimenting with API

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", //can also write numeric or 2-digit
      year: "numeric",
      // weekday: "long",
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// in javascript numbers are represented as base 2 i'e 0 and 1
// console.log(0.1 + 0.2 === 0.3);
// console.log(typeof "21");
// console.log(typeof +"21"); //as javascript sees plus sign(+) infront of 21 it does type coercion and converts string 21 automatically to number
// console.log(Number.parseInt("22ex", 10)); //this will print a number 22(even if string has some letters or symbols after number) but this will only work if string starts with a number
// console.log(Number.parseInt("qs22ex", 10));
// parseInt function accepts second argument which is called regex(base of numeral system we are using)
// console.log(Number.parseInt("3.5rem")); //shows only integer part
// console.log(Number.parseFloat("3.5rem"));
// console.log(parseInt("33ali")); // we can also call parse functions without calling them on Number object but that is old way. In modern javascript it is encouraged to call them on Number object becoz Number object here provides namespace
// console.log(Number.isNaN(2)); //checks if given value is not a number type
// console.log(Number.isNaN("23"));
// console.log(Number.isNaN(+"23x"));
// isFinite method is best way of checking whether given value is a number or not
// console.log(Number.isFinite(23));
// console.log(Number.isFinite("23")); //gives false becoz '23' is not a number
// console.log(Number.isFinite(+"23x"));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.03));
// console.log(Number.isInteger(23/0));
// console.log(Number.isInteger('23'));

// Math and rounding //

// console.log(Math.sqrt(25)); //sqrt = square root
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); //cubic root
// console.log(Math.max(1, 2, 4, 5, 7)); //calculates maximum
// console.log(Math.max(1, 2, 4, "5", 7)); //still gives result becoz it does type coercion but it doesn't do parsing
// console.log(Math.max(1, 2, 4, "5x", 7)); //gives NaN becoz it doesn't do parsing
// console.log(Math.min(1, 2, 4, "5", 7)); //calculates minimum

// console.log(Math.PI); //gives value of constant pi
// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);
// // numbers which can stay between two numbers
// const randomInt = (max, min) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(20, 10));
// Rounding integers //
// console.log(Math.trunc(23.54));
// console.log(Math.round(23.3));
// console.log(Math.round(23.6)); //rounds off to nearest integer

// console.log(Math.ceil(23.2)); //rounds off to highest integer
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.9)); //rounds off to lowest integer
// console.log(Math.floor(23.1));
// // all methods above also do type coercion i'e they convert every type of value to number
// console.log(Math.floor("23.6"));
// console.log(Math.trunc(-22.2));
// console.log(Math.floor(-22.2)); //gives -23 becoz it is lower integer

// // Rounding decimals //
// console.log((2.9).toFixed(0)); //toFixed method returns a string always
// console.log((2.9).toFixed(3)); //adds zeroes until it has 3 decimal parts(2.900)
// console.log((2.735).toFixed(2)); //gives number only upto 2 decimal points(2.73)
// console.log(+(2.9).toFixed(0)); //gives a number becoz we added a plus sign (+)

// Remainder operator //

// console.log(5 % 2);
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(5));
// console.log(isEven(4));
// coloring every second index
// labelBalance.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = "orangered";
//     if (i % 3 === 0) row.style.backgroundColor = "blue";
//   });
// });

// BigInt //

// console.log(2 ** 53 - 1); //integers bigger than this were unsafe and couldn't be stored
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// // if we use BigInt then we can store very big numbers
// console.log(79882349824398754879254938754987n); //n converts the number into BigInt number
// console.log(BigInt(98983428989));

// console.log(
//   100000000000000000000098723497084n + 1812981298714298047908195439875329078953n
// );
// const huge = 89723418975489254982598n;
// const num = 20;
// // console.log(huge * num); //gives error because we can't mix bigint numbers with regular numbers
// console.log(huge * BigInt(num)); //now it works becoz we converted regular number to bigint
// console.log(20n > 15); //this works
// console.log(20n === 20); //this shows false becoz when we use triple operator javascript doesn't do type coercion
// console.log(20n == 20); //this shows true becoz in this case we used double operator therefore type coercion will happen
// console.log(typeof 20n);
// // 😎❌Math functions don't work on bigint

// // in division of bigint decimal part will be cut off
// console.log(10n / 3n);
// console.log(10n / 4n);

// Creating Dates //

// const now = new Date();
// console.log(now);
// string parsing

// console.log(new Date("Fri Aug 25 2023 10:40:53"));
// console.log(new Date("December 24, 2015"));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2030, 10, 19, 15, 23, 5));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// these dates that we created above are just another type of special objects therefore they have their own methods
// const future = new Date(2030, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); //day of month
// console.log(future.getDay()); //day of week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //gives milliseconds passed since january 1970
// console.log(future.getTime());
// console.log(Date.now()); //timestamp for now

// future.setFullYear(2040);
// console.log(future);
// const future = new Date(2030, 10, 19, 15, 23);
// console.log(+future); //gives timestamp
// const calcDaysPassed = (date1, date2) =>
//     Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(days1); //gives milliseconds

const num = 1223476.45;
const options = {
  style: "unit",
  unit: "mile-per-hour",
  // useGrouping: false,
};
console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("GERMANY: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("SYRIA: ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// Set timers //

// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza!🍕 ${ing1} and ${ing2}`),
//   3000,
//   "olives",
//   "spinach"
// ); //first argument is function that we want javascript to call and second argument is time(in milliseconds) after which it should be called
// code execution doesn't stop at setTimeout code continues to execute
// console.log("hey how are you?"); //this code will be executed even though above settimeout code has not been printed to console yet
// in settimeout we can pass arguments in call back function as well
// any argument that we pass in settimeout after delay time is considered an argument for call back

// we can cancel timer as well //

// const ingredients = ["olive", "spinach"];
// const pizzatimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza!🍕 ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// console.log(pizzatimer);
// if (ingredients.includes("spinach")) clearTimeout(pizzatimer); //we have to pass in name of timer in clearTimeout

// setinterval //

// setInterval(function () {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000); //will print to console new Date() every 1 second
