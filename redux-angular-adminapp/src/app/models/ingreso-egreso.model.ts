export class IngresoEgreso {

    constructor(
        public descripcion: string,
        public monto: number,
        public tipo: tipoIngresoEgreso,
        // public uid?: string,
    ) {

    }


}

type tipoIngresoEgreso = 'ingreso' | 'egreso' | string;
