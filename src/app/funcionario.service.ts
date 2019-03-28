import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable()
export class FuncionarioService {

    headers = new HttpHeaders().set('Content-Type','application/json');

    constructor(private httpClient: HttpClient) { 

    }

    listar():Observable<any> {
        return this.httpClient.get<Observable<any>>('http://localhost:8080/funcionario/listar')
    }
    
    alterar(funcionario:Funcionario):Observable<any> {
        return this.httpClient.put<Observable<any>>('http://localhost:8080/funcionario/alterar',funcionario,{headers:this.headers});
    }
    
    buscarFuncionario(id:number):Observable<any> {
        return this.httpClient.get<Observable<any>>('http://localhost:8080/funcionario/'+id);
    }
    
    cadastrar(funcionario:Funcionario):Observable<any> {
        return this.httpClient.put<Observable<any>>('http://localhost:8080/funcionario/cadastrar',funcionario,{headers:this.headers});
    }
    
    deletar(funcional:number):Observable<any> {
        return this.httpClient.delete<Observable<any>>('http://localhost:8080/funcionario/deletar/'+funcional);
    }

}