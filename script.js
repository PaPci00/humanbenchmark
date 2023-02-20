const click = document.querySelector('#click');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
let liczba = 0;


function teleport(){
    let x = Math.floor(Math.random()*width.value +1);
    let y = Math.floor(Math.random()*height.value +1);
    click.style = "margin-top: "+y+"px; margin-left: "+x+"px;";
    liczba = liczba + 1;
    click.innerHTML = liczba;
}

function rozmiar(){
    let smallwidth = parseInt(width.value)+50;
    let smallheight = parseInt(height.value)+50;
    if(smallwidth > 1050 || smallheight > 850)
    return alert("Nieprawidłowe wartości");
    if(smallwidth < 50 || smallheight < 50)
    return alert("Nieprawidłowe wartości");
    box.style.height = `${smallheight}px`;
    box.style.width = `${smallwidth}px`;
}

let iler = 0;
let ileg = 0;
let ileb = 0;

function kolor(){
  iler = Math.floor(Math.random()*255);
  ileg = Math.floor(Math.random()*255);
  ileb = Math.floor(Math.random()*255);
  
  box.style.backgroundColor = `rgb(${iler}, ${ileg}, ${ileb})`;
}

let ilerr = 0;
let ilegg = 0;
let ilebb = 0;

function faza(){
    ilerr = red.value;
    ilegg = green.value;
    ilebb = blue.value;

    box.style.backgroundColor = `rgb(${ilerr}, ${ilegg}, ${ilebb})`;
}