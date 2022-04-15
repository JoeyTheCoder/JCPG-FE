import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GeneratorService {
  constructor(private http: HttpClient) { }

  pokeApi = 'http://localhost/pokemon'

  getPokemon() {
    var arr = [];
    while (arr.length < 6) {
      var r = Math.floor(Math.random() * 898) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);



    var pokemon1 = arr[0]

    return this.http.get<any>(this.pokeApi +'/'+ pokemon1);
  }
}