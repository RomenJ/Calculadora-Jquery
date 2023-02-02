/**
 * Para el desarrollo de esta calculadora, dentro de un trabajo de 1º de FP DAW Semipresencial, 
 * Se han consultado diversos vídeos siendo prácticamente el único soporte pedagógico. Gracias a ellos/as por su contribución:
 * https://www.youtube.com/watch?v=7YDagj3cVAk
 * 
 * De todos los modelos consultados, el que más me ha gustado es el 
Mtra Yuri Coronado al cual agradezco enormemente su contribución.
 * 
 * https://www.youtube.com/watch?v=KEgAbDbYlIQ
 * 
 */

function insertar(num) {
    //Esto es una durectiva: 
    var value = $('.display').val();
    $('.display').val(value + num);
}

function c() {
    $('.display').val(' ');

}

function del() {

    var value = $('.display').val();
    //   $('.display').val(value.substring(0, value.lenght - 1));
    $('.display').val(value.toString().slice(0, -1));
    toString().slice(0, -1);
}

function igual() {

    $('.display').val(eval($('.display').val()));


}
/*
function setTitle(cadena) {

    cadena = 'Calculadora IES EL Rincón';
    $('.cabecera').append("<p>" + cabena + "</p>");
}


$(document).ready(function() {
    $(".cabecera").append(" <b>Calculadora IES EL RINCÓN");

});

*/