import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CartComponent implements OnInit {

  @Input() showCart: boolean | undefined;

  cartId: any;

  cartData: any = {
    "token" : "43608e28c68b55d37e928db260afdae5",
    "note" : null,
    "attributes" : {},
    "original_total_price" : 262545,
    "total_price" : 262545,
    "total_discount" : 0,
    "total_weight" : 50711.627,
    "item_count" : 13,
    "items" : [
      {
        "id" : 45127348388157,
        "properties" : {},
        "quantity" : 2,
        "variant_id" : 45127348388157,
        "key" : "45127348388157 : 489298554e9a5f92aa385cd82db4173f",
        "title" : "Air Filter (9Dia x 7L) Straight -Part# CD199",
        "price" : 15495,
        "original_price" : 15495,
        "discounted_price" : 15495,
        "line_price" : 30990,
        "original_line_price" : 30990,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 1814,
        "vendor" : "Walker AIRSEP Air Filter",
        "taxable" : true,
        "product_id" : 8266463314237,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 15495,
        "final_line_price" : 30990,
        "url" : "\/products\/air-filter-9dia-x-9st-straight-part-cd199?variant=45127348388157",
        "featured_image" : {
          "aspect_ratio" : 1.144,
          "alt" : "Air Filter (9Dia x 7L) Straight -Part# CD199",
          "height" : 1311,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AirFilterElementStraightCD175_1b257c3f-e3f6-4925-b674-2ee851316f6f.jpg?v=1683221923",
          "width" : 1500
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AirFilterElementStraightCD175_1b257c3f-e3f6-4925-b674-2ee851316f6f.jpg?v=1683221923",
        "handle" : "air-filter-9dia-x-9st-straight-part-cd199",
        "requires_shipping" : true,
        "product_type" : "Replacement Air Filter AIRSEP Traditional",
        "product_title" : "Air Filter (9Dia x 7L) Straight -Part# CD199",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on 9\" traditional AIRSEPS, this original part ensures that your system operates the way it was designed. While the 9\" traditional AIRSEP can be found on several brands of diesel engines, it was also factory installed at Detroit Diesel starting in 1989. The filter is attached to the AIRSEP body using springs.\nThis filter may also be found also used on AIRSEPS installed Caterpillar or Cummins engines starting in 1992, most likely commercial or work-boat applications\nPlease verify filter length before ordering to avoid a re-stocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 7\" long.\nWalker Part# CD199\n",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45154067087677,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 45154067087677,
        "key" : "45154067087677 : 9fe91657b1d2e4760a9fb076a2e23643",
        "title" : "FIELD SERVICE KIT - CAT C12 Marine Engine -Kit # 1001140",
        "price" : 31495,
        "original_price" : 31495,
        "discounted_price" : 31495,
        "line_price" : 31495,
        "original_line_price" : 31495,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 9525,
        "vendor" : "Walker AIRSEP Air Filter",
        "taxable" : true,
        "product_id" : 8274958090557,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 31495,
        "final_line_price" : 31495,
        "url" : "\/products\/field-service-kit-cat-c12-marine-engine-kit-1001140?variant=45154067087677",
        "featured_image" : {
          "aspect_ratio" : 1.271,
          "alt" : "FIELD SERVICE KIT - CAT C12 Marine Engine -Kit # 1001140",
          "height" : 491,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/FieldServiceKit.png?v=1683640218",
          "width" : 624
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/FieldServiceKit.png?v=1683640218",
        "handle" : "field-service-kit-cat-c12-marine-engine-kit-1001140",
        "requires_shipping" : true,
        "product_type" : "Field Service Kit",
        "product_title" : "FIELD SERVICE KIT - CAT C12 Marine Engine -Kit # 1001140",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with high performance air filtration.\nWalker Engineering introduces new field service kits for\u00a0C12\u00a0marine engines. Everything you need to get you back in the water is here...\nThe kit includes two (2) Air Filters, to replace the rear turbo air filter in the black housing, \u00a0One kit services\u00a0two (2) engines.\nEach convenient service kit contains : \u00a0Two (2) cylindrical air filter (40-1195, 401195), AND (1) air filter cleaning kit DDF9016.\nThis Field Service Kit is recommended for any C12 used in marine propulsion applications..\nThe filter elements in this kit are a direct replacement for\u00a0CAT\u00a0air filters : \n\nCAT part# 177-7375, 1777375\n\nWalker Kit # 1001140",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45154067284285,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 45154067284285,
        "key" : "45154067284285 : 2c374659090b0bfdef0466f377a062e1",
        "title" : "HD Air Filter (19.25Dia x 10.25L) Straight -Part# 1001715",
        "price" : 35635,
        "original_price" : 35635,
        "discounted_price" : 35635,
        "line_price" : 35635,
        "original_line_price" : 35635,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 9525,
        "vendor" : "Walker Airsep Superstore",
        "taxable" : true,
        "product_id" : 8274958287165,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 35635,
        "final_line_price" : 35635,
        "url" : "\/products\/hd-air-filter-19-25dia-x-10-25l-straight-part-1001715?variant=45154067284285",
        "featured_image" : {
          "aspect_ratio" : 1.221,
          "alt" : "HD Air Filter (19.25Dia x 10.25L) Straight -Part# 1001715",
          "height" : 765,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/20230303_135737.png?v=1683640222",
          "width" : 934
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/20230303_135737.png?v=1683640222",
        "handle" : "hd-air-filter-19-25dia-x-10-25l-straight-part-1001715",
        "requires_shipping" : true,
        "product_type" : "",
        "product_title" : "HD Air Filter (19.25Dia x 10.25L) Straight -Part# 1001715",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on a Caterpillar 3512\/3516, \nThese filters are easily installed, and are a direct replacement for the stock paper element (part# 8N6309) currently available from both the Caterpillar factory, or various aftermarket versions of the paper air filters. One of the benefits of the new Walker Filters is that they are designed to flow MORE air than the stock paper filters, which improves combustion and helps reduce exhaust temperatures. The filters are also resistant to water and moisture and are far less restrictive if they do get wet.\n\nPlease verify filter length before ordering to avoid a re-stocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 10.25\" long.\nWalker Part# 1001715",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45154067579197,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 45154067579197,
        "key" : "45154067579197 : 210115dab0f7c969798cfcb609c44575",
        "title" : "HD Air Filter (19.25\" Dia x  14.25\" L) Straight -Part# 1001716",
        "price" : 38935,
        "original_price" : 38935,
        "discounted_price" : 38935,
        "line_price" : 38935,
        "original_line_price" : 38935,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 9525,
        "vendor" : "Walker Airsep Superstore",
        "taxable" : true,
        "product_id" : 8274958647613,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 38935,
        "final_line_price" : 38935,
        "url" : "\/products\/hd-air-filter-19-25dia-x-10-25l-straight-part-1001716?variant=45154067579197",
        "featured_image" : {
          "aspect_ratio" : 1.221,
          "alt" : "HD Air Filter (19.25\" Dia x  14.25\" L) Straight -Part# 1001716",
          "height" : 765,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/20230303_135737_64d1d5f2-4105-4fc9-8f9f-97b9af52b72e.png?v=1683640226",
          "width" : 934
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/20230303_135737_64d1d5f2-4105-4fc9-8f9f-97b9af52b72e.png?v=1683640226",
        "handle" : "hd-air-filter-19-25dia-x-10-25l-straight-part-1001716",
        "requires_shipping" : true,
        "product_type" : "",
        "product_title" : "HD Air Filter (19.25\" Dia x  14.25\" L) Straight -Part# 1001716",
        "product_description" : "\u00a0Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on a Caterpillar 3512\/3516, \nThese filters are easily installed, and are a direct replacement for the stock paper element (part# 4P-0710) currently available from both the Caterpillar factory, or various aftermarket manufacturers of the paper air filters. One of the benefits of the new Walker Filters is that they are designed to flow MORE air than the stock paper filters, which improves combustion and helps reduce exhaust temperatures. The filters are also resistant to water and moisture, and are far less restrictive if they do get wet.\nNote : \u00a0 14.25\" Tall Filter",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45127348027709,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 45127348027709,
        "key" : "45127348027709 : 7d9907caa6532210d5820538b5581ab2",
        "title" : "AIRSEP Air Filter (9Dia x 12L) Straight -Part# CD201",
        "price" : 16995,
        "original_price" : 16995,
        "discounted_price" : 16995,
        "line_price" : 16995,
        "original_line_price" : 16995,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 2041,
        "vendor" : "Walker AIRSEP Air Filter",
        "taxable" : true,
        "product_id" : 8266463084861,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 16995,
        "final_line_price" : 16995,
        "url" : "\/products\/airsep-air-filter-9dia-x-12l-straight-part-cd201?variant=45127348027709",
        "featured_image" : {
          "aspect_ratio" : 1.144,
          "alt" : "AIRSEP Air Filter (9Dia x 12L) Straight -Part# CD201",
          "height" : 1311,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AirFilterElementStraightCD175.jpg?v=1683221917",
          "width" : 1500
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AirFilterElementStraightCD175.jpg?v=1683221917",
        "handle" : "airsep-air-filter-9dia-x-12l-straight-part-cd201",
        "requires_shipping" : true,
        "product_type" : "Replacement Air Filter AIRSEP Traditional",
        "product_title" : "AIRSEP Air Filter (9Dia x 12L) Straight -Part# CD201",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on 9\" traditional AIRSEPS, this original part ensures that your system operates the way it was designed. While the 9\" traditional AIRSEP can be found on several brands of diesel engines, it was also factory installed at Detroit Diesel starting in 1989. The filter is attached to the AIRSEP body using springs.\nThis filter may also be found also used on AIRSEPS installed Caterpillar or Cummins engines starting in 1992, most likely commercial or work-boat applications\nPlease verify filter length before ordering to avoid a re-stocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 12\" long.\nWalker Part# CD201\n",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45154028552509,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 45154028552509,
        "key" : "45154028552509 : 6b72d8117590baa142e8c6007ce85d56",
        "title" : "CCE AIRSEP Air Filter (12Dia x 12L) Tapered -Part# 40-1057",
        "price" : 18525,
        "original_price" : 18525,
        "discounted_price" : 18525,
        "line_price" : 18525,
        "original_line_price" : 18525,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 3130,
        "vendor" : "Walker AIRSEP Air Filter",
        "taxable" : true,
        "product_id" : 8274942132541,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 18525,
        "final_line_price" : 18525,
        "url" : "\/products\/cce-airsep-air-filter-12dia-x-12l-tapered-part-40-1057?variant=45154028552509",
        "featured_image" : {
          "aspect_ratio" : 0.466,
          "alt" : "CCE AIRSEP Air Filter (12Dia x 12L) Tapered -Part# 40-1057",
          "height" : 731,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/ei_1668206028710-removebg-preview.png?v=1683640004",
          "width" : 341
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/ei_1668206028710-removebg-preview.png?v=1683640004",
        "handle" : "cce-airsep-air-filter-12dia-x-12l-tapered-part-40-1057",
        "requires_shipping" : true,
        "product_type" : "Replacement Air Filter AIRSEP CCE",
        "product_title" : "CCE AIRSEP Air Filter (12Dia x 12L) Tapered -Part# 40-1057",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on 12\"\u00a0 CCE AIRSEPS, this original part ensures that your system operates the way it was designed.\nWhile the 12\" CCE AIRSEP can be found on several brands of diesel engines, it was factory installed at Detroit Diesel. The 12\" CCE AIRSEP is commonly found on Caterpillar, MTU as well as other marine diesel engines that have been retrofitted in the field.\nThe filter has a metal top, and a 12\" diameter metal attachment ring at the base. The filter is attached to the CCE AIRSEP body using a \"V-Band\" clamp.\nPlease verify filter length before ordering to avoid a restocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 12\" long.\nWalker Part# 40-1057",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 45154011283773,
        "properties" : {},
        "quantity" : 6,
        "variant_id" : 45154011283773,
        "key" : "45154011283773 : c7bfb010ad31a9c615d0304023cd0505",
        "title" : "CCE AIRSEP EVERQUIET\u2122 Air Filter (8Dia x 12L Straight) -Part# 1003156",
        "price" : 14995,
        "original_price" : 14995,
        "discounted_price" : 14995,
        "line_price" : 89970,
        "original_line_price" : 89970,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 2223,
        "vendor" : "Walker AIRSEP Air Filter",
        "taxable" : true,
        "product_id" : 8274934202685,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 14995,
        "final_line_price" : 89970,
        "url" : "\/products\/cce-airsep-air-filter-8dia-x-12l-straight-part-1003156?variant=45154011283773",
        "featured_image" : {
          "aspect_ratio" : 0.895,
          "alt" : "CCE AIRSEP EVERQUIET\u2122 Air Filter (8Dia x 12L Straight) -Part# 1003156",
          "height" : 2086,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/1003156.jpg?v=1683639931",
          "width" : 1868
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/1003156.jpg?v=1683639931",
        "handle" : "cce-airsep-air-filter-8dia-x-12l-straight-part-1003156",
        "requires_shipping" : true,
        "product_type" : "Replacement Air Filter AIRSEP CCE",
        "product_title" : "CCE AIRSEP EVERQUIET\u2122 Air Filter (8Dia x 12L Straight) -Part# 1003156",
        "product_description" : "Walker Engineering Enterprises presents\nTake YOUR diesel engine to the next level with this high performance air filter.\nDesigned as a direct replacement for the Air Filter found on the 8\" diameter EVERQUIET\u2122 air filter silencer installed on the MAN marine engines rated at 1800 HP. This original part ensures that your system performs the way it was designed.\nREFERENCE :  Fits complete Everquiet Silencer Assembly #1003157.\nThe filter has a metal top, and a 8\" diameter metal attachment ring at the base. The filter is attached to the Walker CCE Everquiet filter base using a \"V-Band\" clamp.\nPlease verify filter length before ordering to avoid a restocking fee, as it is very important the same size filter is replaced or serviced.\nThis filter is 12\" long.\nWalker Part# 1003156",
        "variant_title" : null,
        "variant_options" : ["Default Title"],
        "options_with_values" : [
          {
            "name" : "Title",
            "value" : "Default Title"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      }
    ],
    "requires_shipping" : true,
    "currency" : "USD",
    "items_subtotal_price" : 262545,
    "cart_level_discount_applications" : []
  };

  cartData2: any;

  constructor(
    public appComponent: AppComponent,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.createCart();

    setTimeout(() => {
      this.getCart();
    }, 1000);
  }

  ngAfterViewInit(): void {
    
  }

  createCart() {
    this.cartService.createCart()
      .then(cartId => {
        console.log('createCart SUCCESS...:', cartId);
        this.cartId = cartId;
      })
      .catch(error => {
        console.log('createCart FAILED...:', error);
      });
  }

  getCart() {
    this.cartService.getCart(this.cartId)
      .then(cartData => {
        console.log('getCart SUCCESS...', cartData);
        this.cartData2 = cartData;
      })
      .catch(error => {
        console.log('getCart FALED...', error);
      });
  }

  toggleCart() {
    this.appComponent.toggleCart();
  }

  openProductLink(link: any) {
    if (link != '') window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }

  updateQuantity(cartProductID: any, adjustQuantity: any) {
    console.log('cartProductID =', cartProductID);
    console.log('adjustQuantity =', adjustQuantity);
    if (adjustQuantity == 'plus') {

    }
    if (adjustQuantity == 'minus') {
      
    }
  }

}
