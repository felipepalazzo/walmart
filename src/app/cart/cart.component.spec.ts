import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

let _ = require('lodash');

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    let isVisible = false;
    let orders = [
      {
        id: 1,
        sku: 3,
        title: 'Smart TV',
        brand: 'LG',
        image: '',
        listPrice: '1.399,00',
        price: '1.399,00',
        currency: 'R$',
        rating: 4,
        installments: [],
        amount: 2,
      }
    ];
    let CartServiceStub = {
      get: () => orders,
      getCartStatus: () => isVisible,
      getTotalAmount: (orders) => orders.reduce((sum, order) => {
        return sum + order.amount
      }, 0),
      toggleCart: () => isVisible = !isVisible,
      remove: (product) => _.remove(orders, (p) => p.sku === product.sku),
    }
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        { provide: CartService, useValue: CartServiceStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartService = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have products', () => {
    let products = cartService.get();
    expect(products.length).toEqual(1);
  });

  it('cart should not be visible', () => {
    expect(component.isVisible()).toBe(false);
  });

  it('should remove a product', () => {
    let product = {
      id: 1,
      sku: 3,
      title: 'Smart TV',
      brand: 'LG',
      image: '',
      listPrice: '1.399,00',
      price: '1.399,00',
      currency: 'R$',
      rating: 4,
      installments: [],
      amount: 2,
    };
    component.remove(product);
    expect(component.products.length).toEqual(0);
  });

  it('should toggle menu visibility', () => {
    expect(component.isVisible()).toBe(false);
    component.toggleMenu();
    expect(component.isVisible()).toBe(true);
  });

  it('should get total amount', () => {
    expect(component.getTotalAmount(component.products)).toEqual(2);
  });
});
