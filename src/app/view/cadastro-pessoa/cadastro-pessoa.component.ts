import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { createPrinter } from 'typescript/lib/tsserverlibrary';
// import { CepService } from '../../../cep.service';
// import { PessoaService } from '../../../pessoa.service';
// import { MyValidators } from '../../../utils/myvalidators';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css'],
})
export class CadastroPessoaComponent implements OnInit {

  pessoaFormGroup = this.fb.group({
    id: [],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    sobrenome: ['', [Validators.required]],
    cpf: ['',[Validators.required,],],
    telefone: [[], [Validators.required]],


    // cep: ['', [Validators.required]],
    // logradouro: ['', [Validators.required]],
    // numero: [null],
    // bairro: ['', [Validators.required]],
    // cidade: ['', [Validators.required]],
    // estado: ['', [Validators.required]],
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
