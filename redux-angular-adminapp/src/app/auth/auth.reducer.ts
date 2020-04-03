import { createReducer, on } from '@ngrx/store';
import { setUser, unsetUser } from './auth.actions';
import { Usuario } from '../models/usuario.model';

export interface State {
    user: Usuario;
}

export const initialState: State = {
    user: null
};

const _authReducer = createReducer(initialState,

    on(setUser, (state, { user }) => {
        return {
            ...state,
            user: { ...user}
        };
    }),
    on(unsetUser, state => {
        return {
            ...state,
            user: null
        };
    }),

);

export function authReducer(state, action) {
    return _authReducer(state, action);
}