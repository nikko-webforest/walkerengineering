import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CartComponent implements OnInit {

  @Input() showCart: boolean | undefined;

  cartData: any = {
    "token" : "c1-4979fc2ca561508fc1b91c5f4c0f72da",
    "note" : "",
    "attributes" : {},
    "original_total_price" : 13500,
    "total_price" : 13500,
    "total_discount" : 0,
    "total_weight" : 850.4857,
    "item_count" : 3,
    "items" : [
      {
        "id" : 41759909314752,
        "properties" : {},
        "quantity" : 1,
        "variant_id" : 41759909314752,
        "key" : "41759909314752 : e1518aba150834d3be0c3569919c7b9e",
        "title" : "Ultraman Japanese Logo Hoodie - White \/ X-Small",
        "price" : 7500,
        "original_price" : 7500,
        "discounted_price" : 7500,
        "line_price" : 7500,
        "original_line_price" : 7500,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 652,
        "vendor" : "Ultraman Connection",
        "taxable" : true,
        "product_id" : 7155403423936,
        "product_has_only_default_variant" : false,
        "gift_card" : false,
        "final_price" : 7500,
        "final_line_price" : 7500,
        "url" : "\/products\/ultraman-japanese-logo-hoodie?variant=41759909314752",
        "featured_image" : {
          "aspect_ratio" : 0.653,
          "alt" : "Ultraman Japanese Logo Hoodie",
          "height" : 1034,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/UltramanJapaneseHoodie_white.png?v=1646777054",
          "width" : 675
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/UltramanJapaneseHoodie_white.png?v=1646777054",
        "handle" : "ultraman-japanese-logo-hoodie",
        "requires_shipping" : true,
        "product_type" : "Fleece",
        "product_title" : "Ultraman Japanese Logo Hoodie",
        "product_description" : "The right choice for the enlightened purist, this hoodie features the ULTRAMAN OFFICIAL LOGO in both English and Japanese. Complete with a hood for protecting your head from unwanted kaiju attacks, our take on this classic sweatshirt has a comfortable and relaxed fit with just the right amount of weight to keep you cozy without slowing you down from protecting humanity.\nUnisex Item\nFabric :  80% Cotton, 20% Polyester. 100% Cotton Face Brushed Back Fleece. Fabric Weight :  7.4 oz\n\n**PRODUCT SHOWN IS A SAMPLE IMAGE**\nThis item is produced to order. Product will be shipped from our facility within 2-3 weeks. ",
        "variant_title" : "White \/ X-Small",
        "variant_options" : ["White",
        "X-Small"],
        "options_with_values" : [
          {
            "name" : "Color",
            "value" : "White"
          },
          {
            "name" : "Size",
            "value" : "X-Small"
          }
        ],
        "line_level_discount_allocations" : [],
        "line_level_total_discount" : 0
      },
      {
        "id" : 42945545502912,
        "properties" : {},
        "quantity" : 2,
        "variant_id" : 42945545502912,
        "key" : "42945545502912 : 1098af3b7e60a57e809080688a5c515e",
        "title" : "UC Logo Hat",
        "price" : 3000,
        "original_price" : 3000,
        "discounted_price" : 3000,
        "line_price" : 6000,
        "original_line_price" : 6000,
        "total_discount" : 0,
        "discounts" : [],
        "sku" : "",
        "grams" : 99,
        "vendor" : "Ultraman Connection",
        "taxable" : true,
        "product_id" : 7299432513728,
        "product_has_only_default_variant" : true,
        "gift_card" : false,
        "final_price" : 3000,
        "final_line_price" : 6000,
        "url" : "\/products\/uc-logo-hat?variant=42945545502912",
        "featured_image" : {
          "aspect_ratio" : 1.0,
          "alt" : "UC Logo Hat",
          "height" : 1123,
          "url" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/UCLogoHat.png?v=1659372087",
          "width" : 1123
        },
        "image" : "https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/UCLogoHat.png?v=1659372087",
        "handle" : "uc-logo-hat",
        "requires_shipping" : true,
        "product_type" : "Hats",
        "product_title" : "UC Logo Hat",
        "product_description" : "Well, well, well, look who has their very own hat! We know, we know\u2026You\u2019ve grown tired of simply telling others that you\u2019re an Ultraman Connection member and have been dying for a way to prove it by putting something on your head. Well, the wait is finally over. Go forth Ultraman Connection member! We wish you shade, comfort, and courage on all your journeys.\nUnisex Item\n5-Panel, Structured Crown Height :  3 \u00be\u201d, High Profile Classic Green Undervisor, 8-Row Stitching on Visor 80% Acrylic\/20% Wool Matching Plastic Snapback Adjustable Closure \n\n**PRODUCT SHOWN IS A SAMPLE IMAGE**\nThis item is produced to order. Product will be shipped from our facility within 2-3 weeks. ",
        "variant_title" : null,
        "variant_options" : [
          "Default Title"
        ],
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
    "items_subtotal_price" : 13500,
    "cart_level_discount_applications" : []
  };

  constructor(
    public appComponent: AppComponent
  ) { }

  ngOnInit(): void {
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
