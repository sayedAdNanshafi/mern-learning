// exporting module
console.log("exporting module");
const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
const totalPrice = 100;
const totalQuantity = 20;
export { totalPrice, totalQuantity as tq };
