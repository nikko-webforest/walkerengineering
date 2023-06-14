import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartData: any = {
    'checkoutID' : '',
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }
  
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

    return this.httpClient.post<any>(environment.shopifyEndpoint, {
      query: createCartMutation
    }, this.httpOptions)
      .toPromise()
      .then(response => {
        console.log('createCartMutation =', response);
        return response.data.cartCreate.cart.id
      })
      .catch(error => {
        console.log('createCartMutation =', error);
      });
  }

  getCart(cartId: string): Promise<any> {
    console.log('getCart');
    const getCartQuery = `
      query {
        cart(id: "${cartId}") {
          id
          createdAt
          updatedAt
          lines(first: 10) {
            edges {
              node {
                id
                quantity
                variants {
                  id
                  title
                  product {
                    
                  }
                }
                attributes {
                  key
                  value
                }
              }
            }
          }
        }
      }
    `;

    return this.httpClient.post<any>(environment.shopifyEndpoint, {
      query: getCartQuery
    }, this.httpOptions)
      .toPromise()
      .then(response => {
        console.log('getCartQuery =', response);
        return response.data.cart;
      })
      .catch(error => {
        console.log('getCartQuery =', error);
      });
  }

}
