import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  form: FormGroup;
  estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá'},
    { sigla: 'AM', nome: 'Amazonas'},
    { sigla: 'BA', nome: 'Bahia'},
    { sigla: 'CE', nome: 'Ceará'},
    { sigla: 'DF', nome: 'Distrito Federal'},
    { sigla: 'ES', nome: 'Espírito Santo'},
    { sigla: 'GO', nome: 'Goiás'},
    { sigla: 'MA', nome: 'Maranhão'},
    { sigla: 'MT', nome: 'Mato Grosso'},
    { sigla: 'MS', nome: 'Mato Grosso do Sul'},
    { sigla: 'MG', nome: 'Minas Gerais'},
    { sigla: 'PA', nome: 'Pará'},
    { sigla: 'PB', nome: 'Paraíba'},
    { sigla: 'PE', nome: 'Pernambuco'},
    { sigla: 'PI', nome: 'Piauí'},
    { sigla: 'RJ', nome: 'Rio de Janeiro'},
    { sigla: 'RN', nome: 'Rio Grande do Norte'},
    { sigla: 'RS', nome: 'Rio Grande do Sul'},
    { sigla: 'RO', nome: 'Rondônia'},
    { sigla: 'RR', nome: 'Roraima'},
    { sigla: 'SC', nome: 'Santa Catarina'},
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe'},
    { sigla: 'TO', nome: 'Tocantins'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroUsuarioService: CadastroUsuarioService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomeCompleto: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpfCnpj: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      telefone: [null, Validators.required],
      endereco: [null, Validators.required],
      uf: [null, Validators.required],
      senha: [null, Validators.required],
      confirmaSenha: [null, Validators.required],
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.form.value.senha === this.form.value.confirmaSenha) {
        this.cadastroUsuarioService.cadastrarUsuario(this.form.value).subscribe(() => {
          this.notificationService.sucesso('Usuário cadastrado com sucesso!');
          this.router.navigate(['/login']);
        });
      } else {
        this.notificationService.erro('As senhas não coincidem.');
      }
    }
  }
}
