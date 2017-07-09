import { Injectable } from '@angular/core';
import { Product } from '../../app/models/product.interface';
import _ from "lodash";

@Injectable()
export class CartService {
  orders: Array<Product>;
  isVisible: boolean = false;
  constructor() {
    this.orders = JSON.parse(localStorage.getItem('wm-orders') || '[]');
  }
  private updateStore() {
    localStorage.setItem('wm-orders', JSON.stringify(this.orders));
  }
  get() {
    return this.orders;
  }
  add(product){
    let order = _.find(this.orders, {sku: product.sku});
    if (order) {
      order.amount += 1;
    } else {
      product.amount = 1;
      this.orders.push(product);
    }
    this.updateStore();
  }
  remove(product){
    _.remove(this.orders, (p) => p.sku === product.sku);
    this.updateStore();
  }
  getTotalAmount(orders) {
    return orders.reduce((sum, order) => {
      return sum + order.amount
    }, 0);
  }
  getCartStatus() {
    return this.isVisible;
  }
  toggleCart() {
    this.isVisible = !this.isVisible;
  }
}
