import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../../app/models/product.interface';

const PRODUCTS_URL: string = './assets/products.json';

@Injectable()
export class ProductListService {
  constructor(private http: Http){}

  getOrders(): Observable<Product[]> {
    return this.http
      .get(PRODUCTS_URL)
      .map((response: Response) => response.json().products);
  }
}
