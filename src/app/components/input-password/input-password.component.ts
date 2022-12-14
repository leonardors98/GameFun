import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css'],
})
export class InputPasswordComponent implements OnInit {
  @Input() placeholder: string = '';

  @Input() mask: string = '';

  @Input() label: string = '';

  @Input() type: 'text' | 'number' | 'password' | undefined;

  @Input() controlName!: string;

  @Input() required: boolean = false;

  public formControl!: FormControl;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formControl = <FormControl>(
      this.controlContainer.control?.get(this.controlName)
    );
  }

  isRequired() {
    return this.formControl.hasValidator(Validators.required);
  }

  getErrorMessage() {
    if (this.formControl.errors) {
      // switch (Object.keys(this.formControl.errors)[0]) {
      //   case 'required':
      //     return 'Campo requerido';
      //   case 'minlength':
      //     return `Tamanho mínimo é de ${this.formControl.errors.minlength.requiredLength} e o tamanho atual é ${this.formControl.errors.minlength.actualLength}`;
      //   case 'max':
      //     return `Valor máximo é de ${this.formControl.errors.max.max} `;
      //   case 'min':
      //     return `Valor mínimo é de ${this.formControl.errors.min.min} `;
      //   case 'lengthRequiredInvalid':
      //     return `Tamanho mínimo requerido`;
      //   case 'cpfNotValid':
      //     return 'CPF não é válido!';
      //   case 'email':
      //     return 'E-mail não é válido!';
      //   default:
      //     return JSON.stringify(this.formControl.errors);
      // }
    }
    return null;
  }
}
