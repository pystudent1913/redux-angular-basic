import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import * as actions from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;

    checkCompletado: FormControl;
    txtInput: FormControl;

    editando: boolean = false;

    @ViewChild('inputEdit') inputEdit: ElementRef;

    constructor(
        private _store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.checkCompletado = new FormControl(
            this.todo.completado
        );

        this.txtInput = new FormControl(
            this.todo.text,
            Validators.required
        );

        this.checkCompletado.valueChanges.subscribe(valor => {

            this._store.dispatch( actions.toggleTodo({id : this.todo.id}) );
        });
    }

    editar() {
        console.log('apl');
        this.editando = true;

        setTimeout(() => {
            this.inputEdit.nativeElement.select();
        }, 1);
    }

    terminarEdicion() {
        this.editando = false;
    }
}
