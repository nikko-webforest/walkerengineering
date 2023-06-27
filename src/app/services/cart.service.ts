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

  constructor(private httpClient: HttpClient) {}

  createCart(): Promise<string> {
    console.log('createCart');
    const createCartMutation = `
      mutation {
        cartCreate {
          cart {
            id
          }
        }
      }
    `;

    return this.httpClient
      .post<any>(
        environment.shopifyEndpoint,
        {
          query: createCartMutation,
        },
        this.httpOptions
      )
      .toPromise()
      .then((response) => {
        console.log('createCartMutation =', response);
        return response.data.cartCreate.cart.id;
      })
      .catch((error) => {
        console.log('createCartMutation =', error);
      });
  }

  getCart(id: string) {
    return this.httpClient.request('POST', environment.productsEndpoint, {
      body: {
        query: `
        query GetCart($cartId: ID!){
        cart(id: $cartId){
            id
            lines(first: 10){
                edges{
                    node{
                        id
                        quantity
                        discountAllocations{
                            discountedAmount{
                                amount
                                currencyCode
                            }
                        }
                        merchandise {
                ... on ProductVariant {
                  id
                  price{
                      amount
                      currencyCode
                  }
                  compareAtPrice{
                      amount
                      currencyCode
                  }
                  product{
                      title
                      handle
                      featuredImage{
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
    }`,
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
}
