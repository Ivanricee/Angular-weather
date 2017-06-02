//variables
let nombre:string = "peter";
let apellid:string = "peterson";
let numer:number = 234;
let booleano:boolean = true;

let hoy:Date = new Date();

hoy = new Date("2020-10-21");

let cualquiera:any;

//objetos
let spiderman = {
  nombre: "peter",
  edad: 20
}
//################################TEMPLATES###############
let textto = `Hola, ${ nombre } ${ apellid }`;

console.log(textto);
//################# FUNCIONES #########################
function activar( quien:string,
                  objeto:string = "La funcion",
                  momento?:string){
  let message:string;

if(momento){
  message = `${ quien } activó: ${ objeto } en ${ momento }`;
}else{
  message = `${ quien } activó: ${ objeto }`;
}


  console.log(message," ", "tarde");
}

activar("Someone");
//############################################funcion normal y de flecha##########################################

//normal
//###################################### funcioens normales no funcionan para instanciar con this
let nombrel = "pedro"
let hulk = {
  nombrel: "Hulk",
  smash(){
    setTimeout(function(){
      console.log(this.nombrel + " smash!!");
    },1500);

  }
}
hulk.smash();
//###########################################
/*
*
*/

let miFuncion = function( a:number, b:number  ){
  return a + b;
}
let miFuncion2 = function(nombre:string){
  return nombre.toUpperCase();
}
// flecha

//###################################### funcioens con flecha permiten instanciar con this
let nombrel2 = "pedra"
let hulk2 = {
  nombrel2: "hulko",
  smash(){
    setTimeout( ()=>console.log(this.nombrel2 + " smash!!"),1500);
  }
}
hulk2.smash();
//###########################################
/*
*
*/
let miFuncionF = ( a:number, b:number ) => a + b;
let miFuncionF2 = ( nombre:string ) =>{
  return nombre.toUpperCase();
};
