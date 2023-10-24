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

  itemsQty: number = 0;

  price: number = 0.00;
  fee: number = 0.00;
  discount: number = 0.00;
  finalPrice: number = 0.00;
  finalPriceWithDiscount: number = 0.00;
  priceToDisplay: number = 0.00;

  info = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private cartService: CartService) {}

  
  calculatePrice() {
    const priceSum = this.items.reduce((acc, curr) => acc + (curr.price * curr.quantity), this.price);
    this.price = +priceSum.toFixed(2);
    this.fee = +(this.price * 0.1).toFixed(2);
    this.finalPrice = this.price + this.fee;
    this.finalPriceWithDiscount = +(this.finalPrice * 0.85).toFixed(2);
    this.discount = +(this.finalPrice * 0.15).toFixed(2);
    
    if (priceSum > 40) {
      this.priceToDisplay = this.finalPriceWithDiscount;
    } else {
      this.priceToDisplay = this.finalPrice;
    }
  }
  
  getQty() {
    this.itemsQty = this.cartService.getQty();
  }

  clearSummary() {
    this.price = 0;
    this.fee = 0;
    this.finalPrice = 0;
    this.finalPriceWithDiscount = 0;
    this.discount = 0;
    this.priceToDisplay = 0;
    this.itemsQty = 0;
  }
  
  clearCart() {
    this.items = this.cartService.clearCart();
    this.clearSummary();
  }

  onSubmit() {
    if (this.info.valid) {
      var formData = this.info.value;
      console.log(formData);
    }
    this.items = this.cartService.getItems();
  }
  
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.itemsQty = this.cartService.getQty();
    this.calculatePrice();
  }
}
