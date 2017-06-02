function enviarMisions(xmen) {
    console.log("enviando a: " + xmen.nombres);
}
function enviarCuartels(xmen) {
    console.log("enviando a cuartel a: " + xmen.nombres);
}
var wolverine = {
    nombres: "wpolverine",
    poders: "regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
