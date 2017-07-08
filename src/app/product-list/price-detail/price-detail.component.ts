import { Component, Input } from '@angular/core';
import { Price } from '../../models/price.interface';

@Component({
  selector: 'price-detail',
  styleUrls: ['./price-detail.component.scss'],
  template: `
    <span>{{ price.currency }}</span>
    <span>{{ price.installmentAmount }}</span>x
    <span>{{ price.valuePerInstallment }}</span>
  `,
})
export class PriceDetailComponent {
  @Input()
  price: Price;
}
