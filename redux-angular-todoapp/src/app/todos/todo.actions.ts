import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] Crea Todo',
    props<{ text: string}>()
);

export const toggleTodo = createAction(
    '[TODO] toggle Todo',
    props<{ id: number}>()
);


export const editarTodo = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, text: string}>()
);

export const deleteTodo = createAction(
    '[TODO] Eliminar Todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] Toggle all',
    props<{ completado: boolean }>()
);


export const clearCompleted = createAction(
    '[TODO] Clear completed'
);
