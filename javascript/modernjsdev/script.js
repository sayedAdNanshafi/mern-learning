import * as shoppingCart from "./shoppingCart.js";
console.log("importing module");
shoppingCart.addToCart("bread", 5);
shoppingCart.addToCart("pizza", 5);
console.log(shoppingCart.totalPrice, shoppingCart.tq);
console.log(shoppingCart.cart);

const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "bread", quantity: 4 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const clone = cloneDeep(state);
state.user.loggedIn = false;
console.log(clone);
if (module.hot) {
  module.hot.accept();
}
import "core-js/stable";
import "regenerator-runtime/runtime";
