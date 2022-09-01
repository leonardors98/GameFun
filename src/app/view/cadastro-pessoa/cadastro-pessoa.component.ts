import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { never } from 'rxjs';
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
  questaoGroup = this.fb.group({
    titulo: [null, [Validators.required]],
    tipo: [null, [Validators.required]],
    requerido: [false],
    opcoes: [[]]
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
    let opcao = this.questaoGroup.get('opcoes')?.value
    if(Array.isArray(opcao)){
      opcao?.push(this.opcaoGroup.value)

      console.log(Array.isArray(this.opcaoGroup.value))
      console.log(opcao)
      console.log(this.opcaoGroup.value)
      console.log(this.questaoGroup.get('opcoes')?.value)
    }
    this.opcaoGroup.reset();
  }
  addQuestao() {

  }
  adicionar() {

  }
  atualizar() {

  }
}
