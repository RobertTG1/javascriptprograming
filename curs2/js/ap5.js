// importam module

import {Carte, Manual} from '../modules/Carte.js'

let carte = new Carte('Poezii', 'George Bacovia');
console.log(carte);
carte.toString();
carte.deschidCartea();


let manual = new Manual('Limba romana', 'Necunoscut', 25);
console.log(manual);
manual.deschidCartea();
manual.toString();
manual.nrbucati = 27;
manual.getComanda();