import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];

  info = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit() {
    if (this.info.valid) {
      var formData = this.info.value;
      console.log(formData);
    }

    this.items = this.cartService.getItems();
  }
}
