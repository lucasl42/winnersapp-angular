import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCadastrarComponent } from './funcionario-cadastrar/funcionario-cadastrar.component';
import { FuncionarioService } from './funcionario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SquadService } from './squad.service';
import { SquadComponent } from './squad/squad.component';
import { SquadCadastrarComponent } from './squad-cadastrar/squad-cadastrar.component';
import { SsComponent } from './ss/ss.component';
import { SsCadastrarComponent } from './ss-cadastrar/ss-cadastrar.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    FuncionarioCadastrarComponent,
    SquadComponent,
    SquadCadastrarComponent,
    SsComponent,
    SsCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    FuncionarioService,
    SquadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
