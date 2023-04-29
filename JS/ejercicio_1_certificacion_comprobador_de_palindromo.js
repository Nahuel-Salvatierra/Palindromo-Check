/*Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.
Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia
atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.
Nota: Tendrás que eliminar todos los caracteres no alfanuméricos
(puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar
si hay palíndromos.
Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.
También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.*/
const Boton = document.getElementById('boton');
const Palindromo = document.getElementById('input');
const PalindromoChecker = document.getElementById('output');

Boton.addEventListener('click', 

function () {
    var string = document.getElementById('input').value
    var palindromo;
    var quitar = /[a-z0-9]/gi;
    var palindromo = string.match(quitar).join("").toUpperCase();
    var palindromoInvertido = string.match(quitar).reverse().join("").toUpperCase();
    var verdad='';
    if (palindromo == palindromoInvertido) {
        verdad = 'Es un palindromo!';
    } else {
        verdad = 'Ups! No es un palindromo.';
    }
    PalindromoChecker.innerText = verdad
}
)

