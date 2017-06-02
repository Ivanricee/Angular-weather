export class Xmen{ //la palabra resevada export sirve para que pueda ser heredada
  nombre:string;
  clave:string;

  constructor(nombre:string, clave:string){
    this.nombre = nombre;
    this.clave = clave;
  }

  imprimir(){
    console.log(`${ this.nombre } - ${this.clave}`);
  }
}

export class Hija{

}
