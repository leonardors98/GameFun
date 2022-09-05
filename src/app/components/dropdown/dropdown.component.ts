import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, Validators } from '@angular/forms';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  cities: City[];
  @Input() controlName!: string;
  constructor(public controlContainer: ControlContainer) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  public formControl!: FormControl;

  ngOnInit() {
    this.formControl = <FormControl>(
      this.controlContainer.control?.get(this.controlName)
    );
  }

  isRequired() {
    return this.formControl.hasValidator(Validators.required);
  }
}
