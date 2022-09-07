import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css'],
})
export class CadastroEnderecoComponent implements OnInit {
  mostrar() {
    console.log(this.pessoaFormGroup.value);
  }
  // [Validators.required]
  pessoaFormGroup = this.fb.group({
    id: [''],
    cep: [''],
    // logradouro: [''],
    // numero: [null],
    complemento: [null],
    // bairro: [''],
    estado: [''],
    cidade: [''],
  });

  constructor(
    // public activeRouter: ActivatedRoute,
    // public router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {}
}
