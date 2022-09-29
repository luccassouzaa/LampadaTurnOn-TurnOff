const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lamp');

function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn (){
    if ( !isLampBroken()){
        lamp.src = './assets/ligada.jpg';
    } 
}

function lampOff(){
    if ( !isLampBroken()){
        lamp.src = './assets/desligada.jpg';
    } 
}

function lampBroken(){
    lamp.src = './assets/quebrada.jpg';
}

turnOff.addEventListener('click', lampOff);
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);