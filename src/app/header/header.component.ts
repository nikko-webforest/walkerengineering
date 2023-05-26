import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  @Input() headerNavigation01List: any;

  @Input() headerNavigation02List: any;

  @Input() contactDetails: any;

  headerLogos: any = {
    main: {
      title: 'AIRSEP Walker Engineering Enterprises',
      url: '/',
      imgSrc: 'assets/WE_Header_Main_logo-v01.png',
    },
    sub: {
      title: 'WALKER Performance Filtration',
      url: '/',
      imgSrc: 'assets/WE_Header_Sub_logo-v01.png',
    }
  };

  headerNavigation01ActiveItem: number = 0;
  showMegaMenu: boolean = false;
  selectedMainCategory: string = '';
  mobileMenuShow: boolean = false;

  productsAll: any = [
    {
      "id": 8266462298429,
      "title": "AIRSEP Air Filter (9Dia x 12L) Tapered -Part# CD197  10.00% Off Auto renew",
      "handle": "airsep-air-filter-9dia-x-12l-tapered-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e\n\u003cp\u003eThis filter was also used on factory installed AIRSEPS on Caterpillar 3412TA marine engines starting in 1992.\u003c\/p\u003e\n\u003cp\u003e\u003cspan\u003ePlease verify filter length before ordering to avoid a re-stocking fee\u003c\/span\u003e, as it is very important the same size filter is replaced or serviced.\u003c\/p\u003e\n\u003cp\u003eThis filter is 12\" long.\u003c\/p\u003e\n\u003cp\u003e\u003cstrong\u003eWalker Part# CD197\u003c\/strong\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cstrong\u003eDirect Replacement for:\u003c\/strong\u003e\u003c\/span\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003cspan\u003e\u003cstrong\u003eCaterpillar:\u00a0 6I-0384 or 6I0384\u003c\/strong\u003e\u003c\/span\u003e\u003c\/li\u003e\n\u003cli\u003e\u003cspan\u003e\u003cstrong\u003eDetroit Diesel: 23508033\u003c\/strong\u003e\u003c\/span\u003e\u003c\/li\u003e\n\u003c\/ul\u003e",
      "published_at": "2023-05-17T14:56:59-04:00",
      "created_at": "2023-05-04T13:38:08-04:00",
      "updated_at": "2023-05-17T14:56:59-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "23508033",
        "6I-0384",
        "6I0384",
        "CD 197",
        "CD197",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127346979133,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400070",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "144.96",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462298429,
          "created_at": "2023-05-04T13:38:08-04:00",
          "updated_at": "2023-05-04T13:38:08-04:00"
        }
      ],
      "images": [
        {
          "id": 41133587824957,
          "created_at": "2023-05-04T13:38:08-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:08-04:00",
          "product_id": 8266462298429,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/418Wxd3GACL_e0f747f1-caba-4575-b78f-89ec0f483ae0.jpg?v=1683221888",
          "width": 500,
          "height": 373
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462265661,
      "title": "AIRSEP Kit - Mercrusier 1.7L -Kit # 90-1372  10.00% Off Auto renew",
      "handle": "airsep-kit-mercrusier-1-7l-kit-90-1373",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:59-04:00",
      "created_at": "2023-05-04T13:38:06-04:00",
      "updated_at": "2023-05-17T14:56:59-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Walker AIRSEP System",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127346946365,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "89.96",
          "grams": 1814,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462265661,
          "created_at": "2023-05-04T13:38:06-04:00",
          "updated_at": "2023-05-04T13:38:06-04:00"
        }
      ],
      "images": [
        {
          "id": 41133587693885,
          "created_at": "2023-05-04T13:38:06-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:06-04:00",
          "product_id": 8266462265661,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AIRSEP_Merc_1.7_993a4d85-0e8b-46fe-b87f-a7f84bc724cd.jpg?v=1683221886",
          "width": 1500,
          "height": 955
        },
        {
          "id": 41133587726653,
          "created_at": "2023-05-04T13:38:06-04:00",
          "position": 2,
          "updated_at": "2023-05-04T13:38:06-04:00",
          "product_id": 8266462265661,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/I7L_MercDiesel_001_a8c26a1e-0f8f-404f-8720-376ecce3f3a1.jpg?v=1683221886",
          "width": 640,
          "height": 480
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462134589,
      "title": "AIRSEP Air Filter (9Dia x 9L) Tapered -Part# CD196  10.00% Off Auto renew",
      "handle": "airsep-air-filter-9dia-x-9l-tapered-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:59-04:00",
      "created_at": "2023-05-04T13:38:03-04:00",
      "updated_at": "2023-05-17T14:56:59-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "CD 196",
        "CD196",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127346684221,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400063",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "124.79",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462134589,
          "created_at": "2023-05-04T13:38:03-04:00",
          "updated_at": "2023-05-04T13:38:03-04:00"
        }
      ],
      "images": [
        {
          "id": 41133587136829,
          "created_at": "2023-05-04T13:38:03-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:03-04:00",
          "product_id": 8266462134589,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/51yy4Nc40pL_947bf7ee-6cb9-4817-a2c3-2b5d7ec9e920.jpg?v=1683221883",
          "width": 500,
          "height": 385
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462953789,
      "title": "AIRSEP Air Filter (7.5 Dia x 9L) Cummins 6CTA -Part# CD177  10.00% Off Auto renew",
      "handle": "copy-of-airsep-air-filter-7-5-dia-x-8l-tapered-part-cd195-2",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:58-04:00",
      "created_at": "2023-05-04T13:38:30-04:00",
      "updated_at": "2023-05-17T14:56:58-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "CD 177",
        "CD177",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347896637,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "107.96",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462953789,
          "created_at": "2023-05-04T13:38:30-04:00",
          "updated_at": "2023-05-04T13:38:30-04:00"
        }
      ],
      "images": [
        {
          "id": 41133590053181,
          "created_at": "2023-05-04T13:38:30-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:30-04:00",
          "product_id": 8266462953789,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_8f576b28-c10a-4e1c-99dc-c71c181f6701.jpg?v=1683221910",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462789949,
      "title": "AIRSEP Air Filter (7.5 Dia x 8L) Cummins 6CTA -Part# CD176  10.00% Off Auto renew",
      "handle": "copy-of-airsep-air-filter-7-5-dia-x-9l-cummins-6cta-part-cd177-3",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:57-04:00",
      "created_at": "2023-05-04T13:38:28-04:00",
      "updated_at": "2023-05-17T14:56:57-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "3866468",
        "CD 176",
        "CD176",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347765565,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "107.96",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462789949,
          "created_at": "2023-05-04T13:38:28-04:00",
          "updated_at": "2023-05-04T13:38:28-04:00"
        }
      ],
      "images": [
        {
          "id": 41133589954877,
          "created_at": "2023-05-04T13:38:28-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:28-04:00",
          "product_id": 8266462789949,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_8022b9a4-190e-435f-8247-c839520cd4a1.jpg?v=1683221908",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462757181,
      "title": "AIRSEP Air Filter (7.5 Dia x 7L) Cummins 6BTA -Part# CD175  10.00% Off Auto renew",
      "handle": "air-filter-7-5-dia-x-7l-cummins-6cta-part-cd175-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:57-04:00",
      "created_at": "2023-05-04T13:38:26-04:00",
      "updated_at": "2023-05-17T14:56:57-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "3897148",
        "cd 175",
        "cd175",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347732797,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "108.78",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462757181,
          "created_at": "2023-05-04T13:38:27-04:00",
          "updated_at": "2023-05-04T13:38:27-04:00"
        }
      ],
      "images": [
        {
          "id": 41133589692733,
          "created_at": "2023-05-04T13:38:27-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:27-04:00",
          "product_id": 8266462757181,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_078d5b5b-b3b5-4597-b8d2-33e93cd3de77.jpg?v=1683221907",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462331197,
      "title": "AIRSEP Air Filter (7.5 Dia x 8L) Tapered -Part# CD195  10.00% Off Auto renew",
      "handle": "airsep-air-filter-7-5-dia-x-8l-tapered-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e\n\u003cp\u003e\u003cspan\u003ePlease verify filter length before ordering to avoid a restocking fee\u003c\/span\u003e, as it is very important the same size filter is replaced or serviced.\u003c\/p\u003e\n\u003cp\u003eThis filter is 8\" long.\u003c\/p\u003e\n\u003cp\u003e\u003cstrong\u003eWalker Part# CD195 (CD 195)\u003cbr\u003e\u003c\/strong\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cspan\u003e\u003cstrong\u003eDirect Replacement for:\u003c\/strong\u003e\u003c\/span\u003e\u003c\/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003cspan\u003e\u003cstrong\u003eCaterpillar Part# 4P-7918 or 4P7918\u003c\/strong\u003e\u003c\/span\u003e\u003c\/li\u003e\n\u003c\/ul\u003e",
      "published_at": "2023-05-17T14:56:57-04:00",
      "created_at": "2023-05-04T13:38:09-04:00",
      "updated_at": "2023-05-17T14:56:57-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "4P-7918",
        "4P7918",
        "CD 195",
        "CD195",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347011901,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400049",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "85.46",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462331197,
          "created_at": "2023-05-04T13:38:10-04:00",
          "updated_at": "2023-05-04T13:38:10-04:00"
        }
      ],
      "images": [
        {
          "id": 41133587923261,
          "created_at": "2023-05-04T13:38:10-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:10-04:00",
          "product_id": 8266462331197,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/51yy4Nc40pL_f09b2423-93e8-4ad2-94d2-e12460e67a94.jpg?v=1683221890",
          "width": 500,
          "height": 385
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462495037,
      "title": "AIRSEP Air Filter (12Dia x 8L) Straight -Part# CD187  10.00% Off Auto renew",
      "handle": "airsep-air-filter-12dia-x-8l-straight-part-cd187-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:56-04:00",
      "created_at": "2023-05-04T13:38:14-04:00",
      "updated_at": "2023-05-17T14:56:56-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "12 X 8",
        "CD187",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347175741,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "143.96",
          "grams": 2313,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462495037,
          "created_at": "2023-05-04T13:38:14-04:00",
          "updated_at": "2023-05-04T13:38:14-04:00"
        }
      ],
      "images": [
        {
          "id": 41133588218173,
          "created_at": "2023-05-04T13:38:14-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:14-04:00",
          "product_id": 8266462495037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cd204-PN-400328100_039f9449-c050-4f55-99eb-a7f307f2f315.jpg?v=1683221894",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462691645,
      "title": "AIRSEP Air Filter (7.5 Dia x 6L) Cummins 6BTA -Part# CD174  10.00% Off Auto renew",
      "handle": "copy-of-airsep-air-filter-7-5-dia-x-7l-cummins-6bta-part-cd175-3",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:55-04:00",
      "created_at": "2023-05-04T13:38:25-04:00",
      "updated_at": "2023-05-17T14:56:55-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "3866492",
        "CD 174",
        "CD174",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347667261,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "103.46",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462691645,
          "created_at": "2023-05-04T13:38:25-04:00",
          "updated_at": "2023-05-04T13:38:25-04:00"
        }
      ],
      "images": [
        {
          "id": 41133589561661,
          "created_at": "2023-05-04T13:38:25-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:25-04:00",
          "product_id": 8266462691645,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_6e74f359-f0c7-4f58-9b0c-334885e95da2.jpg?v=1683221905",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462658877,
      "title": "AIRSEP Air Filter (7.5 Dia x 5L) Cummins 4BTA-6BTA -Part# CD173  10.00% Off Auto renew",
      "handle": "copy-of-airsep-air-filter-7-5-dia-x-7l-cummins-6bta-part-cd175-2",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:55-04:00",
      "created_at": "2023-05-04T13:38:23-04:00",
      "updated_at": "2023-05-17T14:56:55-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "4BTA",
        "6BTA",
        "CD 173",
        "CD173",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347634493,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "103.46",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462658877,
          "created_at": "2023-05-04T13:38:23-04:00",
          "updated_at": "2023-05-04T13:38:23-04:00"
        }
      ],
      "images": [
        {
          "id": 41133589463357,
          "created_at": "2023-05-04T13:38:23-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:23-04:00",
          "product_id": 8266462658877,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888853_33eea272-796b-4709-83b3-17a69ee6f060.jpg?v=1683221903",
          "width": 1500,
          "height": 1311
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266461675837,
      "title": "AIRSEP Air Filter (13 Dia x 7L) Alaska Diesel 6125 -Part# 40-1037  10.00% Off Auto renew",
      "handle": "airsep-air-filter-13-dia-x-7l-alaska-diesel-6125-part-40-1038",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:55-04:00",
      "created_at": "2023-05-04T13:38:01-04:00",
      "updated_at": "2023-05-17T14:56:55-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP CCE",
      "tags": [
        "40-1037",
        "401037",
        "Caterpillar",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127346061629,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "121.46",
          "grams": 2313,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266461675837,
          "created_at": "2023-05-04T13:38:01-04:00",
          "updated_at": "2023-05-04T13:38:01-04:00"
        }
      ],
      "images": [
        {
          "id": 41133586547005,
          "created_at": "2023-05-04T13:38:01-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:01-04:00",
          "product_id": 8266461675837,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cd204-PN-400328100_55e256a7-2027-4d45-b765-8f35b7f3b1c3.jpg?v=1683221881",
          "width": 2048,
          "height": 1536
        },
        {
          "id": 41133586579773,
          "created_at": "2023-05-04T13:38:01-04:00",
          "position": 2,
          "updated_at": "2023-05-04T13:38:01-04:00",
          "product_id": 8266461675837,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/JD-6125_59b55dbd-eb81-4d9f-998a-a93373042179.jpg?v=1683221881",
          "width": 813,
          "height": 564
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266461610301,
      "title": "AIRSEP Air Filter (12Dia x 10L) Straight -Part# CD204  10.00% Off Auto renew",
      "handle": "copy-of-airsep-air-filter-9dia-x-12l-tapered-part-cd197-3",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:54-04:00",
      "created_at": "2023-05-04T13:37:58-04:00",
      "updated_at": "2023-05-17T14:56:54-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127345996093,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "179.96",
          "grams": 2495,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266461610301,
          "created_at": "2023-05-04T13:37:59-04:00",
          "updated_at": "2023-05-04T13:37:59-04:00"
        }
      ],
      "images": [
        {
          "id": 41133586481469,
          "created_at": "2023-05-04T13:37:59-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:37:59-04:00",
          "product_id": 8266461610301,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cd204-PN-400328100_73ddc8bc-cee0-41f9-ac35-97a930aa25da.jpg?v=1683221879",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266461544765,
      "title": "AIRSEP Air Filter  (7.5 Dia x 10L) Tapered -Part# CD190  10.00% Off Auto renew",
      "handle": "airsep-air-filter-7-5-dia-x-10l-tapered-part-cd195-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:54-04:00",
      "created_at": "2023-05-04T13:37:57-04:00",
      "updated_at": "2023-05-17T14:56:54-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "Air Filter CCE AIRSEP",
        "Air Filter Traditional AIRSEP",
        "AIRSEP",
        "AIRSEP Air Filters (CCE)",
        "Airsep Products",
        "CD 190",
        "CD190",
        "Subscription",
        "Walker",
        "Walker airsep"
      ],
      "variants": [
        {
          "id": 45127345930557,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "99.96",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266461544765,
          "created_at": "2023-05-04T13:37:57-04:00",
          "updated_at": "2023-05-04T13:37:57-04:00"
        }
      ],
      "images": [
        {
          "id": 41133586219325,
          "created_at": "2023-05-04T13:37:57-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:37:57-04:00",
          "product_id": 8266461544765,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/51yy4Nc40pL_7c90b90e-fb51-4a5a-b6ba-bd79b501d8de.jpg?v=1683221877",
          "width": 500,
          "height": 385
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462527805,
      "title": "AIRSEP Air Filter (12Dia x 7L) Straight -Part# CD186  10.00% Off Auto renew",
      "handle": "airsep-air-filter-12dia-x-7l-straight-part-cd186-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:53-04:00",
      "created_at": "2023-05-04T13:38:15-04:00",
      "updated_at": "2023-05-17T14:56:53-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "101-1626",
        "1011626",
        "12 X 7",
        "Caterpillar",
        "CD186",
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347208509,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "143.96",
          "grams": 2313,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462527805,
          "created_at": "2023-05-04T13:38:15-04:00",
          "updated_at": "2023-05-04T13:38:15-04:00"
        }
      ],
      "images": [
        {
          "id": 41133588349245,
          "created_at": "2023-05-04T13:38:15-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:15-04:00",
          "product_id": 8266462527805,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cd204-PN-400328100_ae2cc1c8-ab33-4774-b18b-c41f9ea9ddbf.jpg?v=1683221895",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8266462462269,
      "title": "AIRSEP Air Filter (12Dia x 6L) Straight -Part# CD203  10.00% Off Auto renew",
      "handle": "airsep-air-filter-12dia-x-6l-straight-part-cd203-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:53-04:00",
      "created_at": "2023-05-04T13:38:11-04:00",
      "updated_at": "2023-05-17T14:56:53-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45127347142973,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "139.46",
          "grams": 2313,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8266462462269,
          "created_at": "2023-05-04T13:38:11-04:00",
          "updated_at": "2023-05-04T13:38:11-04:00"
        }
      ],
      "images": [
        {
          "id": 41133588021565,
          "created_at": "2023-05-04T13:38:11-04:00",
          "position": 1,
          "updated_at": "2023-05-04T13:38:11-04:00",
          "product_id": 8266462462269,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cd204-PN-400328100_a02ceb11-bf00-4278-ae46-eeb54164d319.jpg?v=1683221891",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274933416253,
      "title": "CCV Air Filter (8.78 Dia x 10.32L) Closed End Filter -Part# 40-1195  10.00% Off Auto renew",
      "handle": "ccv-air-filter-8-78-dia-x-10-32l-closed-end-filter-part-40-1196",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:13-04:00",
      "created_at": "2023-05-09T09:45:17-04:00",
      "updated_at": "2023-05-17T14:56:13-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154009645373,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "148.96",
          "grams": 2223,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274933416253,
          "created_at": "2023-05-09T09:45:17-04:00",
          "updated_at": "2023-05-09T09:45:17-04:00"
        }
      ],
      "images": [
        {
          "id": 41168365388093,
          "created_at": "2023-05-09T09:45:17-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:45:17-04:00",
          "product_id": 8274933416253,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/web-C9_-_Copy_b8b54081-c91d-4c68-9118-ebc3bea7570a.jpg?v=1683639917",
          "width": 239,
          "height": 218
        },
        {
          "id": 41168365420861,
          "created_at": "2023-05-09T09:45:17-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:45:17-04:00",
          "product_id": 8274933416253,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_099cd89f-bc43-4c8a-b760-710e6d6c0017.jpg?v=1683639917",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274929385789,
      "title": "Chrome Oil Filter Cover (CAT C32-3512-3516 \u0026 More) -Part# 1000858",
      "handle": "chrome-oil-filter-cover-cat-c32-3512-3516-more-part-1000858",
      "body_html": "\u003cp\u003eTired of painting your oil filters on Caterpillar engines? Have a white engine?\u003c\/p\u003e\n\u003cp\u003eNow you can install these polished \u003cspan style=\"text-decoration: underline;\"\u003estainless steel\u003c\/span\u003e covers with the look of chrome, to cover unsightly industrial paint finishes, or filter text. Most filters are painted when a marine engine is delivered new...but after your first filter change, you can only get the same fuel and oil filters that end up on bull-dozers, trucks, or tractors. They just don't match today's pristine engines found on today's yachts!\u003c\/p\u003e\n\u003cp\u003eThese high quality stainless steel covers really make a difference in any high quality engine room. Easy to install, they last for years, and add a nice accent to your yacht's engine room. Covers are sold individually, available for most engines with single or twin filters.\u003c\/p\u003e\n\u003cp\u003eOrder Today ! (Sorry, these covers do not have any logos on them. They are plain metal, polished to a mirror finish)\u003c\/p\u003e\n\u003cp\u003eThis filter cover fits the following filters: \u003cstrong\u003e1R-0716,2P-4005, 1R-1808, 211-4359\u003c\/strong\u003e (Oil filter cover may be too long on some installations).\u003c\/p\u003e\n\u003cp\u003e\u003cspan style=\"color: #0000ff;\"\u003eAlso fits \u003cspan style=\"text-decoration: underline;\"\u003eFuel\u003c\/span\u003e Filters:\u003cstrong\u003e1R-0755\u003c\/strong\u003e\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003eCovers are available for the following engine models: C9, 3176, 3196, C12, 3406, 3406C, 3406E, C15, C18, 3408, 3412, 3412C, 3412D, 3412D, 3412E, C30, C32\u003c\/p\u003e\n\u003cp\u003e\u003cstrong\u003eWalker Part# 1000858\u003c\/strong\u003e\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:12-04:00",
      "created_at": "2023-05-09T09:44:12-04:00",
      "updated_at": "2023-05-17T14:56:12-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Diesel Engine Accessories",
      "tags": [
        "100 0858",
        "1000858",
        "1R-0755",
        "accessory",
        "Air Filter Traditional AIRSEP",
        "air sep",
        "AIRSEP",
        "Airsep Products",
        "AIRSEP Products for Caterpillar",
        "C32",
        "Caterpillar",
        "Walker",
        "Walker Accessories",
        "Walker airsep"
      ],
      "variants": [
        {
          "id": 45153995358525,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400803",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "199.95",
          "grams": 1814,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274929385789,
          "created_at": "2023-05-09T09:44:12-04:00",
          "updated_at": "2023-05-09T09:44:12-04:00"
        }
      ],
      "images": [
        {
          "id": 41168350380349,
          "created_at": "2023-05-09T09:44:12-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:44:12-04:00",
          "product_id": 8274929385789,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/51kIIFuYt8L.jpg?v=1683639852",
          "width": 452,
          "height": 382
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274938593597,
      "title": "CCE FIELD SERVICE KIT 8\" AIRSEP COALESCER 2 PAK -Part# 1002032  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-8-coalescer-2-pak-1",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:11-04:00",
      "created_at": "2023-05-09T09:46:16-04:00",
      "updated_at": "2023-05-17T14:56:11-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154020950333,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400711",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274938593597,
          "created_at": "2023-05-09T09:46:16-04:00",
          "updated_at": "2023-05-09T09:46:16-04:00"
        }
      ],
      "images": [
        {
          "id": 41168377741629,
          "created_at": "2023-05-09T09:46:16-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:16-04:00",
          "product_id": 8274938593597,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/41XWfFI1_2BtL_07a034e4-167a-4155-8586-3e4e6117237c.jpg?v=1683639976",
          "width": 500,
          "height": 341
        },
        {
          "id": 41168377774397,
          "created_at": "2023-05-09T09:46:16-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:46:16-04:00",
          "product_id": 8274938593597,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/walker1000326-04_d797be4e-087d-43e8-8c6a-5566457862da.jpg?v=1683639976",
          "width": 1609,
          "height": 1065
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274933645629,
      "title": "CCE FIELD SERVICE KIT 8\" AIRSEP (Cummins QSC) -Part# 1000267  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-8-airsep-cummins-qsc-part-1000268",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:11-04:00",
      "created_at": "2023-05-09T09:45:22-04:00",
      "updated_at": "2023-05-17T14:56:11-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154010562877,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "494.10",
          "grams": 9072,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274933645629,
          "created_at": "2023-05-09T09:45:22-04:00",
          "updated_at": "2023-05-09T09:45:22-04:00"
        }
      ],
      "images": [
        {
          "id": 41168366207293,
          "created_at": "2023-05-09T09:45:22-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:45:22-04:00",
          "product_id": 8274933645629,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/ServiceKitQSB_releasev3_955b4e0a-409f-44fc-8a5a-1b173d1cc7b6.jpg?v=1683639922",
          "width": 1150,
          "height": 711
        },
        {
          "id": 41168366240061,
          "created_at": "2023-05-09T09:45:22-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:45:22-04:00",
          "product_id": 8274933645629,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Copy_of_QSB_2cba3832-6c55-4734-a161-1de573aacdc3.jpg?v=1683639922",
          "width": 144,
          "height": 96
        },
        {
          "id": 41168366272829,
          "created_at": "2023-05-09T09:45:22-04:00",
          "position": 3,
          "updated_at": "2023-05-09T09:45:22-04:00",
          "product_id": 8274933645629,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/WalkerCCEpicOVERVIEW2_92ea5af0-de23-455e-9e35-8eb8f677105d.jpg?v=1683639922",
          "width": 1583,
          "height": 2048
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274932957501,
      "title": "CCE FIELD SERVICE KIT 8\" AIRSEP (Cummins QSB) -Part# 1000266  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-8-airsep-cummins-qsb-part-1000267",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:11-04:00",
      "created_at": "2023-05-09T09:45:10-04:00",
      "updated_at": "2023-05-17T14:56:12-04:00",
      "vendor": "Walker Airsep Superstore",
      "product_type": "",
      "tags": [],
      "variants": [
        {
          "id": 45154008596797,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "494.10",
          "grams": 9072,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274932957501,
          "created_at": "2023-05-09T09:45:10-04:00",
          "updated_at": "2023-05-09T09:45:10-04:00"
        }
      ],
      "images": [
        {
          "id": 41168363716925,
          "created_at": "2023-05-09T09:45:10-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:45:10-04:00",
          "product_id": 8274932957501,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/ServiceKitQSB_releasev3_57ba218f-287c-48b5-adcf-8ffb0c7e95fe.jpg?v=1683639910",
          "width": 1150,
          "height": 711
        },
        {
          "id": 41168363749693,
          "created_at": "2023-05-09T09:45:10-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:45:10-04:00",
          "product_id": 8274932957501,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Copy_of_QSB_87d75b77-1df3-44b4-b166-0abeec5f7c46.jpg?v=1683639910",
          "width": 144,
          "height": 96
        },
        {
          "id": 41168363782461,
          "created_at": "2023-05-09T09:45:10-04:00",
          "position": 3,
          "updated_at": "2023-05-09T09:45:10-04:00",
          "product_id": 8274932957501,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/WalkerCCEpicOVERVIEW2_f44c0247-0415-4610-a1b6-7fa6ee51ab6a.jpg?v=1683639910",
          "width": 1583,
          "height": 2048
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274933186877,
      "title": "CCV Air Filter (7.15 Dia x 10.25L) Closed End Filter -Part# 40-1194  10.00% Off Auto renew",
      "handle": "ccv-air-filter-7-15-dia-x-10-25l-closed-end-filter-part-40-1195",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:10-04:00",
      "created_at": "2023-05-09T09:45:13-04:00",
      "updated_at": "2023-05-17T14:56:10-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Replacement Air Filter AIRSEP Traditional",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154008957245,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "144.96",
          "grams": 1769,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274933186877,
          "created_at": "2023-05-09T09:45:13-04:00",
          "updated_at": "2023-05-09T09:45:13-04:00"
        }
      ],
      "images": [
        {
          "id": 41168364273981,
          "created_at": "2023-05-09T09:45:13-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:45:13-04:00",
          "product_id": 8274933186877,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/web-C9_-_Copy_c44fcf6a-d082-411b-9393-bc4ce08956d5.jpg?v=1683639913",
          "width": 239,
          "height": 218
        },
        {
          "id": 41168364306749,
          "created_at": "2023-05-09T09:45:13-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:45:13-04:00",
          "product_id": 8274933186877,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/6888861_6c51e9e9-1582-4e9e-8e74-26c35c3f5d8f.jpg?v=1683639913",
          "width": 1334,
          "height": 1176
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274938265917,
      "title": "CCE FIELD SERVICE KIT 12\" AIRSEP COALESCER 2 PAK -Part# 1000821 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-12-airsep-coalescer-2-pak-part-1000824",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:09-04:00",
      "created_at": "2023-05-09T09:46:13-04:00",
      "updated_at": "2023-05-17T14:56:09-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154020622653,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400735",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "458.96",
          "grams": 9072,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274938265917,
          "created_at": "2023-05-09T09:46:13-04:00",
          "updated_at": "2023-05-09T09:46:13-04:00"
        }
      ],
      "images": [
        {
          "id": 41168377053501,
          "created_at": "2023-05-09T09:46:13-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:13-04:00",
          "product_id": 8274938265917,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/41cgEmZaYTL_9b2f9247-33b9-41ec-96c2-8efd04ccdb47.jpg?v=1683639973",
          "width": 500,
          "height": 360
        },
        {
          "id": 41168377086269,
          "created_at": "2023-05-09T09:46:13-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:46:13-04:00",
          "product_id": 8274938265917,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Walker_AIRSEP_on_CAT_C30-C32web_aaf63785-a60f-45c6-ba98-9602022e3a09.jpg?v=1683639973",
          "width": 834,
          "height": 981
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274937938237,
      "title": "CCE FIELD SERVICE KIT 12\" AIRSEP COALESCER 2 PAK -Part# 1000821 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-12-airsep-coalescer-2-pak-part-1000823",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:09-04:00",
      "created_at": "2023-05-09T09:46:09-04:00",
      "updated_at": "2023-05-17T14:56:09-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154020327741,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400735",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "458.96",
          "grams": 9072,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274937938237,
          "created_at": "2023-05-09T09:46:09-04:00",
          "updated_at": "2023-05-09T09:46:09-04:00"
        }
      ],
      "images": [
        {
          "id": 41168376889661,
          "created_at": "2023-05-09T09:46:09-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:09-04:00",
          "product_id": 8274937938237,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/41cgEmZaYTL_315ada7d-ccfc-4c81-b124-7ed54b91fc8f.jpg?v=1683639969",
          "width": 500,
          "height": 360
        },
        {
          "id": 41168376922429,
          "created_at": "2023-05-09T09:46:09-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:46:09-04:00",
          "product_id": 8274937938237,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Walker_AIRSEP_on_CAT_C30-C32web_f753a73a-fe55-4a5e-9974-2dd3f09662ca.jpg?v=1683639969",
          "width": 834,
          "height": 981
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274937512253,
      "title": "CCE FIELD SERVICE KIT 12\" AIRSEP COALESCER 2 PAK -Part# 1000821  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-12-airsep-coalescer-2-pak-part-1000822",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:09-04:00",
      "created_at": "2023-05-09T09:46:06-04:00",
      "updated_at": "2023-05-17T14:56:09-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154019311933,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "681404400735",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "458.96",
          "grams": 9072,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274937512253,
          "created_at": "2023-05-09T09:46:06-04:00",
          "updated_at": "2023-05-09T09:46:06-04:00"
        }
      ],
      "images": [
        {
          "id": 41168376463677,
          "created_at": "2023-05-09T09:46:06-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:06-04:00",
          "product_id": 8274937512253,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/41cgEmZaYTL_a01d8ce3-d77f-4664-bdcf-fcb5cf677195.jpg?v=1683639966",
          "width": 500,
          "height": 360
        },
        {
          "id": 41168376529213,
          "created_at": "2023-05-09T09:46:06-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:46:06-04:00",
          "product_id": 8274937512253,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Walker_AIRSEP_on_CAT_C30-C32web_bf186564-fb1c-4335-81ae-3687c0bc80a3.jpg?v=1683639966",
          "width": 834,
          "height": 981
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274940395837,
      "title": "CCE FIELD SERVICE KIT 10\" XL AIRSEP COALESCER 2 PAK -Part# 1002332 (3\") 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-airsep-coalescer-2-pak-part-1002335",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:08-04:00",
      "created_at": "2023-05-09T09:46:31-04:00",
      "updated_at": "2023-05-17T14:56:09-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154025374013,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274940395837,
          "created_at": "2023-05-09T09:46:31-04:00",
          "updated_at": "2023-05-09T09:46:31-04:00"
        }
      ],
      "images": [
        {
          "id": 41168380952893,
          "created_at": "2023-05-09T09:46:31-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:31-04:00",
          "product_id": 8274940395837,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/10XL_CCE_Coalescer_1002300_Service_Kit_272af022-8b9b-403a-9e91-0426fea6a402.jpg?v=1683639991",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274939642173,
      "title": "CCE FIELD SERVICE KIT 10\" XL AIRSEP COALESCER 2 PAK -Part# 1002300 (4\") 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-coalescer-2-pak-part-1002302",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:08-04:00",
      "created_at": "2023-05-09T09:46:24-04:00",
      "updated_at": "2023-05-17T14:56:08-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154023145789,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274939642173,
          "created_at": "2023-05-09T09:46:24-04:00",
          "updated_at": "2023-05-09T09:46:24-04:00"
        }
      ],
      "images": [
        {
          "id": 41168379773245,
          "created_at": "2023-05-09T09:46:24-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:24-04:00",
          "product_id": 8274939642173,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/10XL_CCE_Coalescer_1002300_Service_Kit_6d619006-f332-44e4-995e-42eaf3ffea2f.jpg?v=1683639984",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274940166461,
      "title": "CCE FIELD SERVICE KIT 10\" XL AIRSEP COALESCER 2 PAK -Part# 1002332 (3\")  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-airsep-coalescer-2-pak-part-1002333",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:07-04:00",
      "created_at": "2023-05-09T09:46:29-04:00",
      "updated_at": "2023-05-17T14:56:07-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154025144637,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274940166461,
          "created_at": "2023-05-09T09:46:29-04:00",
          "updated_at": "2023-05-09T09:46:29-04:00"
        }
      ],
      "images": [
        {
          "id": 41168380592445,
          "created_at": "2023-05-09T09:46:29-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:29-04:00",
          "product_id": 8274940166461,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/10XL_CCE_Coalescer_1002300_Service_Kit_47c02adb-5749-4fbe-a02e-143285a8d250.jpg?v=1683639989",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274939871549,
      "title": "CCE FIELD SERVICE KIT 10\" XL AIRSEP COALESCER 2 PAK -Part# 1002332 (3\") 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-airsep-coalescer-2-pak-part-1002334",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:07-04:00",
      "created_at": "2023-05-09T09:46:26-04:00",
      "updated_at": "2023-05-17T14:56:07-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154024849725,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274939871549,
          "created_at": "2023-05-09T09:46:27-04:00",
          "updated_at": "2023-05-09T09:46:27-04:00"
        }
      ],
      "images": [
        {
          "id": 41168380264765,
          "created_at": "2023-05-09T09:46:26-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:26-04:00",
          "product_id": 8274939871549,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/10XL_CCE_Coalescer_1002300_Service_Kit_da1b7b1f-6ed6-4932-86a6-a7ce18985a07.jpg?v=1683639986",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274939314493,
      "title": "CCE FIELD SERVICE KIT 10\" XL AIRSEP COALESCER 2 PAK -Part# 1002300 (4\")  10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-coalescer-2-pak-part-1002301",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:07-04:00",
      "created_at": "2023-05-09T09:46:22-04:00",
      "updated_at": "2023-05-17T14:56:07-04:00",
      "vendor": "Walker AIRSEP",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154022850877,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "278.96",
          "grams": 2631,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274939314493,
          "created_at": "2023-05-09T09:46:22-04:00",
          "updated_at": "2023-05-09T09:46:22-04:00"
        }
      ],
      "images": [
        {
          "id": 41168378986813,
          "created_at": "2023-05-09T09:46:22-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:22-04:00",
          "product_id": 8274939314493,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/10XL_CCE_Coalescer_1002300_Service_Kit_335a3bcf-201b-4c1e-9aa8-d908c70f4550.jpg?v=1683639982",
          "width": 2048,
          "height": 1536
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    },
    {
      "id": 8274937119037,
      "title": "CCE FIELD SERVICE KIT 10\" x 14\"  Tapered CCE Air Filter 2 PAK -Kit # 1001139 10.00% Off Auto renew",
      "handle": "cce-field-service-kit-10-x-14-tapered-cce-air-filter-2-pak-kit-1001142",
      "body_html": "\u003cp\u003eWARNING: This product is for Recharge Subscriptions use  only, do not publish or delete this product. Customers will not see this message.\u003c\/p\u003e",
      "published_at": "2023-05-17T14:56:06-04:00",
      "created_at": "2023-05-09T09:46:03-04:00",
      "updated_at": "2023-05-17T14:56:06-04:00",
      "vendor": "Walker AIRSEP Air Filter",
      "product_type": "Field Service Kit",
      "tags": [
        "Subscription"
      ],
      "variants": [
        {
          "id": 45154018492733,
          "title": "Default Title",
          "option1": "Default Title",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": true,
          "taxable": true,
          "featured_image": null,
          "available": true,
          "price": "359.96",
          "grams": 9525,
          "compare_at_price": null,
          "position": 1,
          "product_id": 8274937119037,
          "created_at": "2023-05-09T09:46:03-04:00",
          "updated_at": "2023-05-09T09:46:03-04:00"
        }
      ],
      "images": [
        {
          "id": 41168375808317,
          "created_at": "2023-05-09T09:46:03-04:00",
          "position": 1,
          "updated_at": "2023-05-09T09:46:03-04:00",
          "product_id": 8274937119037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Walker_Field_Repair_Kit_300_dpi_a906b0d2-3583-4f4a-aa4c-f8abc84da3f3.jpg?v=1683639963",
          "width": 2048,
          "height": 1609
        },
        {
          "id": 41168375841085,
          "created_at": "2023-05-09T09:46:03-04:00",
          "position": 2,
          "updated_at": "2023-05-09T09:46:03-04:00",
          "product_id": 8274937119037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/webairfilters12x14t_C32_f59be280-4b31-456c-98f3-52db372c935e.jpg?v=1683639963",
          "width": 512,
          "height": 446
        },
        {
          "id": 41168375873853,
          "created_at": "2023-05-09T09:46:03-04:00",
          "position": 3,
          "updated_at": "2023-05-09T09:46:03-04:00",
          "product_id": 8274937119037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/Cleaning_Kit_Spray_2016_70b41df2-c6ae-4acb-a7bc-ff9fbfd5b88d.jpg?v=1683639963",
          "width": 1536,
          "height": 2048
        },
        {
          "id": 41168375906621,
          "created_at": "2023-05-09T09:46:03-04:00",
          "position": 4,
          "updated_at": "2023-05-09T09:46:03-04:00",
          "product_id": 8274937119037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/AIRSEP10x14_8de383cb-2603-4f13-ba67-f44a5f5784d6.jpg?v=1683639963",
          "width": 890,
          "height": 567
        },
        {
          "id": 41168375939389,
          "created_at": "2023-05-09T09:46:03-04:00",
          "position": 5,
          "updated_at": "2023-05-09T09:46:03-04:00",
          "product_id": 8274937119037,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0752\/6635\/9613\/products\/walker45_RBM_S-60_No-Step_7b73a45e-54c4-4bd3-9d37-406113ca38d0.jpg?v=1683639963",
          "width": 1496,
          "height": 1122
        }
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ]
    }
  ];

  productsSearchList: any = [];

  productSearchKeyword: string = '';

  constructor(
    // private eRef: ElementRef
  ) { }

  ngOnInit(): void {}

  // @HostListener('document:click', ['$event'])
  // clickOutside(event: any) {
  //   if( this.eRef.nativeElement.contains(event.target) ){
  //     // console.log('inside');
  //   }
  //   else {
  //     // console.log('outside');
  //     this.showMegaMenu = false;
  //     this.headerNavigation01ActiveItem = 0;
  //   }
  // }

  toggleMegaMenu(id: any, dropdownItems: any) {

    if( this.headerNavigation01ActiveItem == (id + 1) ){
      this.showMegaMenu = !this.showMegaMenu;
    }
    else {
      this.headerNavigation01ActiveItem = (id + 1);
      this.showMegaMenu = true;
    }

    // console.log(dropdownItems?.hasOwnProperty('mainCategories'));

    if( dropdownItems?.hasOwnProperty('mainCategories') == true ){
      dropdownItems.mainCategories.forEach((itemA: any, indexA: any) => {
        // console.log(itemA);
        // console.log(itemA?.name);
        if( indexA == 0 ){
          this.selectedMainCategory = itemA.name.toLowerCase();
        }
      });
    }
    else {
      this.selectedMainCategory = '';
    }
    
    // console.log(this.selectedMainCategory);
    // console.log(dropdownItems);
    // console.log(id);
  }

  hideMegaMenu() {
    console.log('outside');
    this.showMegaMenu = false;
    this.headerNavigation01ActiveItem = 0;
  }

  selectMainCategory(category: string) {
    this.selectedMainCategory = category.toLowerCase();
  }

  openLink(link: any) {
    if( link != '' ){
      window.location.href = link;
    }
  }

  productSearch() {
    this.productsSearchList = [];
    this.productsAll.forEach((item: any, index: any) => {
      if( item.title.toLowerCase().includes(this.productSearchKeyword.toLowerCase()) && this.productSearchKeyword != '' ){
        this.productsSearchList.push(item);
      }
    });
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    var discount = 100 - ((currentPrice/beforePrice) * 100);
    return discount.toFixed(0)+'%';
  }

  addToCart() {

  }

  // mobile
  toggleMobileMenu() {
    this.mobileMenuShow = !this.mobileMenuShow;
    this.mobileDropdownIndex = 0;
    this.mobileMainCategoryDropdownIndex = 0;
  }

  mobileDropdownIndex: number = 0;

  toggleMobileDropdown(dropdownIndex: number) {
    console.log(dropdownIndex);

    this.mobileMainCategoryDropdownIndex = 0;
    if( this.mobileDropdownIndex == dropdownIndex ){
      this.mobileDropdownIndex = 0;
    }
    else {
      this.mobileDropdownIndex = dropdownIndex;
    }
  }

  mobileMainCategoryDropdownIndex: number = 0;

  toggleMainCategoryDropdown(mainCategoryDropdownIndex: number) {
    console.log(mainCategoryDropdownIndex);

    if( this.mobileMainCategoryDropdownIndex == mainCategoryDropdownIndex ){
      this.mobileMainCategoryDropdownIndex = 0;
    }
    else {
      this.mobileMainCategoryDropdownIndex = mainCategoryDropdownIndex;
    }
  }

}
