import { Component, Input } from '@angular/core';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() product: IProducts;
}
