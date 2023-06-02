// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
interface Environment {
  production: boolean;
  productsEndpoint: string;
  shopifyAccessToken: string;
  stagingShopifyDomain: string;
}

export const environment: Environment = {
  production: false,
  productsEndpoint: 'https://walker-engineering-group.myshopify.com/api/2023-04/graphql.json',
  shopifyAccessToken: 'f86e2967b63269d7b313c81ce1b43824',
  stagingShopifyDomain: 'https://walker-engineering-group.myshopify.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
