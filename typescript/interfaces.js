function enviarMision(xmen) {
    console.log("enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("enviando a cuartel a: " + xmen.nombre);
}
var wolverine = {
    nombre: "wpolverine",
    poder: "regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
