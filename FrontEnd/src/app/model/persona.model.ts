export class Persona{
    id?: number; //Signo de pregunta significa que no es necesario.
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor (nombre: string, apellido: string, descripcion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}