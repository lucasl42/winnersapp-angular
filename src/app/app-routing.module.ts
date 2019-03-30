import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCadastrarComponent } from './funcionario-cadastrar/funcionario-cadastrar.component';
import { SsComponent } from './ss/ss.component';
import { SquadComponent } from './squad/squad.component';

const routes: Routes = [
  {

  path: 'funcionario',
  component: FuncionarioComponent
},
{
  path:'funcionario-cadastrar',
  component: FuncionarioCadastrarComponent
},
{
  path: 'squad',
  component: SquadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
