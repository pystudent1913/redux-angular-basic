import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];

    // todos$: any;

    constructor(
        private _store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this._store.select('todos')
            .subscribe(todos => this.todos = todos);

        // Asi se haria con async pipe
        // this.todos$ = this._store.select('todos');

    }
}
