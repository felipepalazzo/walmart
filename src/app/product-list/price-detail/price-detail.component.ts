import { Component, Input } from '@angular/core';
import { Price } from '../../models/price.interface';

@Component({
  selector: 'price-detail',
  styleUrls: ['./price-detail.component.scss'],
  template: `
    <div class="font-sm text-grey">
      <span>{{ price.installmentAmount }}</span>x
      <span>{{ price.currency }}</span>
      <span>{{ price.valuePerInstallment }}</span> sem juros
    </div>
  `,
})
export class PriceDetailComponent {
  @Input()
  price: Price;
}
