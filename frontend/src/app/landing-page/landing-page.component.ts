import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'] // Certifique-se de que este arquivo esteja no mesmo diretório que o componente
})
export class LandingPageComponent implements OnInit {

    projetos = [
        { id: 1, nome: 'Projeto A', descricao: 'Descrição do Projeto A' },
        { id: 2, nome: 'Projeto B', descricao: 'Descrição do Projeto B' },
        { id: 3, nome: 'Projeto C', descricao: 'Descrição do Projeto C' }
    ];

    constructor() {}

    ngOnInit(): void {}

    adicionarProjeto(): void {
        // Lógica para adicionar um novo projeto
    }

    acessarProjeto(id: number): void {
        // Lógica para acessar o projeto
    }

    editarProjeto(id: number): void {
        // Lógica para editar o projeto com o id fornecido
    }

    excluirProjeto(id: number): void {
        this.projetos = this.projetos.filter(projeto => projeto.id !== id);
    }
}
