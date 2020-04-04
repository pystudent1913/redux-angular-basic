import { createReducer, on } from '@ngrx/store';
import { setItems, unsetItems } from './ingreso-egreso.actions';

export interface State {
    key: String;
}

export const initialState: State = {
   key: 'hola',
};

const _ingresoEgresoReducer = createReducer(initialState,

    on(setItems, (state, { items }) => {
        return {
            ...state,
            items: [ ...items ]
        };
    }),

    on(unsetItems, state => {
        return {
            ...state,
            items: []
        };
    }),
);

export function ingresoEgresoReducer(state, action) {
    return _ingresoEgresoReducer(state, action);
}