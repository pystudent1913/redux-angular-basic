import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] Crea Todo',
    props<{ text: string}>()
);