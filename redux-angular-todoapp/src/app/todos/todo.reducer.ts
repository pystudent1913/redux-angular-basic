import { createReducer, on } from '@ngrx/store';
import { crearTodo, toggleTodo, editarTodo, deleteTodo, toggleAll } from './todo.actions';
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
    on(editarTodo, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text
                };
            } else {
                return todo;
            }
        });
    }),
    on(deleteTodo, (state, { id }) => {
        return state.filter(item => item.id !== id);
    }),
    on(toggleAll, (state, { completado }) => {
        return state.map(item => {
            return {
                ...item,
                completado
            };
        });
    })
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
};



