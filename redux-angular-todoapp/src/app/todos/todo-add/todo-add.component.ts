import { AppState } from '../../app.reducer';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
    txtInput: FormControl;

    constructor(
        private _store: Store<AppState>
    ) {
        this.txtInput = new FormControl(
            '',
            Validators.required
        );
    }

    ngOnInit(): void { }

    agregar() {
        if (this.txtInput.invalid) {
            return ;
        }

        const texto = this.txtInput.value;

        this._store.dispatch( actions.crearTodo(texto) );

        this.txtInput.reset();
    }
}
