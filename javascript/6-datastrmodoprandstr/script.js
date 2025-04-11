"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 3}`]: {
    open: 13,
    close: 21,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  ///ES6 enhanced///
  openingHours,
  ///ES6 enhanced///
  order(starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderdelivery({ time = "20:00", address, mainindex = 0, starterindex = 1 }) {
    console.log(
      `Order Received! ${this.starterMenu[starterindex]} And ${this.mainMenu[mainindex]} will be Delivered to ${address} At ${time}`
    );
  },
  orderpasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderpizza(ingredient1, ...otheringredients) {
    console.log(ingredient1);
    console.log(otheringredients);
  },
};

// restaurant.orderdelivery({
//   time: "22:30",
//   address: "murran pulwama",
//   mainindex: 2,
//   starterindex: 2,
// });
// restaurant.orderdelivery({
//   address: "murran pulwama",
//   starterindex: 2,
// });
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// // console.log(x, y, z);

// let [first, second] = restaurant.categories;
// // console.log(first, second);
// // const temp=second;
// // second=first;
// // first=temp;
// // console.log(first,second);
// [first, second] = [second, first];
// // console.log(first, second);
// const [main, startercourse] = restaurant.order(2, 0);
// // console.log(main, startercourse);
// const nested = [1, 2, [3, 4, 5]];
// const [i, , j] = nested;
// // console.log(i, j);
// const [a, , [c, d]] = nested;
// // console.log(a, c, d);
// // const [p,q,r]=[8,9]
// // console.log(p,q,r);

// // const [p, q, r = 1] = [8, 9];
// // console.log(p, q, r);
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// To extract properties from object we need to use exact same variable names as in object;
// const { name, categories, openingHours } = restaurant;

// console.log(name, openingHours, categories);
// const {
//   name: restaurantname,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantname, hours ,tags);
// we can give default values as well just like in arrays
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// mutating variables
// let a = 110;
// let b = 111;
// const obj = { a: 1, b: 2, c: 3 };
// ({ a, b } = obj);
// // console.log(a, b);
// const { openingHours } = restaurant;

// const {
//   fri: { open: x, close: y },
// } = openingHours;
// // const { open, close } = fri;
// console.log(x, y);
// spread operator
// const arr = [1, 2, 3];
// const newarr = [...arr, 4, 5, 6];
// // console.log(newarr);
// // console.log(...arr);
// const newmenu = [...restaurant.mainMenu, "Gnocci"];
// // console.log(newmenu);
// // spread operator doesn't create new variables
// const copy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(copy);
// // 😎😎🔥spread operator works on all iterables(arrays,strings,sets,maps).We can only use spread operator when building an array or passing values in a function
// const a = "hey";
// // spread operator will break a string into its individual elements
// const b = [...a, "", "h"];
// console.log(b);
// console.log(...a);
// // const ingredients = [
// //   prompt("Let's make pasta! ingredient 1?"),
// //   prompt("ingredient 2?"),
// //   prompt("ingredient 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderpasta(...ingredients);
// const newrestaurant = { foundedin: 1998, ...restaurant, founder: "Adnan" };
// // console.log(newrestaurant);
// const restaurantcopy={...restaurant}
// restaurantcopy.name='ristorante roma'
// console.log(restaurantcopy);
// spread operator,  used on right side of =
// const arr = [1, 2, 3, ...[4, 5, 6]];
// Rest operator,  used on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// // console.log(a, b, others);
// const [Pizza, , Risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(Pizza, Risotto, otherfood);
// const { sat, ...other } = restaurant.openingHours;
// console.log(sat, other);
// 😎🔥😎 Rest syntax takes all arguments or values and packs them all into a syntax
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// // add(1, 2);
// // add(1, 2, 3, 4);
// // add(1, 2, 3, 4, 5, 6, 7);
// const x = [1, 2, 3];
// add(...x);
// restaurant.orderpizza("mushroom", "onion", "olives", "spinach");
// restaurant.orderpizza("mushroom");
// Rest can be used where we have to write variables separated by commas whereas spread can be used where we have to write values separated by commas
// 😎🔥🎃 Shortcircuiting
// in case of OR operator first truthy value will be printed and other values wouldn't not be even looked at
// console.log(2 || "ady");
// console.log(''||'ady');
// console.log(undefined||0||''||'ady'||21||null);
// const guest1 = restaurant.numguests ? restaurant.numguests : 10;
// // console.log(guest1);
// const guest2 = restaurant.numguests || 10; //😎restaurant.numguests is undefined therefore falsy value
// console.log(guest2);
// 😎😎🔥 in case of AND operator: if all values are true then last value is returned  and if any value is false then that value is returned
// console.log(0 && "ady");
// console.log(7 && "ady");
// console.log(7 && "ady" && null && "hello"); //😎😎🔥🧧first value is true therefore evaluation continues, second value is also true therefore evaluation continues ,third value is false therefore third value is returned because AND operator is false if one value becomes false therefore evaluation stops at this point
// if (restaurant.orderpizza) {
//   restaurant.orderpizza("mushroom", "spinach", "olives");
// }
// restaurant.orderpizza && restaurant.orderpizza("mushroom", "spinach", "olives");
// 😎😎🔥 Nullish coalescing operator:
// Nullish coalescing operator only works for nullish values and nullish values are null and undefined only(not for 0 and '') it works as if 0 and '' are truthy values instead of falsy values
// restaurant.numguests = 0;
// const guests = restaurant.numguests ?? 10;
// console.log(guests);

/////// coding challenge //////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const [players1, players2] = game.players;

// const [GK, ...otherplayers] = players1;

// const allplayers = [...players1, ...players2];

// const substitute = ["thiago", "coutinho", "perisic"];

// const players1final = [...players1, ...substitute];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printgoals = function (...names) {
//   console.log(...names, names.length);
// };
// // printgoals("Davies", "Muller", "Lewandowski", "Kimmich");
// // printgoals(...game.scored);
// team1 < team2 && console.log("team1 wins");
// team1 > team2 && console.log("team2 wins");

/////The for of loop ///////😎🔥😎

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i,el] of menu.entries()) {
//   console.log(`${i+1}: ${el}`);
// }
// console.log([...menu.entries()]);

///Optional chaining😎😎🔥///

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// With optional chaining
// if property is null or undefined then only it will show undefined
// console.log(restaurant.openingHours.mon?.open); //the code here says if .mon property in restaurant.openingHours exists then only execute .open property
// // we can have multiple optional chaining
// console.log(restaurant.openingHours?.mon?.open); //code here says if restaurant has .openinghours property then execute .mon and if restaurant.openingHours has .mon property then execute .open property
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// const users = [{ name: "ady", address: "bengal" }];
// console.log(users[0]?.name ?? "User Array is empty");
/////😎🔥looping over objects/////
// object properties are also called object keys
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// const properties = Object.keys(openingHours); //array of properties in openinghours
// // console.log(properties);
// // console.log(`We are open on ${properties.length} days a week`);
// let str = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   str += `${day}, `;
// }
// // console.log(str);
// // if we want values of object keys(properties) then use object.values
// const values = Object.values(openingHours); //array of values of keys
// // console.log(values);
// // looping over entire object(keys and values together)
// const entry = Object.entries(openingHours);//array of keys and values
// console.log(entry);
// for (const [key,{open,close}] of Object.entries(openingHours)){
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/////coding challenge/////
// for (const [i, el] of game.scored.entries()) {
//   // console.log(`Goal ${i + 1}:${el}`);
// }
// let avg = 0;
// const odds = Object.values(game.odds);
// for (const x of odds) {
//   avg += x;
// }
// avg /= odds.length;
// // console.log(avg);

// for (const [i, el] of Object.entries(game.odds)) {
//   const teamstr = i === "x" ? "Draw" : `${game[i]}`;
//   console.log(`Odd of victory ${teamstr}:${el}`);
// }
// let scorers = {};
// for (const [i, el] of game.scored.entries()) {
//   scorers[el] = i;
// }
// console.log(scorers);
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/////🔥🔥😎Sets/////
// sets are iterable
// Sets are unique and therefore a set can never have any duplicates
const ordersset = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);
// console.log(ordersset);
// console.log(ordersset.size);
// console.log(ordersset.has("pasta")); //checks if pasta is present in set
// console.log(ordersset.has("pizza"));
// console.log(new Set("adnan"));
// ordersset.add("garlic bread");
// ordersset.add("garlic bread");
// ordersset.delete("risotto");
// ordersset.clear();
// console.log(ordersset); //deletes all elements of a set
// We can't retrieve(get) values out of a set
// for (const order of ordersset) console.log(order);
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const staffunique = [...new Set(staff)];
// // console.log(staffunique); //spread operator works on all iterables
// // console.log(new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size);
// console.log(new Set("syedadnan").size); //no. of different letters in syedadnan

/////🔥😎🔥Maps/////

// const rest = new Map();
// rest.set("name", "bakvaas restaurant");
// rest.set(1, "firenze,italy");
// rest.set(2, "lisbon,portugal");
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are close");
// // console.log(rest.get("name"));
// // console.log(rest.get(true));
// // console.log(rest.get(1));
// // in maps we can have any type of keys
// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories")); //checks if certain key is present in map
// rest.delete(2); // deletes any key
// console.log(rest);
// console.log(rest.size);
// // rest.clear(); // removes all elements from map
// console.log(rest);
// rest.set([2, 1], "test");
// console.log(rest.get([2, 1])); //🔥will show undefined because both are stored in different memory in heap

// const arr = [2, 1];
// rest.set(arr, "test");
// console.log(rest.get(arr));
// // we can also set dom element as a key in map
// // rest.set(document.querySelector("h1"), "heading");

// const question = new Map([
//   ["question", "what is the best programming language in the world?"],
//   [1, "c"],
//   [2, "c++"],
//   [3, "python"],
//   [4, "java"],
//   [5, "javascript"],
//   ["correct", 5],
//   [true, "Answer is correct🔥😎"],
//   [false, "try again😢"],
// ]);
// console.log(question);
// console.log(Object.entries(openingHours));
// const maphours = new Map(Object.entries(openingHours));
// console.log(maphours);
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const ans = Number(prompt("Your answer"));
// if (ans === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// console.log(question.get(question.get("correct") == ans));
// converting map to array
// console.log(...question);
// console.log(...question.entries());
// console.log(...question.values());
// console.log(...question.keys());

///Coding challenge///

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

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// const del = gameEvents.delete(64);
// console.log(gameEvents);
// const avg = console.log(
//   `An event happened,on average,every ${90 / gameEvents.size} minutes`
// );
// for (const [key, value] of gameEvents.entries()) {
//   const z =
//     key < 45 ? `[First half] ${key}:${value}` : `[Second half] ${key}:${value}`;
//   // console.log(z);
// }
// const airline = "TAP air portugal";
// const plane = "A320";
// console.log(plane[0]);
// console.log(plane[1]);
// console.log("B737"[0]);
// console.log(airline.length);
// console.log("ady".length);
// console.log(airline.indexOf("a")); //gives first occurence index
// console.log(airline.lastIndexOf("a"));
// console.log(airline.indexOf("portugal"));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 9)); //last index is not counted
// // all methods we use on strings return new strings because strings are immutable
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-2)); //extracts from the end
// console.log(airline.slice(1, -2));
// const seat = "11b";
// console.log(seat.slice(-1));
// console.log(seat.slice(seat.length - 1));
// const checkmiddleseat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat😎");
//   else console.log("You got lucky!");
// };
// checkmiddleseat("11B");
// checkmiddleseat("12E");
// checkmiddleseat("14C");
// // javascript behind the scenes convert string primitive into string object thus we are able to use methods on strings this process is called boxing after method is called string object is again coverted back into string primitive
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log("ady".toUpperCase());
// const passenger = "adNAn"; //to fix this string we put everthing to lower case first
// const passengerlower = passenger.toLowerCase();
// const passengercorrect =
//   passengerlower[0].toUpperCase() + passengerlower.slice(1);
// console.log(passengercorrect);
// const correctemail = "sad37730@gmail.com";
// const email = "  Sad37730@Gmail.com \n";
// const loweremail=email.toLowerCase()
// // trim method deletes white spaces from string
// const trimmedemail=loweremail.trim()
// console.log(trimmedemail);
// we can also do all above things together
// const normalizedemail = email.toLowerCase().trim();
// console.log(normalizedemail);
// console.log(correctemail === normalizedemail);
// const priceindia = "288,97₹";
// // replace method replaces characters,words etc
// const priceusa = priceindia.replace("₹", "$").replace(",", ".");
// console.log(priceusa);

// const announcement = "All passengers come to barding door 23.Boarding door 23!";
// console.log(announcement.replace("door", "gate")); //will replace only first occurrence
// console.log(announcement.replaceAll("door", "gate")); //will replace all occurrence of gate
// // we can also use regular expression
// console.log(announcement.replace(/door/g, "gate"));
// all string methods are case sensitive
// const planenew = "A320neo";
// console.log(planenew.includes("A320"));
// console.log(planenew.includes("0"));
// console.log(planenew.startsWith("air"));
// console.log(planenew.startsWith("a"));
// if (planenew.startsWith("A3") && planenew.endsWith("neo"))
//   console.log("Part of new airbus family");
// const checkbaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife')||baggage.includes('gun')) console.log('You are not allowed🚫');
//   else console.log('You are allowed🔥');
// };
// checkbaggage("I have laptop,some Food and a pocket Knife");
// checkbaggage("socks and Camera");
// checkbaggage("Got some snacks and a Gun for protection");
// Split method splits a string and stores it into an array
// console.log("i+had+a+great+day+today".split("+"));
// console.log("Syed adnan".split(" "));

// const [firstname, lastname] = "Syed Adnan".split(" ");
// const newname = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
// // console.log(newname);

// const capitalizename = function (name) {
//   const names = name.split(" ");
//   const namesupper = [];
//   for (const n of names) {
//     // namesupper.push(n[0].toUpperCase() + n.slice(1));
//     namesupper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesupper.join(" "));
// };
// capitalizename("syed adnan shafi");
// // padding
// const message = "go to gate 23";
// // console.log(message.padStart(25, "+").padEnd(35, "+")); //it will make string 35 characters long and will add 25 + from beggining of message and 10 + from end of message
// console.log(typeof (34 + "")); //🔥😎 if we add string to anything it becomes a string
// const maskcreditcard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "❌");
// };
// // console.log(maskcreditcard(11122226663333));
// // repeat
// const message2 = "Bad Weather...All Departures Delayed!\n";
// console.log(message2.repeat(5));
// const planesinline=function(n){
//   console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
// }
// planesinline(2)
// planesinline(4)
// planesinline(7)

// Coding challenge //

const convert = function (names) {
  const a = names.split("_");
  const b = [];
  for (const name of a) {
    if (name !== a[0]) b.push(name[0].toUpperCase() + name.slice(1));
    else b.push(name);
  }
  console.log(b.join(""));
};

convert("add_bdj_cul");
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
