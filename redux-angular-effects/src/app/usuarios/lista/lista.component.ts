import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.model';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
    usuarios: Usuario[] = [];

    constructor(
        private usuarioSrv: UsuarioService
    ) { }

    ngOnInit(): void {

        this.usuarioSrv.getUsers()
            .subscribe( res => this.usuarios = res);
    }
}
