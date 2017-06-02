let avenger = {
  nombre: "steve",
  subnombre: "capitan america",
  poder: "Fuerza"
}

//Asignacion comun de datos de un objeto a variables
//let nombre = avenger.nombre;

//Destructuracion de objetos: no importa el orden de las propiedades
let {nombre:string, subnombre, poder} = avenger;


//######################    //Destructuracion de arreglos.     #######################
 let avenge:string[] = ["Thor","Steve","Tony"];
 let [thor, capi, ironman ] = avenge;

 console.log(thor, capi, ironman);

 //#########################################  PROMESAS   ##########################################################

 let prom1 = new Promise( function( resolve, reject ){
    setTimeout( ()=>{
      console.log("Promesa terminada");
      //Termina mal
    //  resolve()

      //Temrina mal
      reject()
    },1500);
 });

console.log("paso 1");
//prom1.then(resolve, reject)
prom1.then( function(){
  console.log("Ejecutarme cuando se termine bien!");
  },
  function(){
    console.log("Ejecutarme si todo sale mal!");
  }
);

console.log("paso 2");
