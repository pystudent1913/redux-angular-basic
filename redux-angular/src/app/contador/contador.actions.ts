import { createAction } from '@ngrx/store';

// export const increment = createAction('[Nombre componente] Increment');
export const increment = createAction('[Contador] Incrementar');
export const decrement = createAction('[Contador] Decrementar');
export const multiply = createAction('[Contador] Multiplicar');
export const divider = createAction('[Contador] Dividir');
export const reset     = createAction('[Contador] Reset');
