import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../common/order.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  orders: Product[];
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }
  ngOnInit() {
    this.orders = this.cartService.get();
  }
  getTotalAmount(orders) {
    return this.orderService.getTotalAmount(orders);
  }

}
