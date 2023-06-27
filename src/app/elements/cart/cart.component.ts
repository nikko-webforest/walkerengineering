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
  @Input() fetchedCartData: any;

  cartData: any = {
    token: 'c1-0d7ef28b3b2d7f1cbcaaa037d1ba0a9c',
    note: '',
    attributes: {},
    original_total_price: 59480,
    total_price: 59480,
    total_discount: 0,
    total_weight: 6531.7301,
    item_count: 4,
    items: [
      {
        id: 45127348388157,
        properties: {},
        quantity: 2,
        variant_id: 45127348388157,
        key: '45127348388157:489298554e9a5f92aa385cd82db4173f',
        title: 'Air Filter (9Dia x 7L) Straight -Part# CD199',
        price: 15495,
        original_price: 15495,
        discounted_price: 15495,
        line_price: 30990,
        original_line_price: 30990,
        total_discount: 0,
        discounts: [],
        sku: '',
        grams: 1814,
        vendor: 'Walker AIRSEP Air Filter',
        taxable: true,
        product_id: 8266463314237,
        product_has_only_default_variant: true,
        gift_card: false,
        final_price: 15495,
        final_line_price: 30990,
        url: '/products/air-filter-9dia-x-9st-straight-part-cd199?variant=45127348388157',
        featured_image: {
          aspect_ratio: 1.144,
          alt: 'Air Filter (9Dia x 7L) Straight -Part# CD199',
          height: 1311,
          url: 'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/AirFilterElementStraightCD175_1b257c3f-e3f6-4925-b674-2ee851316f6f.jpg?v=1683221923',
          width: 1500,
        },
        image:
          'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/AirFilterElementStraightCD175_1b257c3f-e3f6-4925-b674-2ee851316f6f.jpg?v=1683221923',
        handle: 'air-filter-9dia-x-9st-straight-part-cd199',
        requires_shipping: true,
        product_type: 'Replacement Air Filter AIRSEP Traditional',
        product_title: 'Air Filter (9Dia x 7L) Straight -Part# CD199',
        product_description:
          'Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on 9" traditional AIRSEPS, this original part ensures that your system operates the way it was designed. While the 9" traditional AIRSEP can be found on several brands of diesel engines, it was also factory installed at Detroit Diesel starting in 1989. The filter is attached to the AIRSEP body using springs.\nThis filter may also be found also used on AIRSEPS installed Caterpillar or Cummins engines starting in 1992, most likely commercial or work-boat applications\nPlease verify filter length before ordering to avoid a re-stocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 7" long.\nWalker Part# CD199\n',
        variant_title: null,
        variant_options: ['Default Title'],
        options_with_values: [{ name: 'Title', value: 'Default Title' }],
        line_level_discount_allocations: [],
        line_level_total_discount: 0,
      },
      {
        id: 45154037334333,
        properties: {},
        quantity: 1,
        variant_id: 45154037334333,
        key: '45154037334333:d8e16ccf24a0d8a17ad44437bf6f9c32',
        title:
          'High-Air Performance Air Filter -Volvo31/41 Series -Part# 1000919',
        price: 9495,
        original_price: 9495,
        discounted_price: 9495,
        line_price: 9495,
        original_line_price: 9495,
        total_discount: 0,
        discounts: [],
        sku: '681404400476',
        grams: 1134,
        vendor: 'Walker High-Air Performance Air Filter',
        taxable: true,
        product_id: 8274945638717,
        product_has_only_default_variant: true,
        gift_card: false,
        final_price: 9495,
        final_line_price: 9495,
        url: '/products/high-air-performance-air-filter-volvo31-41-series?variant=45154037334333',
        featured_image: {
          aspect_ratio: 1.333,
          alt: 'High-Air Performance Air Filter -Volvo31/41 Series -Part# 1000919',
          height: 375,
          url: 'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/41rQ1GY5WZL.jpg?v=1683640054',
          width: 500,
        },
        image:
          'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/41rQ1GY5WZL.jpg?v=1683640054',
        handle: 'high-air-performance-air-filter-volvo31-41-series',
        requires_shipping: true,
        product_type: 'High Performance Air Filter Volvo',
        product_title:
          'High-Air Performance Air Filter -Volvo31/41 Series -Part# 1000919',
        product_description:
          'Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nTired of replacing your clogged, restrictive paper style stock air filter? Order the Walker filter..\nDesigned as a direct replacement for the Volvo stock paper air filter, the robust construction make it the ideal upgrade for your 31/41 Series Volvo marine engine.\nDesigned to fit in same space as stock filter.Measures 7" diameter.\nNOTE: WILL NOT WORK IN OLDER METAL HOUSING. (You must purchase plastic housing from your Volvo dealer if housing is metal).\nThis filter fits: TAMD31A, TAMD31P, TAMD31B, TAMD31D, AQUA31P, TAMD41A, TAMD41B, TAMD41P.Complete Engine List: D31, D41, AD31A, AD31B, AD31D, AD31L-A, AD31P-A, AD31XD, AQAD31A, TAMD31A, TAMD31B, TAMD31D, TAMD31l-A, TAMD31M-A, TAMD31P-A, TMD31A, TMD31B, TMD31D, TMD31L-A, AD41D, AD41L-A, AD41P-A, AQAD41A, AQD41A, D41A, D41B, D41D, D41L-A, TAMD41A, TAMD41B, TAMD41D, TAMD41H-A, TAMD41L-A, TAMD41M-A, TAMD41P-A, TMD41A, TMD41B, TMD41D, TMD41L-A.\nWalker Part# 1000919',
        variant_title: null,
        variant_options: ['Default Title'],
        options_with_values: [{ name: 'Title', value: 'Default Title' }],
        line_level_discount_allocations: [],
        line_level_total_discount: 0,
      },
      {
        id: 45154039431485,
        properties: {},
        quantity: 1,
        variant_id: 45154039431485,
        key: '45154039431485:273c4475a5f05f4c36f23f7d98feebb2',
        title:
          'High-Air Performance Air Filter (Fits Volvo 74/75 Series) 4" Inlet -Part# 1001817',
        price: 18995,
        original_price: 18995,
        discounted_price: 18995,
        line_price: 18995,
        original_line_price: 18995,
        total_discount: 0,
        discounts: [],
        sku: '681404400551',
        grams: 1769,
        vendor: 'Walker High-Air Performance Air Filter',
        taxable: true,
        product_id: 8274946523453,
        product_has_only_default_variant: true,
        gift_card: false,
        final_price: 18995,
        final_line_price: 18995,
        url: '/products/high-air-performance-air-filter-fits-volvo-74-75-series-4-inlet?variant=45154039431485',
        featured_image: {
          aspect_ratio: 1.359,
          alt: 'High-Air Performance Air Filter (Fits Volvo 74/75 Series) 4" Inlet -Part# 1001817',
          height: 368,
          url: 'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/410lT5FWKxL.jpg?v=1683640065',
          width: 500,
        },
        image:
          'https://cdn.shopify.com/s/files/1/0752/6635/9613/products/410lT5FWKxL.jpg?v=1683640065',
        handle:
          'high-air-performance-air-filter-fits-volvo-74-75-series-4-inlet',
        requires_shipping: true,
        product_type: 'High Performance Air Filter Volvo',
        product_title:
          'High-Air Performance Air Filter (Fits Volvo 74/75 Series) 4" Inlet -Part# 1001817',
        product_description:
          'Walker Engineering Enterprises presents\nTake YOUR marine diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Volvo stock paper air filter, the robust construction make it the ideal upgrade for your TAMD74 \u0026 TAMD75 P Series marine diesel engine. Incorporates a metal base to fit in same space as stock filter.\nMeasures 7.5" diameter x 11.7" long, and fits inside factory turbo connection hose.\nDirect Replacement for Volvo Penta Air Filter: 3838952 or 3827167\nWalker Part # 1001817\nSERVICE NOTE: Due to External support cage, use only Air Filter Cleaning Kit # AAF1016.',
        variant_title: null,
        variant_options: ['Default Title'],
        options_with_values: [{ name: 'Title', value: 'Default Title' }],
        line_level_discount_allocations: [],
        line_level_total_discount: 0,
      },
    ],
    requires_shipping: true,
    currency: 'USD',
    items_subtotal_price: 59480,
    cart_level_discount_applications: [],
  };

  constructor(
    public appComponent: AppComponent,
    public headerComponent: HeaderComponent,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    console.log('cart init', this.fetchedCartData);
  }

  toggleCart() {
    this.showcart = !this.showcart;
    this.headerComponent.closeCart();
    // console.log('objects from cart component', this.fetchedCartData);
    // this.headerComponent.toggleCart();
  }

  openProductLink(link: any) {
    if (link != '')
      window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }
}
