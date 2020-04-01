import { AppState } from '../../app.reducer';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

    toggleAllControl: FormControl;

    constructor(
        private _store: Store<AppState>
    ) {
        this.toggleAllControl = new FormControl(
            false
        );

        this.toggleAllControl.valueChanges.subscribe(toggle => {
            console.log('toggle', toggle);
            this.toggleAll(toggle);
        });
    }

    ngOnInit(): void { }

    toggleAll(completado) {
        this._store.dispatch( actions.toggleAll({ completado }) );
    }

}
