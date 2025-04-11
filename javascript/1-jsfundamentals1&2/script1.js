// let javascriptIsFun = true;
// // if (javascriptIsFun === true) alert('hi');
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 23.24)
// console.log(typeof 'ady');
// dynamic typing
// javascriptIsFun = 'yeah!'
// console.log(typeof javascriptIsFun);
// // data type:undefined
// // let x;
// console.log(x);
// console.log(typeof x);
// // x = 10;
// console.log(typeof x)
// console.log(typeof null)//typeof null=object is not true. it's type is null however it's type is shown as object becoz of legacy reasons;
// // three ways to declare variables=>let,const,var
// const birthyear = 2002;// const variable can't be changed i,e(immutable variable);
// // birthyear = 2000;
// // const x;// we can't declare empty const variables;
// // var a = 'hey'//var should be avoided it was used in old days;
// // a = 'hi';
// console.log(2 ** 3)
// 2**3 means 2 to the power 3;
// const a = 'syed';
// const b = 'adnan';
// console.log(a + ' ' + b);
// let x, y;
// x = 10;
// y = 11;
// // x += 10;//x +=10 means x=x +10;
// // console.log(x)
// x *= 4;// x *= 4 means x=x*4;
// console.log(x)
// x++;//x++ means x=x+1;
// console.log(x);

// console.log(x > y);
// console.log(x >= y);
// const z = x < y;
// console.log(z);
// arithmetic operators=>precedence left to right;
// assignment operators=>precedence right to left;
// Exercise
// const massOfMark = 78;
// const heightOfMark = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;
// const bmiOfMark = massOfMark / heightOfMark ** 2;
// const bmiOfJohn = massOfJohn / heightOfJohn ** 2;
// const markHigherBMI = bmiOfMark > bmiOfJohn;
// console.log(bmiOfMark, bmiOfJohn, markHigherBMI);
// const name = 'ady';
// const job = 'berozgaar';
// const birthyear = 2002;
// const year = 2023;
// const ady = "i'm " + name + ',a ' + (year - birthyear) + ' years old ' + job + '!';
// console.log(ady);
// // template string;
// const adynew = `i'm ${name},a ${year - birthyear} years old ${job}!`;
// console.log(adynew);
// console.log(`just a regular string man! learning to use backtiks...`);
// console.log(`writing\n\multiple\n\line\n\string`);//\n\ is used to create a new line;
// console.log(`multiple
// line
// string using
// string template...`)
// const age = 12;
// const oldenough = age >= 18;
// if (oldenough) {//if boolean variable oldenough is true only then this code will work
//     console.log('you can get drivers license!😂😂 enjoy✔✔');
// }//emoji=>windows+.;
// else {
//     const yearsleft = 18 - age;
//     console.log(`you cannot get drivers license😒😒 wait another ${yearsleft} years`);
// }
// const birthyear = 2002;
// let century;
// if (birthyear < 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
// const massOfMark = 78;
// const heightOfMark = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;
// const bmiOfMark = massOfMark / heightOfMark ** 2;
// const bmiOfJohn = massOfJohn / heightOfJohn ** 2;
// if (bmiOfMark > bmiOfJohn) {
//     console.log(`Mark's BMI (${bmiOfMark}) is higher than John's BMI (${bmiOfJohn})`);
// } else {
//     console.log(`John's BMI (${bmiOfJohn}) is higher than Mark's BMI (${bmiOfMark})`);
// }
// // type conversion;
// const year = '2002';
// console.log(Number(year), year);
// console.log(Number(year) + 18);
// console.log(Number('ady'));//gives NaN value which stands for not a number because ady can't be converted to number;
// console.log(String(28));
// //type coercion=>when a number and a string is added javascript automatically converts number into string or a string into number depending on type of arithmetic operation we use;
// console.log("i'm " + 21 + ' years old');//e'g of type coercion;
// console.log('25' - '10' - 5);//strings 25 and 10 are converted into numbers;
// console.log('25' * '2');//strings 25 and 2 are converted into numbers;
// console.log('25' / '5');//strings 25 and 5 are converted into numbers;
// console.log('20' > '5');//strings 20 and 5 are converted into numbers;
// let n = '1' + 1;
// n = n - 1;
// console.log(n);
// // 5 falsy values:0,'',undefined,null,NaN;
// console.log(Boolean(0));
// console.log(Boolean(''));//empty string;
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// const money = 0;//0 is equal to false in boolean terms;
// //javascript will convert money into boolean itself;
// if (money) {
//     console.log("don't spend it at all");
// } else {
//     console.log("get yourself a job");
// }
// let height;//height is undefined here therefore it is false;
// // javascript will convert height into boolean itself;
// if (height) {
//     console.log('hi');
// } else {
//     console.log('hello');
// }
// if we have to write only one piece of code then we don't need curly braces;
// let age = 18;
// if (age === 18) console.log('you have become an adult');
// // === is strict operator which means that it doesn't do type coercion;
// // == is loose operator which means it can do type coercion;
// console.log('18' == 18);
// console.log('18' === 18);
// age = '18';
// if (age == 18) console.log('you are an adult');
// let favourite = prompt("what's your favourite number?");
// console.log(favourite);
// //number stored in favourite variable after user input is a string therefore we use ==(loose operator) below;
// if (favourite == 18) console.log('cool');
// we can also convert favourite variable which is a string into number;
// let favourite = Number(prompt("what's your favourite number?"));
// if (favourite === 18) console.log('cool');
// let x = 18;
// // !== means not equal to;
// if (x !== 18) console.log('why not 18 yo...');
// const age = 1880;
// let century;
// if (age >= 2000) {
//     century = 21;
// } else if (age <= 2000 && age >= 1900) {
//     century = 20;
// } else if (age <= 1900 && age >= 1800) {
//     century = 19;
// } else {
//     console.log("i don't know");
// }
// console.log(century);

// logical operators=>!(not),&&(and),||(or)
// let haslicense = true;
// let hasgoodvision = false;
// console.log(hasgoodvision && haslicense);
// console.log(hasgoodvision || haslicense);
// let a = true;
// console.log(!a);
// const istired = true;
// const haslicense = true;
// const hasgoodvision = false;
// if (hasgoodvision && haslicense && !istired) {
//     console.log('you can drive...!');
// } else {
//     console.log('do not drive!');
// }
// coding challenge;
// const averagedolphins = (97 + 112 + 101) / 3;
// const averagekoalas = (109 + 95 + 106) / 3;
// if (averagedolphins >= 100 && averagedolphins > averagekoalas) {
//     console.log('dolphin is the winner...!🎉🌹')
// } else if (averagedolphins >= 100 && averagekoalas >= 100 && averagedolphins === averagekoalas) {
//     console.log('draw...!👀👀')
// } else if (averagekoalas >= 100 && averagekoalas > averagedolphins) {
//     console.log('koalas have won...!🎉🌹')
// } else {
//     console.log('nobody won...!😁😁')
// }
// console.log(averagedolphins);
// console.log(averagekoalas);
// const day = 'tuesday'
// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }
// conditional operator;
// const age = 19;
// age >= 18 ? console.log('drink water') :
//     console.log('drink juice');
// const drink = age >= 18 ? 'water' : 'juice';
// console.log(drink);
// console.log(`i like to drink ${age >= 18 ? 'water' : 'juice'}`);
// const bill = 430;
// bill >= 50 && bill <= 300 ? console.log((15 / 100) * bill) : console.log((20 / 100) * bill);
// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
// strict mode
"use strict";
// function logger() {
//     console.log('my name is adnan');
// }
// // calling/running/invoking function;
// logger();
// function juicemaker(mango, apple) {
//     console.log(mango, apple);
//     const juice = `juice with ${apple} apples and ${mango} mangoes.`;
//     return juice;
// }
// in order to get value of variable juice(string in this case) from above function we have to capture that value in a variable;
// const mangoapplejuice = juicemaker(1, 7);
// console.log(mangoapplejuice);
// // we can also get value stored in juice variable by directly printing it to console;
// console.log(juicemaker(1, 2));
// const applemangojuice = juicemaker(2, 8);
// console.log(applemangojuice);
// function declaration;
// const age1 = calcage1(2002);
// // we can call function declaration before declaring it;
// function calcage1(birthyear) {
//     return 2023 - birthyear;
// }

// function expression;
// we have stored fuction in variable calcage2 thus calcage2 is function now;
// function below is also called anonymous function;
// we can't call function expression before declaring it;
// const calcage2 = function (birthyear) {
//     return 2023 - birthyear;
// }
// const age2 = calcage2(2002);
// console.log(age1, age2);
// Arrow function;
// birthyear => 2023 - birthyear below is function stored in variable calcage3 so that we can use it in our code;
// const calcage3 = birthyear => 2023 - birthyear;
// const age3 = calcage3(2002);
// console.log(age3);
// const yeatstillretirement = (birthyear, firstname) => {
//     const age = 2023 - birthyear;
//     const retirement = 62 - age;
//     return `${firstname} retires in ${retirement} years`;
// }
// console.log(yeatstillretirement(2002, 'ady'));
// console.log(yeatstillretirement(1980, 'bob'));
// function cutfruit(fruit) {
//     return fruit * 4;
// }
// function juicemaker(apple, mango) {
//     const applepieces = cutfruit(apple);
//     const mangopieces = cutfruit(mango);
//     const juice = `juice with ${applepieces} piece of apple and ${mangopieces} pieces of mango.`;
//     return juice;
// }
// console.log(juicemaker(2, 3));
// Reviewing Functions
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));
// return immediately terminates the function therefore no code written after return is executed;

// const calcavg = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcavg(44, 23, 71);
// const scoreKoalas = calcavg(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);
// arrays;
// const friends = ['adnan', 'moomin', 'moeed', 1, 2, 3];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// other way of printing array;
// const years = new Array(2001, 2002, 2003);
// console.log(years)
// console.log(years[2])
// mutating array; we can mutate array even though we declared it with const because only primitive values cannot be mutated but we can't change whole array
// friends[1] = 'zaid';// only an element of array was mutated;
// console.log(friends);
//friends = ['asif', 'javed'];//doing this is illegal because we can't mutate whole array if we declared array with const;
// const firstname = 'adnan';
// const ady = [firstname, 'shafi', 2023 - 2002, friends];
// console.log(ady);
// console.log(ady.length);
// const calcAge = function (birthyear) {
//     return 2023 - birthyear;
// }
// const years = [2002, 2003, 2004];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1);
// console.log(age2);
// console.log(age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
// array method;
// const friends = ['adnan', 'moomin', 'moeed'];
// push method adds element at the end of array and also returns length of array;
// friends.push('rabi');
// console.log(friends)
// const newlength = friends.push('rabi');
// console.log(newlength);
// unshift method adds element at the beggining of array and also returns length of array;
// friends.unshift('jay');
// console.log(friends)
// pop removes last element from array; it is basically opposite of push method;
// friends.pop();
// const popped = friends.pop();//returns the element it removed;
// console.log(popped);
// console.log(friends);
// friends.pop();
// console.log(friends);
// shift method removes first element from an array and returns it;
// friends.shift();
// console.log(friends);
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);
// indexof method;
// console.log(friends.indexOf('moeed'));//gives index no. of any element(first occurrence) we pass in it;
// console.log(friends.indexOf('ady'));
// // includes.method;
// console.log(friends.includes('adnan'))//checks wether given element is present in array or not;
// console.log(friends.includes(1));
// friends.push(23);
// console.log(friends.includes('23'));//it will return false because string 23 is not present but rather number 23 is present and includes method doesn't do type coercion;
// if (friends.includes('ady')) {
//     console.log('you have a friend called adnan');
// }
// const calctip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// calctip(100);
// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total)
// objects🌹🌹;
// the form of object written below is called object literal syntax;
// const ady = {
//     firstname: 'adnan',
//     lastname: 'shafi',
//     age: 2023 - 2002,
//     job: 'student'
// };
// console.log(ady);//🎉object ady has four properties i'e firstname,lastname,age,job;
// console.log(ady.lastname);// dot notation;
// console.log(ady['lastname']);// bracket notation;
// const namekey = 'name';
// console.log(ady['first' + namekey]);
// console.log(ady['last' + namekey]);
// const interestedin = prompt('what do you want to know about ady? choose between firstname, lastname ,age , job');

// if (ady[interestedin]) {
//     console.log(ady[interestedin])
// } else {
//     console.log('wrong request! choose between firstname, lastname ,age , job');
// }
// ady.location = 'srinagar';
// ady['village'] = 'murran';
// console.log(ady);
// const ady = {
//     firstname: 'adnan',
//     lastname: 'shafi',
//     birthyear: 2002,
//     age: 2023 - 2002,
//     job: 'student',
//     friends: ['zaid', 'rafi', 'rabi'],
//     haslicense: false,
//     // calcage: function (birthyear) {
//     //     return 2023 - birthyear;
//     // }
//     calcage: function () {
//         // console.log(this);
//         this.age = 2023 - this.birthyear;
//         return this.age;
//     },// using this. keyword
//     getsummary: function () {
//         return `${this.firstname} is a ${this.age} old ${this.job}, and he has ${this.haslicense ? 'a drivers license' : 'no drivers license'}`
//     }
// };
// console.log(`${ady.firstname} has ${ady.friends.length} friends and his best friend is ${ady.friends[0]}`);
// console.log(ady.calcage(2002));
// console.log(ady['calcage'](2002));
// console.log(ady.calcage());
// this keyword is whole ady object because ady object is calling it in this case;
// console.log(ady.age);
// console.log(ady.getsummary());
// const bmi1 = {
//     fullname: 'mark miller',
//     mass: 78,
//     height: 1.69,
//     calcbmi: function () {
//         return bmi1.mass / bmi1.height ** 2;
//     }

// }
// const bmi2 = {
//     fullname: 'john smith',
//     mass: 92,
//     height: 1.95,
//     calcbmi: function () {
//         return bmi2.mass / bmi2.height ** 2;
//     }

// }
// const a = bmi1.calcbmi() > bmi2.calcbmi() ? `mark's bmi ${bmi1.calcbmi()} is higher than john's bmi ${bmi2.calcbmi()}` : `john's bmi ${bmi2.calcbmi()} is higher than mark's bmi ${bmi1.calcbmi()}`;
// console.log(a);
// loops🌹🌹;
// for loop keeps running until condition is true;
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting repetition ${rep}`);
// }
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];
// for (let i = 0; i <= jonas.length - 1; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
// }
// console.log(types)
// const years = [2002, 2003, 2004];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     console.log(2023 - years[i])
//     ages.push(2023 - years[i])
// }
// console.log(ages)
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// // looping backwards🌹🌹;
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`____starting exercise ${exercise}____`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`repeat ${rep} 🔥`);
//     }
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log('ady ' + rep);
//     rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end...')
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// function calctip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calctip(bills[i]));
//     totals.push(calctip(bills[i]) + bills[i]);
// }
// // console.log(tips);
// // console.log(totals);
// function calcaverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     // console.log(sum);
//     return sum / arr.length;
// }
// console.log(calcaverage([1, 2, 3]));
// console.log(calcaverage(totals));
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let max = temperatures[0];
// let min = temperatures[0];
// for (let i = 1; i < temperatures.length; i++) {
//   if (typeof temperatures !== "number") continue;
//   if (max < temperatures[i]) max = temperatures[i];
//   if (min > temperatures[i]) min = temperatures[i];
// }

// const calctempamplitude = function () {
//   return max - min;
// };
// console.log(calctempamplitude());
// merging two arrays🔥🔥🌹;
// const a = ["a", "b"];
// const b = ["c", "d"];
// const c = a.concat(b);
// console.log(c);
// debugger🔥🔥it is a tool for debugging;
// const printforecast = function (arr) {
//   let sum='';
//   for (let i = 0; i < arr.length; i++) {
//     let a = `...${arr[i]}c in ${i + 1} days`;
//     sum += a;
//   }
//   return sum;
// };
// const x = printforecast([21, 12, 33,25,-7]);
// console.log(x);
