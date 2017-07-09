import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../../app/models/product.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Product[];
  constructor(
    private cartService: CartService,
  ) { }
  ngOnInit() {
    this.products = this.cartService.get();
    this.isVisible();
  }
  remove(order: Product) {
    this.cartService.remove(order);
  }
  getTotalAmount(orders) {
    return this.cartService.getTotalAmount(orders);
  }
  isVisible() {
    return this.cartService.getCartStatus();
  }
  toggleMenu() {
    this.cartService.toggleCart();
  }
}
