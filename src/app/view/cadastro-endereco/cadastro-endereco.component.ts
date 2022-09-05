import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  pessoaFormGroup = this.fb.group({
    id: [],
    cep: ['', [Validators.required]],
    logradouro: ['', [Validators.required]],
    numero: [null],
    complemento: [null],
    bairro: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
  });

  opcaoGroup = this.fb.group({
    valor: ['', [Validators.required]],
  });

  constructor(
    // public activeRouter: ActivatedRoute,
    // public router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
  }

  addOpcao() {
    // this.questaoGroup.get('opcoes')?.value?.push(this.opcaoGroup.value);
    // if(Array.isArray(opcao)){
      // opcao?.push(this.opcaoGroup.value)
    // }
    this.opcaoGroup.reset();
  }
  addQuestao() {

  }
  adicionar() {

  }
  atualizar() {

  }
}
