export class persona{
    id?: number; //Signo de pregunta significa que no es necesario.
    nombre: string;
    apellido: string;
    img: string;

    constructor (nombre: string, apellido: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}