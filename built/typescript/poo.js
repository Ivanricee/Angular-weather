System.register(["./class/xmen.class"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var xmen_class_1, wolverine;
    return {
        setters: [
            function (xmen_class_1_1) {
                xmen_class_1 = xmen_class_1_1;
            }
        ],
        execute: function () {
            wolverine = new xmen_class_1.Xmen("Logan", "Wolverine");
            wolverine.imprimir();
        }
    };
});
