import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.css']
})
export class InputSenhaComponent implements OnInit {
  @Input() placeholder: string = '';

  @Input() label!: string;

  @Input() controlName!: string;

  @Input() required!: boolean;

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
    }
    return null;
  }
}
