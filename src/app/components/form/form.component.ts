import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from '../address-group/address-group.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="form-field">
        <label for="displayName">Display Name</label>
        <input type="text" id="displayName" formControlName="displayName" />
      </div>
      <app-address-group
        label="Delivery Address"
        controlKey="deliveryAddress"
      ></app-address-group>
      <app-address-group
        label="Billing Address"
        controlKey="billingAddress"
      ></app-address-group>
      <button>Submit</button>
    </form>
  `,
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form = new FormGroup({
    displayName: new FormControl(''),
  });

  submit() {
    console.log('Form content ', this.form.value);
    this.form.reset();
  }
}
