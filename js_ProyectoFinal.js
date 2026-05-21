//Variableshelldivers 2 propaganda trailerd
const juegos = document.querySelectorAll('.juegos');
let botonsalir="";
let botonsalir2 = document.querySelector('.botonsalir2');
let botonsalir3 = document.querySelector('.botonsalir3');
const fondojuegos = document.getElementById('fondojuegos');
const juegosmodal = document.getElementById('juegosmodal');
const biblioteca = document.querySelector('.bbteca');
const fondobbteca = document.querySelector('.fondobbteca');
const bbtecamodal = document.querySelector('.bbtecamodal');
const cartera = document.querySelector('.cartera');
const fondocartera = document.querySelector('.fondocartera');
const carteramodal = document.querySelector('carteramodal');
const zonasuperior = document.querySelector('.zonasuperior');
const imgpequeñas = document.querySelectorAll('.imgpequeñas');
const saldo = document.querySelector('.saldo');
const ingresos = document.querySelector('.ingresos');
let textocartera = document.querySelector('.textocartera');
let saldovisible = document.querySelector('.saldovisible');
const botoningresar = document.querySelector('.botoningresar');
const selectmoneda = document.querySelector('.moneda');

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
biblioteca.addEventListener ('click',()=>clickjuegos(fondobbteca,true));
botonsalir2.addEventListener ('click',()=>clickjuegos(fondobbteca,false));
cartera.addEventListener ('click',()=>clickcartera(fondocartera,true));
botonsalir3.addEventListener ('click',()=>clickjuegos(fondocartera,false));
botoningresar.addEventListener ('click',ingresarsaldo);


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

if(saldo.value==""){
    saldo.value=0;
    saldovisible.textContent=`0${selectmoneda.value}`;
}



//Funciones
function cargar(){
    
    for(let i=0;i<juegos.length;i++){
       juegos[i].addEventListener ('click',()=>clickjuegos(fondojuegos,true));
    }
}

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
    let botoncomprar = document.querySelector('#botoncomprar');
    botoncomprar.addEventListener ('click',()=>comprarjuego(juego));
}

function clickbiblioteca(ventanabbteca,entrar){
    if(entrar===true){
        ventanabbteca.classList.add('activo');
    }else{
        ventanabbteca.classList.remove('activo');
    }
}
function clickcartera(ventanacartera,entrar){
    if(entrar===true){
        ventanacartera.classList.add('activo');
    }else{
        ventanacartera.classList.remove('activo');
        textocartera.textContent="";
        ingresos.value="";
        alert('nose');
    }
}

function comprarjuego(juegoseleccionado) {
    const nombreJuego = juegoseleccionado.getAttribute("data-nombre");
    const rutaImagen = juegoseleccionado.getAttribute("data-imagen");


    const existe = zonasuperior.querySelector(`img[data-nombre="${nombreJuego}"]`);

    
    if (existe) {
        alert('Este juego ya ha sido añadido.');
        return;
    }else if(Number(saldo.value)<Number(juegoseleccionado.getAttribute('data-valor'))){
        alert('Saldo insuficiente.');
        return;
    }else if(Number(saldo.value)>=Number(juegoseleccionado.getAttribute('data-valor'))){
        alert('Juego comprado!');
        saldoactual = Number(saldo.value) - Number(juegoseleccionado.getAttribute('data-valor'));
        saldo.value = saldoactual;
        saldovisible.textContent = `${saldoactual}${selectmoneda.value}`;
    }

    const nuevaimg = document.createElement('img');
    nuevaimg.classList.add('imgpequeñas');
    nuevaimg.setAttribute("src", rutaImagen);
    nuevaimg.setAttribute("data-nombre", nombreJuego); 
    zonasuperior.appendChild(nuevaimg);
}

function ingresarsaldo(){
    let saldoactual = Number(saldo.value);
    if(Number(ingresos.value)<0){
        textocartera.textContent = "El ingreso no puede ser negativo";
    }else if(Number(ingresos.value==0)){
        textocartera.textContent = "Porfavor introduce una cantidad a ingresar";
    }else{
        saldoactual = Number(saldo.value) + Number(ingresos.value);
        saldo.value = saldoactual;
        saldovisible.textContent = `${saldoactual}${selectmoneda.value}`;
        
    }
} 
