import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply, divider } from './contador.actions';


export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on(increment, state => state + 1), // Cuando aparece increment el estado se aumenta en 1
    on(decrement, state => state - 1),
    on(reset, state => initialState),
    on(multiply, (state, { numero }) => state * numero ),
    // Estructura
    // on(label, function() {})
    on(divider, (state, { numero }) => state / numero)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}


/***
 * Como se veeria la funcion por detras de manera simplificada
 *

export function contadorReducer(
    state: number = 10,
    action: Action
) {

    switch ( action.type ) {

        case increment.type:
            return state + 1;

        case decrement.type:
            return state - 1;

        default:
            return state;
    }
}

 */
