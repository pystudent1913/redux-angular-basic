import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filtro/filtro.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
    filtroActual: actions.filtrosValidos = 'todos';

    filtros: actions.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
    pendientes: number = 0;

    constructor(
        private _store: Store<AppState>
    ) {
        // this._store.select('filtro')
        //     .subscribe(filtro => this.filtroActual = filtro);
        this._store.subscribe( state => {
            this.filtroActual = state.filtro;

            this.pendientes = state.todos.filter(todo => !todo.completado ).length;

        });
    }

    ngOnInit(): void { }

    cambiarFiltro(filtro: actions.filtrosValidos) {
        this._store.dispatch( actions.setFiltro({ filtro }) );

    }
}
