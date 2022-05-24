import {Product} from './Product.js';
class Book extends Product{
    autor;
    constructor(name,price,percent,autor){
        super(name, price,percent);
        this.autor = autor;
    }
}
export {Book};