//Variableshelldivers 2 propaganda trailerd
const juegos = document.querySelectorAll('.juegos');
let botonsalir="";
const fondojuegos = document.getElementById('fondojuegos');
const juegosmodal = document.getElementById('juegosmodal');

let juego1 = document.getElementById('a1');
let juego2 = document.getElementById('a2');
let juego3 = document.getElementById('a3');
let juego4 = document.getElementById('a4');
let juego5 = document.getElementById('a5');
let juego6 = document.getElementById('a6');
let juego7 = document.getElementById('a7');
let juego8 = document.getElementById('a8');
let juego9 = document.getElementById('h1');
let juego10 = document.getElementById('h2');
let juego11 = document.getElementById('h3');
let juego12 = document.getElementById('h4');
let juego13 = document.getElementById('h5');
let juego14 = document.getElementById('h6');
let juego15 = document.getElementById('h7');
let juego16 = document.getElementById('h8');
let juego17 = document.getElementById('s1');
let juego18 = document.getElementById('s2');
let juego19 = document.getElementById('s3');
let juego20 = document.getElementById('s4');
let juego21 = document.getElementById('s5');
let juego22 = document.getElementById('s6');
let juego23 = document.getElementById('s7');
let juego24 = document.getElementById('s8');

//Eventos
//juegos.addEventListener ('click',()=>clickjuegos(fondojuegos,true));


cargar();

juego1.addEventListener ('click',()=>detallesjuegos(juego1));
juego2.addEventListener ('click',()=>detallesjuegos(juego2));
juego3.addEventListener ('click',()=>detallesjuegos(juego3));
juego4.addEventListener ('click',()=>detallesjuegos(juego4));
juego5.addEventListener ('click',()=>detallesjuegos(juego5));
juego6.addEventListener ('click',()=>detallesjuegos(juego6));
juego7.addEventListener ('click',()=>detallesjuegos(juego7));
juego8.addEventListener ('click',()=>detallesjuegos(juego8));
juego9.addEventListener ('click',()=>detallesjuegos(juego9));
juego10.addEventListener ('click',()=>detallesjuegos(juego10));
juego11.addEventListener ('click',()=>detallesjuegos(juego11));
juego12.addEventListener ('click',()=>detallesjuegos(juego12));
juego13.addEventListener ('click',()=>detallesjuegos(juego13));
juego14.addEventListener ('click',()=>detallesjuegos(juego14));
juego15.addEventListener ('click',()=>detallesjuegos(juego15));
juego16.addEventListener ('click',()=>detallesjuegos(juego16));
juego17.addEventListener ('click',()=>detallesjuegos(juego17));
juego18.addEventListener ('click',()=>detallesjuegos(juego18));
juego19.addEventListener ('click',()=>detallesjuegos(juego19));
juego20.addEventListener ('click',()=>detallesjuegos(juego20));
juego21.addEventListener ('click',()=>detallesjuegos(juego21));
juego22.addEventListener ('click',()=>detallesjuegos(juego22));
juego23.addEventListener ('click',()=>detallesjuegos(juego23));
juego24.addEventListener ('click',()=>detallesjuegos(juego24));



function cargar(){
    
    for(let i=0;i<juegos.length;i++){
       juegos[i].addEventListener ('click',()=>clickjuegos(fondojuegos,true));
    }
}
//Funciones
function clickjuegos(ventanajuego,entrar){
    
    if(entrar===true){
        ventanajuego.classList.add('activo')
    }else{
        ventanajuego.classList.remove('activo')
    }
}

function detallesjuegos(juego){

    fondojuegos.innerHTML=
    `<div class="juegosmodal">
        <h1>${juego.getAttribute('data-nombre')}</h1>
        <div class="invisible">
            <video autoplay muted loop>
                <source src="${juego.getAttribute('data-trailer')}"></source>
            </video>
            <p class="scrolleable">${juego.getAttribute('data-descripcion')}</p>
        </div>
        <h2>${juego.getAttribute('data-precio')}</h2>
        <div class="invisible2">
            <div id="botonsalir">Salir</div>
            <div id="botoncomprar">Comprar</div>
        </div>
    </div>`;
    botonsalir = document.querySelector('#botonsalir');
    botonsalir.addEventListener ('click',()=>clickjuegos(fondojuegos,false));
}