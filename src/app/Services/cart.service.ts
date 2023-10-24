import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProducts } from '../IProducts';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProducts[] = [];
  itemsQty: number = 0;
  itemsQtySubject = new Subject<number>();

  constructor() {}

  addToCart(product: IProducts) {
    let isCurrentProductInsideCart = this.items.some(
      (item) => item.id === product.id
    );
    let indexOfAddedCart = this.items.findIndex(
      (item) => item.id === product.id
    );

    if (isCurrentProductInsideCart) {
      this.items[indexOfAddedCart].quantity++;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }

    this.updateItemsQty();
  }

  getQty() {
    const totalQty = this.items.reduce((acc, curr) => acc + curr.quantity, 0);
    this.itemsQty = totalQty;
    return this.itemsQty;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.updateItemsQty();
    return this.items;
  }

  updateItemsQty() {
    const totalQty = this.items.reduce((acc, curr) => acc + curr.quantity, 0);
    this.itemsQty = totalQty;
    this.itemsQtySubject.next(this.itemsQty); // Notify subscribers of the change
  }
}
