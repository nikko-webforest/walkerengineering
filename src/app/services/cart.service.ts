import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  constructor(private httpClient: HttpClient) {}

  getCartCheckoutUrl(id: string) {
    const checkoutUrl = `https://walkerengineering.co/checkouts/c/${id}/information`;
    return checkoutUrl;
  }

  getCartJson() {
    return this.httpClient.request(
      'GET',
      `${environment.stagingShopifyDomain}/cart.js`
    );
  }

  updateQuantities(updateObj: any) {
    return this.httpClient.request(
      'POST',
      `${environment.stagingShopifyDomain}/cart/update.js`,
      {
        body: {
          updates: updateObj,
        },
      }
    );
  }
}
