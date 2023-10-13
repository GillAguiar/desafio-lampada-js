var turnonoff = document.getElementById('turnonoff');
var lamp = document.getElementById('lamp');

function lampisbroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampon (){
    if (!lampisbroken () ) {
    lamp.src = 'imagens/ligada.jpg'
    }
}

function lampoff (){
    if (!lampisbroken () ) {
    lamp.src = 'imagens/desligada.jpg'
    }
}

function lampbroken (){
    lamp.src = 'imagens/quebrada.jpg'
}

function lamponoff (){
    if (turnonoff.textContent == 'Ligar') {
        lampon()
        turnonoff.textContent = 'Desligar'
    } else { 
        lampoff()
        turnonoff.textContent = 'Ligar'
    }
}

turnonoff.addEventListener ('click', lamponoff);
lamp.addEventListener ('mouseover', lampon);
lamp.addEventListener ('mouseleave', lampoff);
lamp.addEventListener ('dblclick', lampbroken)