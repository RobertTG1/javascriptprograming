import { NewUser, Abonat } from "../modules/NewUser.js";
// Modificam nume, email, varsa
let user = new NewUser('1','ion','ion@ion.com',22);
user.doarme(7);
console.log(user);
user.nume = 'Ivan';
user._id = 33;
//user.varsta= 23; //Error
console.log(user);

let abonat = new Abonat('2','dan', 'dan@dan.com');
//abonat.varsta =33; //Error
//abonat.password ='6789'; //Error
console.log(abonat);