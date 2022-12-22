import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }
}
