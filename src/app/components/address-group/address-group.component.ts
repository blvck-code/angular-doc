import { Component, inject, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-address-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  template: `
    <fieldset formGroupName="{{ controlKey }}">
      <legend>{{ label }}</legend>
      <div class="form-field">
        <label for="zipCode">Zip Code</label>
        <input formControlName="zipCode" id="zipCode" type="text" />
      </div>
      <div class="form-field">
        <label for="address">Street</label>
        <input formControlName="street" id="address" type="text" />
      </div>
    </fieldset>
  `,
  styleUrl: './address-group.component.scss',
})
export class AddressGroupComponent {
  @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl(''),
      })
    );
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl('deliveryAddress');
  }
}
