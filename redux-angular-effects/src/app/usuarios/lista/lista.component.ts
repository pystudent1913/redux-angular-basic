import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
    constructor(
        private usuarioSrv: UsuarioService
    ) { }

    ngOnInit(): void {

        this.usuarioSrv.getUsers()
            .subscribe( res => {
                console.log('res', res)
            });
    }
}
