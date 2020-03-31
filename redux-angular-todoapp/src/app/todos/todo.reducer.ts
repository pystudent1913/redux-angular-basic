import { createReducer, on } from '@ngrx/store';
import { crearTodo } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('hola')
];

const _todoReducer = createReducer(estadoInicial,
on(crearTodo, (state, { text }) => [...state, new Todo(text) ] ),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}