import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/elements/header/header.component';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  @Input() showcart: boolean | undefined;

  @Input() cartData: any;

  @Input() checkoutUrl: string = '';

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
    const updatedList = this.makeCartLineObject();
    this.cartService
      .updateCart(this.cartToken, updatedList)
      .subscribe((res: any) => {
        console.log(res);
      });
    this.headerComponent.closeCart();
  }

  openProductLink(link: any) {
    if (link != '')
      window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }

  minusQuantity(quantity: number, cartIndex: number) {
    this.cartData.lines.edges[cartIndex].node.quantity = quantity - 1;
    if (this.cartData.lines.edges[cartIndex].node.quantity < 1) {
      const toBeRemoved = this.cartData.lines.edges[cartIndex].node.id;
      this.cartService
        .removeCartLine(this.cartToken, toBeRemoved)
        .subscribe((res: any) => {
          console.log(res);
        });
      this.cartData.lines.edges.splice(cartIndex, 1);
    }
  }

  plusQuantity(quantity: number, cartIndex: number) {
    this.cartData.lines.edges[cartIndex].node.quantity = quantity + 1;
    console.log('check', this.cartData.lines.edges);
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    var calculate = 100 - (currentPrice / beforePrice) * 100;
    var discount = calculate < 0 ? calculate * -1 : calculate;
    // console.log('calculateDiscount \n beforePrice =', beforePrice, 'currentPrice =', currentPrice, 'discount =', discount);
    return discount.toFixed(0) + '%';
  }

  redirectToCheckOut() {
    const updatedList = this.makeCartLineObject();
    this.cartService
      .updateCart(this.cartToken, updatedList)
      .subscribe((res: any) => {
        console.log(res);
      });
    window.location.href = this.checkoutUrl;
  }

  formatPrice(currencyCode: any, valuePrice: any) {
    // console.log('currencyCode =', currencyCode);
    // console.log('valuePrice =', valuePrice);
    const amount = Number(valuePrice).toLocaleString('en-US', {
      style: 'currency',
      currency: currencyCode,
    });
    // console.log('ammount =', amount);
    return amount;
  }

  makeCartLineObject() {
    const cartLineObject = this.cartData.lines.edges.map((product: any) => {
      return {
        id: product.node.id,
        quantity: product.node.quantity,
      };
    });
    return cartLineObject;
  }
}
