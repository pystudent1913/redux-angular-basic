import { createReducer, on } from '@ngrx/store';
import { crearTodo, toggleTodo } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('hola')
];

const _todoReducer = createReducer(estadoInicial,
    on(crearTodo, (state, { text }) => [...state, new Todo(text) ] ),
    on(toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                };
            } else {
                return todo;
            }

        });
    }),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}