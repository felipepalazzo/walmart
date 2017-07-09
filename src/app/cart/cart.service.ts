import { Injectable } from '@angular/core';
import { Product } from '../../app/models/product.interface';
import _ from "lodash";

@Injectable()
export class CartService {
  orders: Product[] = [];
  get() {
    return this.orders;
  }
  add(product){
    let order = _.find(this.orders, {sku: product.sku});
    if (order) {
      order.amount += 1;
      return;
    }
    product.amount = 1;
    this.orders.push(product);
  }
  remove(product){
    _.remove(this.orders, (p) => p.sku === product.sku);
  }
  getTotalAmount(orders) {
    return orders.reduce((sum, order) => {
      return sum + order.amount
    }, 0);
  }
}
