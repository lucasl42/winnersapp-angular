import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FuncionarioService {

    // headers = new HttpHeaders().set('Content-Type','application/json');

    constructor(private httpClient: HttpClient) {

    }

    listar(): Observable<Funcionario[]> {
        return this.httpClient.get<Funcionario[]>('http://localhost:8080/funcionario/listar')
    }

    alterar(funcionario: Funcionario): Observable<any> {
        return this.httpClient.put<Observable<any>>('http://localhost:8080/funcionario/alterar', funcionario, httpOptions);
    }

    buscarFuncionario(id: number): Observable<any> {
        return this.httpClient.get<Observable<any>>('http://localhost:8080/funcionario/' + id);
    }

    cadastrar(funcionario: Funcionario): Observable<Funcionario> {
        return this.httpClient.post<Funcionario>('http://localhost:8080/funcionario/cadastrar', funcionario, httpOptions);
    }

    deletar(funcional: number): Observable<any> {
        return this.httpClient.delete<Observable<any>>('http://localhost:8080/funcionario/deletar/' + funcional);
    }

    getPerfis(): Observable<string[]> {
        return this.httpClient.get<string[]>('http://localhost:8080/funcionario/perfis')
    }

}