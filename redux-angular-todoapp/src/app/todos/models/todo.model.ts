
// Usamos una clase como modelo para las referencias
export class Todo {
    public id: number;
    public text: string;
    public completado: boolean;

    constructor(
        texto: string
    ) {
        this.text = texto;
        this.id = new Date().getTime();

        this.completado = false;
    }
}
