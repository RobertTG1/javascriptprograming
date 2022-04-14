class student{
    constructor(id,nume,varsta){
        this.id = id;
        this.nume= nume;
        this.varsta = varsta;
    }

    salut(){
        console.log(`Salut nuemle meu este ${this.nume}`);
    }
    examen(nota1,nota2){
        this.nota1 = parseInt (nota1);
        this.nota2 = parseInt (nota2);
        console.log(`Am fost la examen`);
    }
    calMedia(){
        let media=(this.nota1 + this.nota2) /2
        console.log(`Media de la examen este ${media}`);
    }
}