import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { CartService } from '../cart/cart.service';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
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
    }
    TestBed.configureTestingModule({
      declarations: [ TopMenuComponent ],
      providers: [
        { provide: CartService, useValue: CartServiceStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartService = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have orders', () => {
    expect(component.orders.length).toEqual(1);
  });

  it('should not be fixed', () => {
    expect(component.isFixed()).toBe(false);
  });

  it('should get total amount', () => {
    expect(component.getTotalAmount(component.orders)).toEqual(2);
  });

  it('should toggle menu', () => {
    expect(component.isFixed()).toBe(false);
    component.toggleMenu();
    expect(component.isFixed()).toBe(true);
  })
});
