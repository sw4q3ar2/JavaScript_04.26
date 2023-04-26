import Szemely from "./szemely.js"
$(function(){
    const szuloELEM = $(".tarolo");

    const szemely1 = new Szemely("Béla",1979,szuloELEM);

    const szemely2 = new Szemely("Mucsika",1988,szuloELEM);
    szemely2.nev = "Pityuka"
})
