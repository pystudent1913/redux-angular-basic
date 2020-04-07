import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
    
    constructor(
        private router: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.router.params.subscribe( ({ id }) => {
            console.log('--->', id);
        });
    }
}
