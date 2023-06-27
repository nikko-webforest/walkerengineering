import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartData: any = {
    checkoutID: '',
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
    }),
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  getCartCheckoutUrl(id: string) {
    return this.httpClient.request('POST', environment.productsEndpoint, {
      body: {
        query: `
          query checkoutURL($cartId: ID!) {
            cart(id: $cartId) {
              checkoutUrl
            }
          }
        `,
        variables: {
          cartId: `gid://shopify/Cart/${id}`,
        },
        operationName: 'checkoutURL',
      },
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
      },
    });
  }

  getCart(id: string) {
    return this.httpClient.request('POST', environment.productsEndpoint, {
      body: {
        query: `
          query GetCart($cartId: ID!) {
            cart(id: $cartId) {
              id
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    discountAllocations {
                      discountedAmount {
                        amount
                        currencyCode
                      }
                    }
                    merchandise {
                      ... on ProductVariant {
                        id
                        price {
                          amount
                          currencyCode
                        }
                        compareAtPrice {
                          amount
                          currencyCode
                        }
                        product {
                          title
                          handle
                          featuredImage {
                            id
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
                totalDutyAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        `,
        variables: {
          cartId: `gid://shopify/Cart/${id}`,
        },
        operationName: 'GetCart',
      },
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
      },
    });
  }

  addItemToCart(id: string, lineItems: { quantity: number; merchandiseId: string }[] ) {
    return this.httpClient.request('POST', environment.productsEndpoint, {
      body: {
        query: `
          mutation addToCart($cartId: ID!, $lines: [CartLineInput!]! ) {
            cartLinesAdd(cartId: $cartId, lines: $lines) {
              cart {
                lines(first: 10) {
                  edges {
                    node {
                      id
                      quantity
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          cartId: `gid://shopify/Cart/${id}`,
          lines: lineItems,
        },
        operationName: 'addToCart',
      },
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
      },
    });
  }
}
