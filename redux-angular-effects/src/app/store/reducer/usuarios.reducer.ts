import { createReducer, on } from '@ngrx/store';
import { 
    cargarUsuarios,
    cargarUsuariosError,
    cargarUsuariosSuccess
} from '../actions';

export interface UsuariosState {
    users: [];
    loaded: boolean;
    loading: boolean;
    error: boolean;
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: false
}

const _counterReducer = createReducer(usuariosInitialState,

    on(cargarUsuarios, state => {
        return {
            ...state,
            loading: true
        };
    }),
    on(cargarUsuariosSuccess, (state, { usuarios }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            users: [...usuarios]
        };
    }),
    on(cargarUsuariosError, (state, { payload }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error: payload
        };
    }),

);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}