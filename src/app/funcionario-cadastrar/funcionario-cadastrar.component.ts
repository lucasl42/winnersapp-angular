import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';
import { ActivatedRoute } from '@angular/router';
import { Squad } from '../squad';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-funcionario-cadastrar',
  templateUrl: './funcionario-cadastrar.component.html',
  styleUrls: ['./funcionario-cadastrar.component.css']
})
export class FuncionarioCadastrarComponent implements OnInit {

  public funcionario:Funcionario = new Funcionario(0,"","","",new Squad(0,"",null));

  public squads:Squad[] = [];

  public funcional:number = 0;

  constructor(
    private _funcionarioService:FuncionarioService,
    private activatedRoute: ActivatedRoute,
    private _squadService:SquadService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['funcional']) {
        this.buscar(Number(params['funcional']));
        this.funcional = Number(params['funcional']);
      }
  });
  }

  ngOnInit() {
    this.buscarSquad();
  }

  buscar(funcional:number) {
    console.log(funcional);
    this._funcionarioService.buscarFuncionario(funcional).subscribe(
      data => {
        this.funcionario = data;
      }
    )
  }

  buscarSquad(){
    this._squadService.listar().subscribe(
      data => {
        this.squads=data;
      }
    )
  }

  salvar(){
    if (this.funcional != 0) {
      this._funcionarioService.alterar(this.funcionario).subscribe(
        data => {
          console.log("resultado: "+data);
        },
        error => {
          console.log("erro: "+error);
        }
      );
    } else {
      this._funcionarioService.cadastrar(this.funcionario).subscribe(
        data => {
          console.log("resultado: "+data);
        },
        error => {
          console.log("erro: "+error);
        }
      );
    }

    window.location.href = "/funcionario"; 
  }


}
