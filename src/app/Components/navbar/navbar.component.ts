import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  itemsQty: number = 0;

  constructor(private cartService: CartService) {}

  getQty() {
    this.itemsQty = this.cartService.getQty();
  }

  ngOnInit(): void {
    this.cartService.itemsQtySubject.subscribe((qty) => {
      this.itemsQty = qty;
    });
    this.itemsQty = this.cartService.itemsQty;
  }

}
