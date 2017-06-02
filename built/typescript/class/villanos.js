System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Villanos;
    return {
        setters: [],
        execute: function () {
            Villanos = (function () {
                function Villanos(nombre, plan) {
                    this.nombre = nombre;
                    this.plan = plan;
                }
                Villanos.prototype.imprimir = function () {
                    console.log(this.nombre + " - " + this.plan);
                };
                return Villanos;
            }());
            exports_1("Villanos", Villanos);
        }
    };
});
