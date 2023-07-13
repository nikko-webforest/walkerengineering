import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/elements/header/header.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  @Input() showcart: boolean | undefined;

  @Input() cartData: any;

  @Input() cartToken: string = '';

  constructor(
    public appComponent: AppComponent,
    public headerComponent: HeaderComponent,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  toggleCart() {
    this.headerComponent.toggleCart();
  }

  openCart() {
    this.headerComponent.openCart();
  }

  closeCart() {
    const updatedList = this.makeUpdateObject();
    this.cartService.updateQuantities(updatedList).subscribe((res: any) => {
      // console.log('updateQuantities =', res);
    });
    this.headerComponent.closeCart();
  }

  openProductLink(link: any) {
    if (link != '') window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }

  minusQuantity(cartIndex: number) {
    this.cartData.items[cartIndex].quantity = this.cartData.items[cartIndex].quantity - 1;

    if (this.cartData.items[cartIndex].quantity < 1) {
      const updatedList = this.makeUpdateObject();
      this.cartService.updateQuantities(updatedList).subscribe((res: any) => {
        // console.log('updateQuantities =', res);
        this.cartData.items.splice(cartIndex, 1);
      });
    }

    this.cartData.total_price = this.cartData.total_price - this.cartData.items[cartIndex].price;
  }

  plusQuantity(cartIndex: number) {
    this.cartData.items[cartIndex].quantity = this.cartData.items[cartIndex].quantity + 1;
    this.cartData.total_price = this.cartData.total_price + this.cartData.items[cartIndex].price;
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    if (currentPrice == 0) return '100%';
    var calculate = 100 - Number(currentPrice / beforePrice) * 100;
    var discount = calculate < 0 ? calculate * -1 : calculate;
    // console.log('calculateDiscount \n beforePrice =', beforePrice, 'currentPrice =', currentPrice, 'discount =', discount);
    return discount.toFixed(0) + '%';
  }

  redirectToCheckOut() {
    window.location.href = '/checkout';
  }

  formatPrice(currencyCode: any, valuePrice: any) {
    // console.log('currencyCode =', currencyCode);
    // console.log('valuePrice =', valuePrice);
    const amount = Number(valuePrice / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: currencyCode
    });
    // console.log('ammount =', amount);
    return amount;
  }

  makeUpdateObject() {
    const updateObj: { [id: string]: number } = {};

    this.cartData.items.forEach((item: any) => {
      updateObj[item.id] = item.quantity;
    });
    return updateObj;
  }
}
