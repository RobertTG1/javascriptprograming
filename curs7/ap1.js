import { Product } from "./modules/Product.js";
import { Book } from "./modules/Book.js";
import { Basket } from "./modules/Basket.js";

console.log(typeof Product);

const bread = new Product('bread',8);
console.log(typeof bread);
const water = new Product('water',3.25)

products.sort(Product.orderByPrice);
console.log(products);
const cos = new Basket();