import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/cadastro",
    pathMatch: "full"
  },

  {
    path: "cadastro",
    component: CadastroUsuarioComponent,
  },
  {
    path: "login",
    component: LoginUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
