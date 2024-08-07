import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../modules/usuario-dto';
import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  form: FormGroup;
  router: Router;

  constructor(
    router: Router,
    readonly formBuilder: FormBuilder,
    private cadastroUsuarioService: CadastroUsuarioService,
    private notificationService: NotificationService,
  ) {
    this.router = router;
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  submit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.trataDados();
      this.cadastroUsuarioService.cadastrarUsuario(this.trataDados()).subscribe(r=>{
        this.router.navigate(["/login"])
        this.notificationService.sucesso('Usuario Cadastrado com Sucesso!')
      });
    }
  }
  trataDados(): UsuarioDTO{
    const dados = this.form.controls
    return {
      usuario: dados.usuario.value,
      password: dados.password.value
    } as UsuarioDTO;
  }
}
