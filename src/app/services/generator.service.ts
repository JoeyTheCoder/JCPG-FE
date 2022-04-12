import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GeneratorService {
    constructor(private http: HttpClient ) {}

    pokeApi = 'http://localhost/pokemon'

    getPokemon() {
        return this.http.get<any>(this.pokeApi);
      }
}