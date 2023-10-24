import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { products } from '../../products';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  products: IProducts[] = products;

  constructor(private cartService: CartService) {}

  addToCart(index: number) {
    this.cartService.addToCart(this.products[index]);
  }

  ngOnInit(): void {}
}
