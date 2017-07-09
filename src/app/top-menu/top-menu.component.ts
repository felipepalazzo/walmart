import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  constructor(private cartService: CartService) { }
  orders: Product[] = this.cartService.get();
  getTotalAmount(orders) {
    return orders.reduce((sum, order) => {
      return sum + order.amount
    }, 0);
  }

}
