class Szemely {
    // egy sablon amivel személyeket hozhatunk létre
    #szuletesiNev // ez egy privát adattag
    constructor(nev,szulDatum,szuloELEM){
        // a konstruktorban beállitjuk az adattagokat
        this.nev = nev
        this.szulDatum = szulDatum
        this.setSzuletesiNev(nev);
        // this - a konkrét osztálypéldányra mutat, azaz a konkrét objektumra

        // megjelenitem az elemet a HTML oldalon
        szuloELEM.append(`
        <div class="szemely">
            <h3>${this.#szuletesiNev}</h3>
            <p>${this.kor()}</p>
        </div>`)
        // elnevezem a html elemet is 
        this.szemelyELEM = $(".szemely:last-child");
        console.log(this.szemelyELEM);
        this.szemelyELEM.on("click", function(){
            console.log(this.nev); // function eseten a this azt az elemet jelenti, ami kiváltotta az esemélyt - (event target)
            
        })
        this.szemelyELEM.on("click" ,()=>{
            console.log(this); //nyil függvény esetén a this a konkrét objektum példányt jelenti 
        })
    }
    getSzuletesinev(){ // privát adattagokat csak ezen keresztül érhetek el kivulrol
        return this.#szuletesiNev
    }
    setSzuletesiNev(ujnev){ // privát adattag ellenőrzött módositása
        // a névben ne lehessen szám, nagybetűvel kezdődjön
        // csak adott nevek közül lehessen választani 
        this.#szuletesiNev = ujnev;
    }

    kor(){
        const d = new Date();
        let year = d.getFullYear();
        let aktualisKor = year-this.szulDatum;
        return aktualisKor;
    }

}

export default Szemely;