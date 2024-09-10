import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent {
  notificacoes = [
    { solicitante: 'João Silva', descricao: 'Atualização de sistema para versão 2.0.', lida: false },
    { solicitante: 'Maria Souza', descricao: 'Manutenção programada para dia 15 de setembro.', lida: false },
    { solicitante: 'Carlos Pereira', descricao: 'Nova política de privacidade disponível.', lida: false }
  ];

  marcarComoLida(index: number): void {
    this.notificacoes[index].lida = true;
  }

  marcarTodasComoLidas(): void {
    this.notificacoes.forEach(notificacao => notificacao.lida = true);
  }
}
