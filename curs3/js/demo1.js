import { Leu } from "../modules/Leu.js";
import { Catel } from "../modules/Catel.js";
import { Animal } from "../modules/Animal.js";

const animal = new Animal(100);
animal.comunica('Cra cra');

const leu = new Leu(100, 2);
leu.comunica("Wooooof");

const catel = new Catel(3, true);
catel.comunica('Ham ham');
catel.musca();