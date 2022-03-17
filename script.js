/* declarar variables */
/* Aqui estamos trayendo todo elemento video y guardamos en $video, para dar vida con JS */
const $video=document.querySelector('#video');
const $play=document.querySelector('#play');
const $pause=document.querySelector('#pause');
const $backward=document.querySelector('#backward'); //trae elemento boton atrás
const $forward=document.querySelector('#forward');//trae elemento boton atrás


/* agregar escucha de un evento cuando se hace click a los botones */
//esto es un método que tiene dos parámetros 1:click acción y 2: función que debe ejecutarse
$play.addEventListener('click',manejarPlay); 
$pause.addEventListener('click',manejarPausa);
$backward.addEventListener('click',manejarBackward);
$forward.addEventListener('click',manejarForward);

/* Función hará una acción al momento de dar click */
function manejarPlay(){
    $video.play(); //estamos llamando método play
    //imprimir texto cuando se realiza una acción y podemos ver en console de la web
    /**
     * Esto funciona como un switch ya que cuando se hace click en play 
     *  
     */
    $play.hidden=true; //modo play visible sin ocultar
    $pause.hidden=false;//esta oculto ? no, figura ícono pausa
    console.log('hizo click play');
}

/* Función para la pausa */
function manejarPausa(){
    $video.pause();
    $pause.hidden=true; //ocultate 
    $play.hidden=false; //muestrate
    console.log('hizo click pausa');
}
function manejarBackward(){ //función atrás
    $video.currentTime=$video.currentTime-10;
    console.log('para atrás 10 segundos', $video.currentTime);
}
function manejarForward(){ //función adelante
    //asignar propiedad de tiempo en js
    $video.currentTime=$video.currentTime+10; //va adelantar video en +10 segundos
    console.log('para adelante 10 segundo', $video.currentTime);
}
/**
 * brindar función a la linea de reproducción del video
*/
const $progreso =document.querySelector('#progreso');
/**escucha carga de reproduccion video */
$video.addEventListener('loadedmetadata',manejarReproducir,); 
/**escucha tiempo de actualización en la reproducción video */
$video.addEventListener('timeupdate',manejarTiempoActualizacion); 
/** Con esta función ya sabemos duración del video*/
function manejarReproducir(){
    $progreso.max =$video.duration; 
    console.log('ha cargado mi video', $video.duration);
}

function manejarTiempoActualizacion(){
    $progreso.value =$video.currentTime;
    // console.log('tiempo actual', $video.currentTime);
}
/* Vamos a llamar al evento input */
$progreso.addEventListener('input',manejarInput);

function manejarInput(){
    /*Veremos en que posición nos encontramos */
    console.log($progreso.value)
    $video.currentTime=$progreso.value;
}