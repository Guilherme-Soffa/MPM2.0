import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  projetos = [
    { nome: 'Projeto A', descricao: 'Descrição do Projeto A' },
    { nome: 'Projeto B', descricao: 'Descrição do Projeto B' },
    { nome: 'Projeto C', descricao: 'Descrição do Projeto C' }
  ];

  isModalOpen = false;
  novoProjeto = { nome: '', descricao: '' };
  
  constructor(private router: Router) {}

  acessarProjeto(index: number) {
    this.router.navigate(['/notifications']);
    //console.log('Acessar projeto', this.projetos[index]);
  }

  editarProjeto(index: number) {
    console.log('Editar projeto', this.projetos[index]);
  }

  excluirProjeto(index: number) {
    this.projetos.splice(index, 1);
  }

  abrirModal() {
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }

  adicionarProjeto() {
    this.projetos.push({ ...this.novoProjeto });
    this.novoProjeto = { nome: '', descricao: '' };
    this.fecharModal();
  }

}
