//variables
var nombre = "peter";
var apellid = "peterson";
var numer = 234;
var booleano = true;
var hoy = new Date();
hoy = new Date("2020-10-21");
var cualquiera;
//objetos
var spiderman = {
    nombre: "peter",
    edad: 20
};
//################################TEMPLATES###############
var textto = "Hola, " + nombre + " " + apellid;
console.log(textto);
//################# FUNCIONES #########################
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "La funcion"; }
    var message;
    if (momento) {
        message = quien + " activ\u00F3: " + objeto + " en " + momento;
    }
    else {
        message = quien + " activ\u00F3: " + objeto;
    }
    console.log(message, " ", "tarde");
}
activar("Someone");
//############################################funcion normal y de flecha##########################################
//normal
//###################################### funcioens normales no funcionan para instanciar con this
var nombrel = "pedro";
var hulk = {
    nombrel: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombrel + " smash!!");
        }, 1500);
    }
};
hulk.smash();
//###########################################
/*
*
*/
var miFuncion = function (a, b) {
    return a + b;
};
var miFuncion2 = function (nombre) {
    return nombre.toUpperCase();
};
// flecha
//###################################### funcioens con flecha permiten instanciar con this
var nombrel2 = "pedra";
var hulk2 = {
    nombrel2: "hulko",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombrel2 + " smash!!"); }, 1500);
    }
};
hulk2.smash();
//###########################################
/*
*
*/
var miFuncionF = function (a, b) { return a + b; };
var miFuncionF2 = function (nombre) {
    return nombre.toUpperCase();
};
