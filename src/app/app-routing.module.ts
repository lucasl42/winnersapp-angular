import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCadastrarComponent } from './funcionario-cadastrar/funcionario-cadastrar.component';

const routes: Routes = [
  {

  path: 'funcionario',
  component: FuncionarioComponent
},
{
  path:'funcionario-cadastrar',
  component: FuncionarioCadastrarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
