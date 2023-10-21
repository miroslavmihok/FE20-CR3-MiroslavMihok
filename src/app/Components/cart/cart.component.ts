import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  info = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.info.valid) {
      var formData = this.info.value;
      console.log(formData);
    }
  }
}
