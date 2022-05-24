import {Product} from './Product.js';
import{Book} from './Book.js';

class Basket{
    constructor(){
        this.products = [];
    }
    addProduct(amount,product){
        this.products.push(...Array(amount).fill(product));
    }
    calcTOtal(){
        return this.products;
         map(product => product.price)
        .reduce((a,b) => a+b, o);
    }
    printShoppingInfo(){
        console.log(`Total:` + this.calcTOtal());
    }
}


export {Basket};