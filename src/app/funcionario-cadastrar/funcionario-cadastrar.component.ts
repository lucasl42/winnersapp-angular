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

  public funcionario:Funcionario = new Funcionario();
  public squads:Squad[] = [];
  public perfis:string[] = [];

  public titulo:String;
  
  constructor(
    private _funcionarioService:FuncionarioService,
    private activatedRoute: ActivatedRoute,
    private _squadService:SquadService
  ){
    this.activatedRoute.queryParams.subscribe(parametro=>{
      if(parametro["funcional"] == undefined){
        this.titulo = "Novo Cadastro";
      }
      else{
        this.titulo = "Editar Cadastro";
        
        this.buscar(Number(parametro["funcional"]))
      }
    });  
  }

  ngOnInit() {
    this.buscarSquad();
    this.buscarPerfis();
    this.funcionario.squad = new Squad();

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

  buscarPerfis(){
    this._funcionarioService.getPerfis().subscribe(
      data => {
        this.perfis=data;
      }
    )
  }

  salvar(){

    if (this.funcionario.funcional == undefined) {
      this._funcionarioService.cadastrar(this.funcionario).subscribe(
        data => {
          console.log("resultado: "+data);
        },
        error => {
          console.log("erro: "+error);
        }
      );
    } else {
      this._funcionarioService.alterar(this.funcionario).subscribe(
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
