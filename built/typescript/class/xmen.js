System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Xmen, Hija;
    return {
        setters: [],
        execute: function () {
            Xmen = (function () {
                function Xmen(nombre, clave) {
                    this.nombre = nombre;
                    this.clave = clave;
                }
                Xmen.prototype.imprimir = function () {
                    console.log(this.nombre + " - " + this.clave);
                };
                return Xmen;
            }());
            exports_1("Xmen", Xmen);
            Hija = (function () {
                function Hija() {
                }
                return Hija;
            }());
            exports_1("Hija", Hija);
        }
    };
});
