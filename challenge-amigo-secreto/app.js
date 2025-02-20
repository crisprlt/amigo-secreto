// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = []; // Array que contendrá los amigos secretos
let titulo = document.querySelector('.titulo');
let listaAmigos = document.querySelector('#listaAmigos');


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value; // Obtenemos el valor del input
    if(amigo == ''){
        titulo.innerHTML = 'Debes ingresar un nombre';
        alert('Tienes que ingresar un nombre'); 
    }else{
        amigoSecreto.push(amigo); 
        LimpiarCaja(); // Limpiamos la caja de texto
        titulo.innerHTML = 'Digite el nombre de sus amigos'; // Cambiamos el título
        listaAmigos.innerHTML = ''
        for (const amigo of amigoSecreto) {
            listaAmigos.innerHTML += `${amigo}<br>`; 
        }
    }
}

function LimpiarCaja(){
    document.getElementById('amigo').value = '';
}


function sortearAmigo(){
    let resultado = document.querySelector('#resultado'); 
    let boton = document.querySelector('.button-draw'); 
    let numeroRandom = Math.floor(Math.random() * amigoSecreto.length);

    console.log(numeroRandom);
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto[numeroRandom]}`; 
    listaAmigos.innerHTML = ''; 
    boton.setAttribute('disabled', 'true'); 

}