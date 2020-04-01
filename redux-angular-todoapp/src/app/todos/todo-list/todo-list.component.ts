import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];
    filtroActual: filtrosValidos;
    // todos$: any;

    constructor(
        private _store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this._store
            .subscribe( ({ todos, filtro }) => {
                this.todos        = todos;
                this.filtroActual = filtro;
            });

        // Asi se haria con async pipe
        // this.todos$ = this._store.select('todos');

    }
}
