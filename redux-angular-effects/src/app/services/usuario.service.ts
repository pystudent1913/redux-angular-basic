import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url: string = 'https://reqres.in/api33';

    constructor(
        private http: HttpClient
    ) {

    }

    getUsers() {
        return this.http.get(`${this.url}/users?per_page=6`)
                    .pipe(
                        map( ({ data }: any) => data)
                    );
    }

}
