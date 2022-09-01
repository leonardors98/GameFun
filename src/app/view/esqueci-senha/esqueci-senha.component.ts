import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
  providers: [MessageService],
})
export class EsqueciSenhaComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  showViaService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Verifique o email e siga as orientações!',
    });
    this.messageService.add({
      severity: 'error',
      summary: 'Erro!',
      detail: 'Algum problema foi detectado, tente novamente mais tarde!',
    });
  }
}
