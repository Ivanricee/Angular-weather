var avenger = {
    nombre: "steve",
    subnombre: "capitan america",
    poder: "Fuerza"
};
//Asignacion comun de datos de un objeto a variables
//let nombre = avenger.nombre;
//Destructuracion de objetos: no importa el orden de las propiedades
var string = avenger.nombre, subnombre = avenger.subnombre, poder = avenger.poder;
//######################    //Destructuracion de arreglos.     #######################
var avenge = ["Thor", "Steve", "Tony"];
var thor = avenge[0], capi = avenge[1], ironman = avenge[2];
console.log(thor, capi, ironman);
//#########################################  PROMESAS   ##########################################################
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina mal
        //  resolve()
        //Temrina mal
        reject();
    }, 1500);
});
console.log("paso 1");
//prom1.then(resolve, reject)
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.log("Ejecutarme si todo sale mal!");
});
console.log("paso 2");
