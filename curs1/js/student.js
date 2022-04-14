function student(id, nume, varsta, nota1, nota2) {
    this.id = id;
    this.nume = nume;
    this.varsta = varsta;
    this.nota1 = nota1;
    this.nota2 = nota2;


    // this.salut = function(){
    //     console.log(`Buna ziua numele meu este ${this.nume}`)
    // }
    // this.examen =function(){
    //     this.nota1= parseInt (nota1);
    //     this.nota2= parseInt (nota2);
    //     console.log(`Am fost la examene`);
    // }
    // this.calMedia = function(){
    //     let media = (this.nota1 + this.nota2) /2
    //     console.log(`Media este ${media}`);
    // }

    student.prototype.examen = function (student) {
        this.nota1 = parseInt(nota1);
        this.nota2 = parseInt(nota2);
        console.log(`Am fost la examene`);
    }
    student.prototype.calMedia = function (student) {
        let media = (this.nota1 + this.nota2) / 2
        console.log(`Media este ${media}`);
    }
}
student.prototype.salut = function (student) {
    console.log(`Buna ziua numele meu este ${this.nume}`);
}
