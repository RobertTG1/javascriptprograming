class Carte {
     constructor(titlu,autor, editura,an,pret) {
         console.log(`s-a apelat automat constructorul`);
         this.titlu = titlu;
         this.autor = autor;
         this.editura = editura;
         this.an = an;
         this.pret =pret;
     }
     afiseazaTitlu(){
         console.log(`Titlul este ${this.titlu}`);
     }
     deschideCartea(){
         console.log('Am deschis cartea la pagina 15');
      }
    //  randomIntFromInterval(min, max) { // min and max included 
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    //   }
      

}

// // Curs 2 Module
 export {Carte}

