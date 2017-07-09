import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  orders: Product[];
  constructor(
    private cartService: CartService,
  ) { }
  ngOnInit() {
    this.orders = this.cartService.get();
  }
  getTotalAmount(orders) {
    return this.cartService.getTotalAmount(orders);
  }
  toggleMenu() {
    this.cartService.toggleCart();
  }
  isFixed() {
    return this.cartService.getCartStatus();
  }
}
