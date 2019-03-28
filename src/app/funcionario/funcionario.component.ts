import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  public dataTable:any=[];

  constructor(
    private _funcionarioService:FuncionarioService
  ) { 

  }

  ngOnInit() {

    this.listar();

  }

  public listar():void {

    this._funcionarioService.listar().subscribe(
      data => {
        this.dataTable=data;
      },
      error => {
        console.debug(error);
      }
    )

  }

  public deletar(funcional:number) {
    this._funcionarioService.deletar(funcional).subscribe(
      data => {
        console.log(data);
        this.listar();
      }
    )
  }

}
