import { Component, OnInit } from '@angular/core';
import { products } from "../../products";
import { IProducts } from "../../IProducts";

@Component({
  selector: 'specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {

  currentItem:number = 0;

  products:IProducts[] = products;

  clickHandler(index: number) {
    this.currentItem = index - 1;
    console.log(this.currentItem);
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}
