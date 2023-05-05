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

  productsAll: any = [
    {
      "id": 7943636779222,
      "title": "Ultraman Gift Card",
      "handle": "ultraman-gift-card",
      "body_html": "Test Gift Card",
      "published_at": "2022-12-02T22:59:41-05:00",
      "created_at": "2022-12-02T22:59:39-05:00",
      "updated_at": "2023-05-05T15:34:43-04:00",
      "vendor": "UC Test Environment",
      "product_type": "",
      "tags": [],
      "variants": [
        {
          "id": 43859604537558,
          "title": "$10.00",
          "option1": "$10.00",
          "option2": null,
          "option3": null,
          "sku": "10",
          "requires_shipping": false,
          "taxable": false,
          "featured_image": null,
          "available": true,
          "price": "10.00",
          "grams": 0,
          "compare_at_price": "15.00",
          "position": 1,
          "product_id": 7943636779222,
          "created_at": "2022-12-02T22:59:39-05:00",
          "updated_at": "2023-05-05T15:34:43-04:00"
        },
        {
          "id": 43859604570326,
          "title": "$25.00",
          "option1": "$25.00",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": false,
          "taxable": false,
          "featured_image": null,
          "available": true,
          "price": "25.00",
          "grams": 0,
          "compare_at_price": null,
          "position": 2,
          "product_id": 7943636779222,
          "created_at": "2022-12-02T22:59:39-05:00",
          "updated_at": "2022-12-05T05:30:54-05:00"
        },
        {
          "id": 43859604603094,
          "title": "$50.00",
          "option1": "$50.00",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": false,
          "taxable": false,
          "featured_image": null,
          "available": true,
          "price": "50.00",
          "grams": 0,
          "compare_at_price": null,
          "position": 3,
          "product_id": 7943636779222,
          "created_at": "2022-12-02T22:59:39-05:00",
          "updated_at": "2022-12-05T05:30:56-05:00"
        },
        {
          "id": 43859604635862,
          "title": "$100.00",
          "option1": "$100.00",
          "option2": null,
          "option3": null,
          "sku": "",
          "requires_shipping": false,
          "taxable": false,
          "featured_image": null,
          "available": true,
          "price": "100.00",
          "grams": 0,
          "compare_at_price": null,
          "position": 4,
          "product_id": 7943636779222,
          "created_at": "2022-12-02T22:59:39-05:00",
          "updated_at": "2022-12-05T05:30:56-05:00"
        }
      ],
      "images": [
        {
          "id": 38889317990614,
          "created_at": "2022-12-02T22:59:39-05:00",
          "position": 1,
          "updated_at": "2022-12-02T22:59:41-05:00",
          "product_id": 7943636779222,
          "variant_ids": [],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/giftcard.png?v=1670039981",
          "width": 410,
          "height": 259
        }
      ],
      "options": [
        {
          "name": "Denominations",
          "position": 1,
          "values": [
            "$10.00",
            "$25.00",
            "$50.00",
            "$100.00"
          ]
        }
      ]
    },
    {
      "id": 7861464400086,
      "title": "Classic Ultraman Silhouette Tee",
      "handle": "classic-ultraman-silhouette",
      "body_html": "\u003cp\u003e\u003cspan style=\"font-weight: 400;\"\u003eThere was a time before CGI\u2026and it was glorious...full of Kaiju monsters played by actors in rubber suits. Show others how far back your fan knowledge goes and pay homage to the original 1960s show that started it all. Choose from the original Ultraman silhouette, shown here, or 3 different vintage Kaiju!\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u00a0\u003c\/p\u003e\n\u003cp\u003e\u003cspan style=\"font-weight: 400;\"\u003eAlso available in Pigmon (Yellow), Baltan (Green), and Kanegon (Blue)\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cbr\u003eUnisex Item\u003c\/p\u003e\n\u003cp\u003e\u003cbr\u003e \u003cspan style=\"font-weight: 400;\"\u003eFabric: 60% Combed Ring-Spun Cotton, 40% Polyester\u003c\/span\u003e\u003cbr\u003e\u003cspan style=\"font-weight: 400;\"\u003eFabric Weight: 4.3 oz\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/Classic_Ultra_Silhouette_480x480.png?v=1657157227\"\u003e\u003c\/p\u003e\n\u003cp\u003e**PRODUCT SHOWN IS A SAMPLE IMAGE**\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003eThis item is produced to order. Product will be shipped from our facility within 2-3 weeks. \u003c\/em\u003e\u003c\/p\u003e",
      "published_at": "2022-09-26T13:45:26-04:00",
      "created_at": "2022-09-26T13:45:27-04:00",
      "updated_at": "2023-03-21T14:24:27-04:00",
      "vendor": "Ultraman Connection",
      "product_type": "T-Shirts",
      "tags": [],
      "variants": [
        {
          "id": 43610105053398,
          "title": "X-Small",
          "option1": "X-Small",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": false,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 1,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:27-04:00",
          "updated_at": "2022-10-18T09:45:05-04:00"
        },
        {
          "id": 43610105086166,
          "title": "Small",
          "option1": "Small",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": false,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 2,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:27-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        },
        {
          "id": 43610105118934,
          "title": "Medium",
          "option1": "Medium",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": true,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 3,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:28-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        },
        {
          "id": 43610105151702,
          "title": "Large",
          "option1": "Large",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": true,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 4,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:28-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        },
        {
          "id": 43610105184470,
          "title": "X-Large",
          "option1": "X-Large",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": true,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 5,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:28-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        },
        {
          "id": 43610105217238,
          "title": "XX-Large",
          "option1": "XX-Large",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": true,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 6,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:28-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        },
        {
          "id": 43610105250006,
          "title": "XXX-Large",
          "option1": "XXX-Large",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190688470,
            "product_id": 7861464400086,
            "position": 1,
            "created_at": "2022-09-26T13:45:27-04:00",
            "updated_at": "2022-09-26T13:45:27-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
            "variant_ids": [
              43610105053398,
              43610105086166,
              43610105118934,
              43610105151702,
              43610105184470,
              43610105217238,
              43610105250006
            ]
          },
          "available": true,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 7,
          "product_id": 7861464400086,
          "created_at": "2022-09-26T13:45:28-04:00",
          "updated_at": "2022-09-26T13:45:28-04:00"
        }
      ],
      "images": [
        {
          "id": 38498190688470,
          "created_at": "2022-09-26T13:45:27-04:00",
          "position": 1,
          "updated_at": "2022-09-26T13:45:27-04:00",
          "product_id": 7861464400086,
          "variant_ids": [
            43610105053398,
            43610105086166,
            43610105118934,
            43610105151702,
            43610105184470,
            43610105217238,
            43610105250006
          ],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Ultraman_Silhouette.png?v=1664214327",
          "width": 702,
          "height": 1007
        }
      ],
      "options": [
        {
          "name": "Size",
          "position": 1,
          "values": [
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "XXX-Large"
          ]
        }
      ]
    },
    {
      "id": 7861464367318,
      "title": "Classic Kanegon Silhouette Tee",
      "handle": "classic-kageon-silhouette",
      "body_html": "\u003cp\u003e\u003cspan style=\"font-weight: 400;\"\u003eThere was a time before CGI\u2026and it was glorious...full of Kaiju monsters played by actors in rubber suits. Show others how far back your fan knowledge goes and pay homage to the original 1960s show that started it all. Choose from the original Ultraman silhouette or 3 different vintage Kaiju, including Kanegon, shown here!\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u00a0\u003c\/p\u003e\n\u003cp\u003eAlso available in Ultraman (Red), Pigmon (Yellow), and\u00a0Baltan (Green)\u003c\/p\u003e\n\u003cp\u003e\u003cbr\u003eUnisex Item\u003c\/p\u003e\n\u003cp\u003e\u003cbr\u003e \u003cspan style=\"font-weight: 400;\"\u003eFabric: 60% Combed Ring-Spun Cotton, 40% Polyester\u003c\/span\u003e\u003cbr\u003e\u003cspan style=\"font-weight: 400;\"\u003eFabric Weight: 4.3 oz\u003c\/span\u003e\u003c\/p\u003e\n\u003cp\u003e\u003cimg alt=\"\" src=\"https:\/\/cdn.shopify.com\/s\/files\/1\/0569\/7631\/0464\/products\/Classic_Jirahs_Silhouette_480x480.png?v=1657157235\"\u003e\u003c\/p\u003e\n\u003cp\u003e**PRODUCT SHOWN IS A SAMPLE IMAGE**\u003c\/p\u003e\n\u003cp\u003e\u003cem\u003eThis item is produced to order. Product will be shipped from our facility within 2-3 weeks. \u003c\/em\u003e\u003c\/p\u003e",
      "published_at": "2022-09-26T13:45:23-04:00",
      "created_at": "2022-09-26T13:45:25-04:00",
      "updated_at": "2023-03-21T14:24:27-04:00",
      "vendor": "Ultraman Connection",
      "product_type": "T-Shirts",
      "tags": [],
      "variants": [
        {
          "id": 43610104824022,
          "title": "X-Small",
          "option1": "X-Small",
          "option2": null,
          "option3": null,
          "sku": null,
          "requires_shipping": true,
          "taxable": true,
          "featured_image": {
            "id": 38498190491862,
            "product_id": 7861464367318,
            "position": 1,
            "created_at": "2022-09-26T13:45:25-04:00",
            "updated_at": "2022-09-26T13:45:25-04:00",
            "alt": null,
            "width": 702,
            "height": 1007,
            "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Kanegon_Silhouette.png?v=1664214325",
            "variant_ids": [
              43610104824022,
              43610104856790,
              43610104889558,
              43610104922326,
              43610104955094,
              43610104987862,
              43610105020630
            ]
          },
          "available": false,
          "price": "32.00",
          "grams": 142,
          "compare_at_price": null,
          "position": 1,
          "product_id": 7861464367318,
          "created_at": "2022-09-26T13:45:25-04:00",
          "updated_at": "2022-10-18T09:45:06-04:00"
        },
      ],
      "images": [
        {
          "id": 38498190491862,
          "created_at": "2022-09-26T13:45:25-04:00",
          "position": 1,
          "updated_at": "2022-09-26T13:45:25-04:00",
          "product_id": 7861464367318,
          "variant_ids": [
            43610104824022,
            43610104856790,
            43610104889558,
            43610104922326,
            43610104955094,
            43610104987862,
            43610105020630
          ],
          "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0648\/2604\/8726\/products\/Classic_Kanegon_Silhouette.png?v=1664214325",
          "width": 702,
          "height": 1007
        }
      ],
      "options": [
        {
          "name": "Size",
          "position": 1,
          "values": [
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "XXX-Large"
          ]
        }
      ]
    },
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

  showDropdown(id: any, dropdownItems: any) {

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

  hideDropdown() {
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
    })
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    var discount = 100 - ((currentPrice/beforePrice) * 100);
    return discount.toFixed(0)+'%';
  }

  addToCart() {

  }

}
