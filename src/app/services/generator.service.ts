import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { pokemon } from "./pokemon";

@Injectable()
export class GeneratorService {
  constructor(private http: HttpClient) { }


  pokeApi = 'http://localhost/pokemon'


  pokemon1!: number;
  pokemon2!: number;
  pokemon3!: number;
  pokemon4!: number;
  pokemon5!: number;
  pokemon6!: number;


  generateId(){
    var arr = [];
    while (arr.length < 6) {
      var r = Math.floor(Math.random() * 898) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);

    this.pokemon1 = arr[0]
    this.pokemon2 = arr[1]
    this.pokemon3 = arr[2]
    this.pokemon4 = arr[3]
    this.pokemon5 = arr[4]
    this.pokemon6 = arr[5]
  }


  getPokemon1() {
    console.log('pokemon1 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon1);
  }
  getPokemon2() {
    console.log('pokemon2 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon2);
  } 
  getPokemon3() {
    console.log('pokemon2 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon3);
  } 
  getPokemon4() {
    console.log('pokemon2 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon4);
  } 
  getPokemon5() {
    console.log('pokemon2 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon5);
  } 
  getPokemon6() {
    console.log('pokemon2 was called')
    return this.http.get<pokemon[]>(this.pokeApi +'/'+ this.pokemon6);
  }
}