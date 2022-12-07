import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { links } from "./nba-links";

@Injectable()
export class NbaService{
    constructor(private http: HttpClient) { }
    BASE_URL = "https://data.nba.net"
    ENDPOINT = "/prod/v1/today.json"

    getLinks(){
        console.log('getLinks was called')
        return this.http.get<links[]>(this.BASE_URL + this.ENDPOINT);
    }
    
}