import { Component, OnInit } from '@angular/core';
import { products } from "../../products";
import { IProducts } from "../../IProducts";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products:IProducts[] = products;
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
