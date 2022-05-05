class Carte {
    constructor(titlu, autor) {
        this.titlu = titlu;
        this.autor = autor;
    }
    toString() {
        console.log(`Cartea se numeste ${this.titlu} si este scrisa de ${this.autor}.`);
    }
    deschidCartea() {
        console.log('Am deschis cartea la pagina 43');
    }
}

class Manual extends Carte {
    nrbucati;
    constructor(titlu, autor, nrbuc) {
        super(titlu, autor)
        this.nrbucati = nrbuc;
    }

    getComanda() {
        console.log(`Cartea ${this.titlu} este comandata in ${this.nrbucati} de bucati.`);
    }
}
export { Carte, Manual }
