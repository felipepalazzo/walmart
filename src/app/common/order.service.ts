import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  constructor() { }
  getTotalAmount(orders) {
    return orders.reduce((sum, order) => {
      return sum + order.amount
    }, 0);
  }

}
