import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SquadService {

    headers = new HttpHeaders().set('Content-Type','application/json');

    constructor(private httpClient: HttpClient) { 

    }

    listar():Observable<any> {
        return this.httpClient.get<Observable<any>>('http://localhost:8080/squad/listar')
    }

    

}