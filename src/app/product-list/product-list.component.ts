import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductListService } from './product-list.service';
import { CartService } from '../cart/cart.service';
import _ from "lodash";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productGroup: Product[];
  groupBy: number = 3;
  maxRate: number = 5;
  isVisible: boolean = false;
  totalStars = _.range(this.maxRate);
  constructor(
    private productListService: ProductListService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productListService
     .getOrders()
     .subscribe((data: Product[]) => this.productGroup = _.chunk(data, this.groupBy))
  }

  getLastOf(group: Array<any>) {
    return _.last(group)
  }

  showDetails(evt: any, isVisible: boolean) {
    let focusIn = 'focus';
    if (isVisible) {
      evt.target.classList.add(focusIn);
    } else {
      evt.target.classList.remove(focusIn);
    }
  }

  onClick(product: Product){
    this.cartService.add(product);
  }

}
