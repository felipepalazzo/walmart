import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { CartService } from './cart/cart.service';
import { ProductListService } from './product-list/product-list.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    let ProductListServiceStub = {}
    let CartServiceStub = {}
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CartComponent,
        TopMenuComponent
      ],
      providers: [
        { provide: ProductListService, useValue: ProductListServiceStub },
        { provide: CartService, useValue: CartServiceStub },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
