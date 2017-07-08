import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService
     .getOrders()
     .subscribe((data: Product[]) => this.products = data)
  }

}
