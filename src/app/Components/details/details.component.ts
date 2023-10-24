import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() product: IProducts;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }
}
