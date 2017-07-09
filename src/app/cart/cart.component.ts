import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrderService } from '../common/order.service';
import { Product } from '../../app/models/product.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }
  ngOnInit() {
    this.products = this.cartService.get();
  }
  remove(order: Product) {
    this.cartService.remove(order);
  }
  getTotalAmount(orders) {
    return this.orderService.getTotalAmount(orders);
  }
}
