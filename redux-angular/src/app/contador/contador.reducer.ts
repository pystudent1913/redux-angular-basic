import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './contador.actions';


export const initialState = 0;

const _contadorReducer = createReducer(initialState,
    on(increment, state => state + 1), // Cuando aparece increment el estado se aumenta en 1
    on(decrement, state => state - 1),
    on(reset, state => 0)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}


// export function contadorReducer(
//     state: number = 10,
//     action: Action
// ) {

//     switch ( action.type ) {

//         case increment.type:
//             return state + 1;

//         case decrement.type:
//             return state - 1;

//         default:
//             return state;
//     }
// }

