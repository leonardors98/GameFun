import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, Validators } from '@angular/forms';
import cidades from 'src/assets/cidades.json';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  results: any[] = [];
  lista: any = {};

  @Input() tipo: 'estado' | 'cidade' | undefined;
  @Input() placeholder: string = 'busque algo';
  @Input() controlName!: string;
  @Input() siglaEstado: string = 'AC';

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formControl = <FormControl>(
      this.controlContainer.control?.get(this.controlName)
    );
    console.log(cidades.estados);
    this.lista = cidades.estados;
    switch (this.tipo) {
      case 'estado':
        this.lista.forEach((lista: any) => {
          this.results.push(lista.nome);
        });
        break;
      case 'cidade' || this.siglaEstado != '':
        this.encontracidade(this.siglaEstado);
        break;
    }
  }

  public formControl!: FormControl;
  isRequired() {
    return this.formControl.hasValidator(Validators.required);
  }
  encontracidade(estado: any) {
    this.lista.forEach((lista: any) => {
      if (lista.sigla === estado) {
        this.results = lista.cidades;
        console.log(this.results);
      }
    });
    console.log(this.results);
  }
}
