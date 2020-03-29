import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Incrementar');
export const decrement = createAction('[Contador] Decrementar');
export const multiply  = createAction(
    '[Contador] Multiplicar',
    props<{numero : number}>() // Esta sintaxis indica que le mandare como propiedad
);
export const divider   = createAction(
    '[Contador] Dividir',
    props<{numero : number}>()
);
export const reset     = createAction('[Contador] Reset');
