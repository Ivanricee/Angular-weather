  interface Xmen{
    nombres:string,
    poders:string
  }


  function enviarMisions(xmen: Xmen){//xmen : {nombre:string} las llaves sirven para saber que un objeto tiene una propiedad con ese nombre en este caso la propuedad es "nombre"
    console.log("enviando a: " + xmen.nombres);
  }

  function enviarCuartels(xmen: Xmen){
    console.log("enviando a cuartel a: " + xmen.nombres);
  }
  let wolverine:Xmen = {
    nombres: "wpolverine",
    poders: "regeneracion"
  }

  enviarMision(wolverine);
  enviarCuartel(wolverine);
