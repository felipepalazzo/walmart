import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductListService } from './product-list.service';
import _ from "lodash";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productGroup: Product[];
  groupBy: number = 3;
  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService
     .getOrders()
     .subscribe((data: Product[]) => this.productGroup = _.chunk(data, 3))
  }

  getLastOf(group: Array<any>) {
    return _.last(group)
  }

}
