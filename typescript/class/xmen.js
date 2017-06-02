"use strict";
exports.__esModule = true;
var Xmen = (function () {
    function Xmen(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    Xmen.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    return Xmen;
}());
exports.Xmen = Xmen;
var Hija = (function () {
    function Hija() {
    }
    return Hija;
}());
exports.Hija = Hija;
