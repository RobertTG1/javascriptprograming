import { Animal } from '../modules/Animal.js'
class Leu extends Animal {
    constructor(greutate, lungime) {
        lungime;
        super(greutate);
        this.lungime = lungime;
    }
    vaneaza() {
        console.log(`Cand nu doarme vaneaza alte animale`);
    }
}
export { Leu }