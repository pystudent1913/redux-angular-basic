import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] Crea Todo',
    props<{ text: string}>()
);

export const toggleTodo = createAction(
    '[TODO] toggle Todo',
    props<{ id: number}>()
);
