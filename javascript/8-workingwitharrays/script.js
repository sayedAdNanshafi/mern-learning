"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // // Elements
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

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = "";
//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
//   movs.forEach(function (el, i) {
//     const type = el > 0 ? "deposit" : "withdrawal";
//     const html = `<div class="movements__row">
//     <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//     <div class="movements__date">3 days ago</div>
//     <div class="movements__value">${el} €</div>
//   </div>`;
//     containerMovements.insertAdjacentHTML("afterbegin", html); //it accepts two strings first one is about position of html that we want to add and second is string containing the html
//     // by using afterbegin new elements added will be displayed at top while as if we use beforeend then order will be inverted
//   });
// };
// const calDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, el) => acc + el, 0);

//   labelBalance.textContent = `${acc.balance} EUR`;
// };
// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes} EUR`;
//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)} EUR`;
//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((mov) => (mov * acc.interestRate) / 100)
//     .filter((mov) => mov >= 1)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumInterest.textContent = `${interest} EUR`;
// };
// const createusername = function (accs) {
//   accs.forEach((acc) => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((mov, i) => mov[0])
//       .join("");
//   });
// };
// createusername(accounts);
// // console.log(account1);
// // console.log(account2);
// const updateUI = function (acc) {
//   calDisplayBalance(acc);
//   displayMovements(acc.movements);
//   calcDisplaySummary(acc);
// };
// let currentAccount;
// btnLogin.addEventListener("click", function (e) {
//   // Prevention form from submitting
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome back,${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();
//     inputLoginUsername.blur();
//     updateUI(currentAccount);
//   }
// });
// let receiveraccount;
// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   receiveraccount = accounts.find((acc) => acc.owner === inputTransferTo.value);
//   const amount = Number(inputTransferAmount.value);

//   if (
//     amount > 0 &&
//     receiveraccount?.username !== currentAccount.username &&
//     currentAccount.balance >= amount
//   ) {
//     receiveraccount.movements.push(amount);
//     currentAccount.movements.push(-amount);
//     updateUI(currentAccount);
//   }
//   inputTransferAmount.value = inputTransferTo.value = "";
// });
// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputLoanAmount.value);
//   const req1 = currentAccount.movements.some((mov) => mov > 0);
//   const req2 = currentAccount.movements.some((mov) => mov >= 0.1 * amount);

//   if (req1 && req2 && amount > 0) {
//     currentAccount.movements.push(amount);
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = "";
// });

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();
//   const closecurrentaccount = inputCloseUsername.value;
//   const closecurrentaccountpin = Number(inputClosePin.value);
//   if (
//     closecurrentaccount === currentAccount.username &&
//     closecurrentaccountpin === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     ); //findindex method also takes a call back function and both find and findindex method get access to current element and current index and current entire array
//     accounts.splice(index, 1);
//     containerApp.style.opacity = 0;
//   }
//   inputClosePin.value = inputCloseUsername.value = "";
// });
// let sorted = false;
// btnSort.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// Slice method //

const arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.slice(2)); //gives a new array starting from 2nd index of arr
// console.log(arr.slice(1, 3)); //gives a new array starting from 1st index of arr and ending on 2nd index(last value is not considered)
// console.log(arr.slice(-2)); //starts reading from end
// console.log(arr.slice(arr.length - 2)); //same as above
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, arr.length - 2)); //same as above
// console.log(arr.slice());
// console.log([...arr]); //same as above

// Splice //

// console.log(arr.splice(2));
// arr.splice(-1)
// arr.splice(1, 2); //deletes two elements starting from index 1
// console.log(arr);
// Splice mutates the array. It deletes the extracted part of array
//
// Reverse method //
// Reverse method mutates original array and reverses the order of array

// console.log(arr.reverse());
// console.log(arr);

// Concat //
// Concat method joins two arrays together
// concat method doesn't mutate original array
// const arr2 = ["g", "h", "i", "j"];
// const arr3 = [2, 3, 5];
// console.log(arr.concat(arr2));
// console.log([...arr,...arr2]);//same as above
// console.log(arr.concat(arr2).concat(arr3)); //joins arr,arr2 and arr3 together

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }
// Math.abs takes absolute value therefore removing -ve sign

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}:You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
//   }
// });
// forEach method iterates over array
// forEach method takes in a call back function which tell it what to do with each iteration
// forEach method passes current element,index and entire array we are looping in call back function
// The order in which values are passed in call back function as parameters is element , index and then array
// continue and break will not work in forEach loop

// forEach method for maps and sets //

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// // for maps forEach loop passes current value then key and then entire map into call back function as parameters
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // forEach loop for sets //

// const sets = new Set(["USD", "GBP", "USD", "GBP", "EUR", "EUR"]);
// console.log(sets);
// sets.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });
// sets don't have key or indexes but to avoid confusion among developers forEach loop for maps and sets were kept same. Keys and values are same

// Coding challenge //
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const checkdogs = function (juliaarr, katearr) {
//   const juliaarrnew = juliaarr.slice(); //creates new array because slice method mutates array
//   juliaarrnew.splice(-2);
//   juliaarrnew.splice(0, 1);
//   const newarr = juliaarrnew.concat(katearr);
//   newarr.forEach(function (age, i) {
//     if (age < 3) {
//       console.log(
//         `Dog number ${i + 1} is still a Puppy 🐶 and is ${age} years old.`
//       );
//     } else {
//       console.log(
//         `Dog number ${i + 1} is an Adult 🐕‍🦺 and is ${age} years old.`
//       );
//     }
//   });
// };
// checkdogs(julia, kate);
// console.log(julia);

// Map //

// Map method creates a new array which will contain results of apllying a call back function
// Map method doesn't mutate original array
// const eurtousd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsusd = movements.map(function (mov) {
//   return mov * eurtousd;
// });
// console.log(movements);
// console.log(movementsusd);
// const movementsusd2 = [];
// for (const x of movements) {
//   movementsusd2.push(x * eurtousd);
// }
// console.log(movementsusd2); //same as above
// const movementsusd3 = movements.map((mov) => mov * eurtousd);
// console.log(movementsusd3); //same as above
// // Map methos also passes current element then index and then whole array in call back function as parameters
// const movementsdescriptions = movements.map((mov, i, arr) => `Movement ${i + 1}:You ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsdescriptions);

// Filter method //
// it filters elements that satisfy a certain condition
// filter method also creates a new array of elements which satisfy given condition
// filter method also passes current element,index and whole array into call back function as parameters
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0; //this means return mov only if mov>0
// });
// console.log(deposits);
// console.log(movements);
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// Reduce method //

// first parameter passed by reduce method in call back function is accumulator which accumulates the value which we eventually want to return then curren element is passed and then index and then whole array
// Reduce method takes two parameters one is call back function and another is initial value of accumulator
// const balance = movements.reduce(function (acc, el, i, arr) {
//   console.log(acc);
//   return acc + el;
// }, 0);
// console.log(balance);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // maximum value
// const max = movements.reduce((acc, el) => {
//   if (acc < el) return el;
//   else return acc;
// }, movements[0]);
// console.log(max);
// minimum value
// const min = movements.reduce((acc,el) => {
//   if (acc < el) return acc;
//   else return el;
// },movements[0]);
// console.log(min);

// Coding challenge //

// const calcHumanAges = function (arr) {
//   const humanAge = arr.map((el) => (el > 2 ? 16 + el * 4 : 2 * el));
//   console.log(humanAge);
//   const age = humanAge.filter((age) => age >= 18);
//   console.log(age);
//   // const avg = age.reduce((acc, el) => acc + el, 0) / age.length;
//   const avg=age.reduce((acc, el,i,arr) => acc + el/arr.length, 0) //same as above
//   return avg;
// };
// const avg1=calcHumanAges([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);
// chaining //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurtousd = 1.1;
// const totalDepositsInUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurtousd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUSD);

// coding challenge //

// const calcHumanAges=mov=>mov.map((el) => (el > 2 ? 16 + el * 4 : 2 * el)).filter((age) => age >= 18).reduce((acc, el,i,arr) => acc + el/arr.length, 0)
// console.log(calcHumanAges([5, 2, 4, 1, 15, 8, 3]))

// Find method //
// Find method also needs call back function
// Find method return first value which satisfies given condition
// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);
// const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account);

// some and every method //

// some method //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// some method also takes a call back function
// some method checks for certain element in an array which meet the condition passed inside call back function
// some method returns true or false
// console.log(movements.some((mov) => mov > 0));
// console.log(movements.some((mov) => mov > 5000));
// console.log(movements.some((mov) => mov > 1500));
// some method will return true even if only one element in array meets given condition

// Every method //

// every method is same as some method. only difference is that every method returns true only after every element in array meets the given condition
// console.log(movements.every((mov) => mov > 0)); //gives false becoz there are some -ve elements in movements array as well
// console.log(account4.movements.every((mov) => mov > 0));

// Till now we have been writing call back function directly in methods but we can write them separately as well

// const deposit = (mov) => mov > 0;
// console.log(movements.every(deposit));

// Flat and Flatmap method //

// const arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
// console.log(arr.flat());
// flat method removes nested arrays and flattens the array
// flat method runs 1 level deep by default but we can change it
// const arrdeep = [[1, 2, 3, [11, 12, 23]], 4, 5, [6, [7, 8]]];
// console.log(arrdeep.flat(2));

// const accountmovements = accounts.map((acc) => acc.movements);
// console.log(accountmovements);
// const allmovements = accountmovements.flat();
// console.log(allmovements);
// const totalbalance = allmovements.reduce((acc, el) => acc + el, 0);
// console.log(totalbalance);
// doing above calculations with chaining
// const overallbalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, el) => acc + el, 0);
// console.log(overallbalance);
// flatmap method
// flatmap method combines flat and map method into just one method
// flatMap method only goes one level deep therefore if we need to go more than one level deep then we need to use flat method
// const overallbalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, el) => acc + el, 0);
// console.log(overallbalance2);

// sorting arrays //
// sort method mutates original array
// const owners = ["zach", "martha", "adam", "jonas"];
// console.log(owners.sort());
// console.log(owners);
// sort method by default arranges elements as if they were strings
// console.log(movements);
// console.log(movements.sort());
// a,b are adjacent elements in array
// ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// }); //if we return <0 then 'a' will be before 'b'(keep order) and if we return >0 then 'b' will be before 'a'(switch order)
// if a<b then a-b will return -ve which means keep order and if a>b then a-b will return +ve which means switch order therefore smaller no. will be kept first which we need for ascending order
// movements.sort((a, b) => a - b); //same as above
// console.log(movements);
// descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// movements.sort((a, b) => b - a); //same logic as in above ascending case
// console.log(movements);

// More ways of creating and filling arrays //

// const x = new Array(7); //this return an empty array of length 7
// console.log(x);
// // fill method can be called in empty array as above
// // fill method mutates array
// x.fill(1); //fills every element of x array with 1
// console.log(x);
// x.fill(2, 3, 6); //starts to fill every element of x with 2 after index 3 to index 5 index 6 is not included like slice method
// console.log(x);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.fill(10, 3, 6);
// console.log(arr);

// // Array.from //
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (current, i) => i + 1);
// console.log(z);
// const random =
//   Array.from({ length: 100 }, (_, i) => Math.trunc(Math.random() * 6)) + 1;
// console.log(random);

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   const movementsUI2 = [...document.querySelectorAll(".movements__value")]; //another way of creating array from nodelist but we have to do mapping separately
//   console.log(movementsUI);
//   console.log(movementsUI2);
// });

// coding challenge //

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];
// dogs.forEach(function (mov, i, arr) {
//   mov.recommendedFood = Math.trunc(mov.weight ** 0.75 * 28);
// });
// const sarah = dogs.find((mov) => mov.owners.includes("Sarah"));
// // const sarah=dogs.find(mov=>mov.owners.some(el=>el==="Sarah"))//same as above
// const x = sarah.curFood >= sarah.recommendedFood ? "Too much" : "Too little";
// console.log(x);
// const ownerstoomuch = dogs
//   .filter((dog) => dog.curFood >= dog.recommendedFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownerstoomuch);
// const ownerstoolittle = dogs
//   .filter((dog) => dog.curFood <= dog.recommendedFood)
//   .flatMap((dog) => dog.owners);
// console.log(ownerstoolittle);
// console.log(`${ownerstoomuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownerstoolittle.join(" and ")}'s dogs eat too little!`);
// const z = dogs.some((dog) => dog.curFood === dog.recommendedFood);
// console.log(z);
// const checkEatingOkay = (dog) =>
//   dog.curFood >= dog.recommendedFood * 0.9 &&
//   dog.curFood <= dog.recommendedFood * 1.1;
// const y = dogs.some(checkEatingOkay);
// console.log(y);
// const okaydogs = dogs.filter(checkEatingOkay);
// console.log(okaydogs);
// const dogscopy = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogscopy);
