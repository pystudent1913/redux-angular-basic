import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

    user : Usuario;


    constructor(
        private router: ActivatedRoute,
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {

        this.store.select('usuario').subscribe( ({ user}) => {
            this.user = user;
        })

        this.router.params.subscribe( ({ id }) => {
            console.log('--->', id);
            this.store.dispatch( cargarUsuario({ id }) );
        });
    }
}
