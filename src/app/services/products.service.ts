import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductsService {

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.request('POST', environment.productsEndpoint, {
      body: {
        query: `
          query GetProducts {
            products(first: 250) {
              nodes {
                id
                title
                handle
                descriptionHtml
                publishedAt
                createdAt
                updatedAt
                vendor
                productType
                tags
                variants(first: 5) {
                  nodes {
                    id
                    title
                    availableForSale
                    sku
                    requiresShipping
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                    product {
                      id
                    }
                    price{
                      amount
                      currencyCode
                    }
                  }
                }
                images(first: 5) {
                  nodes {
                    id
                    url
                    width
                    height
                  }
                }
                options {
                  id
                  name
                  values
                }
                onlineStoreUrl
              }
            }
          }
        `,
        operationName: 'GetProducts',
      },
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        'X-Shopify-Storefront-Access-Token': environment.shopifyAccessToken,
      },
    });
  }
}
