import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../../products';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
      console.log(this.product);
    });
  }
}
