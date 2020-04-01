import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: filtrosValidos }>()
);

