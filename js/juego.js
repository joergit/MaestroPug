// Para indicar que una función va a ser de primera clase se pone en mayúscula el 1er. carácter del nombre de la función.

function Jugador (nombre) { //Como crear funciones de primera clase 'J'
    this.nombre = nombre;
    this.pv = 100; //Puntos de vida
    this.sp = 100; //Puntos de poder

    this.curar = function (jugadorObjetivo) { //Creación del primer método.
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20; // Sumamos puntos por referencia.
        } else{
            console.info(this.nombre + " no tiene sp.");
        }

        this.estado (jugadorObjetivo); //Llamamos a la función de primera clase
    }

    this.tiraFlecha = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;
        } else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " murio!!!");
        }

        //jugadorObjetivo.pv -= 40;
        this.estado(jugadorObjetivo);
    }

    this.estado = function (jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo); //Imprime el jugador por referencia.
    }

    this.arrepentido = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv > 20) {
            ;
        } 
    }

};

var gandalf = new Jugador("Gandalf"); //Definición de variables tipo objeto.
var legolas = new Jugador("Legolas");
var jesus = new Jugador("Jesús");

console.log( gandalf );
console.log( legolas );

//gandalf.curar(legolas); // Empezamos a utilizar los métodos

// console.log( gandalf );
// console.log( legolas );