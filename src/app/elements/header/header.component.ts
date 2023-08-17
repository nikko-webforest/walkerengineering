import { Component, OnInit, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent implements OnInit {

  @Input() headerlogos: any;

  @Input() headernav1: any;

  @Input() headernav2: any;

  @Input() contactdetails: any;

  @Input() showcart: any;
  
  cartToken: string = '';

  headerDesktopNav: any = {
    showMegaMenu: false,
    menuItemLvl1ID: 0,
    menuItemLvl2ID: 0,
  };

  headerMobileNav: any = {
    showMenu: false,
    menuItemLvl1ID: 0,
    menuItemLvl2ID: 0,
  };

  fetchedProducts: any = [];

  fetchedCartData: any;

  ready: boolean = false;

  productSearch: any = {
    keyword: '',
    list: [],
  };

  constructor(
    private productsService: ProductsService,
    public appComponent: AppComponent,
    private cartService: CartService
  ) {} // private eRef: ElementRef

  ngOnInit(): void {
    this.cartService.getCartJson().subscribe((res: any) => {
      this.fetchedCartData = res;
      this.cartToken = res.token;
      this.ready = true;
      // console.log('this.fetchedCartData =', this.fetchedCartData);
      // console.log('this.cartToken =', this.cartToken);
      // console.log('this.ready =', this.ready);
    });
    this.headerlogos = JSON.parse(this.headerlogos);
    console.log('this.headerlogos =', this.headerlogos);
    this.headernav1 = JSON.parse(this.headernav1);
    console.log('this.headernav1 =', this.headernav1);
    this.headernav2 = JSON.parse(this.headernav2);
    console.log('this.headernav2 =', this.headernav2);
    this.contactdetails = JSON.parse(this.contactdetails);
    console.log('this.contactdetails =', this.contactdetails);
    this.fetchProducts();
    this.onResize();
  }

  screenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event?: undefined) {
    this.screenWidth = window.innerWidth;
    // console.log('screenWidth = '+this.screenWidth);
  }
  
  hideMegaMenu() {
    this.headerDesktopNav.showMegaMenu = false;
  }

  showDesktopMenuItemLvl1 (menuItemLvl1ID: number, hasDropdownItems: any) {
    // console.log('menuItemLvl1ID =', menuItemLvl1ID);
    // console.log('hasDropdownItems =', hasDropdownItems);
    
    this.headerDesktopNav.menuItemLvl1ID = menuItemLvl1ID;
    if (hasDropdownItems != 0) {
      this.headerDesktopNav.showMegaMenu = true;
    }
    else {
      this.headerDesktopNav.showMegaMenu = false;
    }

    // console.log('this.headerDesktopNav.showMegaMenu =', this.headerDesktopNav.showMegaMenu);
  }

  showDesktopMenuItemLvl2(menuItemLvl2ID: number) {
    // console.log('menuItemLvl2ID =', menuItemLvl2ID);
    this.headerDesktopNav.menuItemLvl2ID = menuItemLvl2ID;
  }

  openLink(link: any) {
    if (link != '') window.location.href = link;
  }

  openProductLink(link: any) {
    if (link != '') window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((results: any) => {
      this.fetchedProducts = results.data.products.nodes;
    });
  }

  doProductSearch() {
    this.productSearch.list = [];
    this.fetchedProducts.forEach((item: any, index: any) => {
      // console.log('item.title =', item.title);
      // console.log('item.tags =', item.tags);

      var isProductSearch = {
        title: false,
        tag: false
      };

      if (item.title.toLowerCase().includes(this.productSearch.keyword.toLowerCase())) {
        isProductSearch.title = true;
      }
      else {
        isProductSearch.title = false;
      }

      item.tags.forEach((tagItem: any) => {
        if (tagItem.toLowerCase().includes(this.productSearch.keyword.toLowerCase())) {
          isProductSearch.tag = true;
          // console.log('tagItem =', tagItem);
          return;
        }
      });

      // console.log('isProductSearch =', isProductSearch);
      if (this.productSearch.keyword != '') {
        if (isProductSearch.title || isProductSearch.tag) {
          this.productSearch.list.push(item);
        }
      }
      else {
        this.productSearch.list = [];
      }
    });

    // console.log(this.productSearch.list);
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    if (currentPrice == 0) return '100%';
    var calculate = 100 - Number(currentPrice / beforePrice) * 100;
    var discount = calculate < 0 ? calculate * -1 : calculate;
    // console.log('calculateDiscount \n beforePrice =', beforePrice, 'currentPrice =', currentPrice, 'discount =', discount);
    return discount.toFixed(0) + '%';
  }

  toggleCart() {
    // const cartId = JSON.parse(localStorage.getItem('cart')!);
    // console.log('cart id: ', cartId);
    if (window.location.origin !== 'https://walkerengineering.co') {
      window.location.href = 'https://walkerengineering.co/cart';
    }
    else {
      this.showcart = !this.showcart;
      if (this.showcart) this.getCartItems();
    }
  }

  openCart() {
    this.showcart = true;
    this.getCartItems();
  }

  closeCart() {
    this.showcart = false;
  }

  getCartItems() {
    this.cartService.getCartJson().subscribe((res: any) => {
      this.fetchedCartData = res;
      this.showcart = true;
    });
  }

  updateCartItems() {}

  addToCart() {}

  // mobile
  toggleMobileMenu() {
    this.headerMobileNav.showMenu = !this.headerMobileNav.showMenu;
    this.headerMobileNav.activeMenuIndex = 0;
    this.headerMobileNav.activeMainCategoryIndex = 0;
  }

  showMobileMenuItemLvl1(menuItemLvl1ID: number) {
    // console.log('menuItemLvl1ID =', menuItemLvl1ID);
    if (this.headerMobileNav.menuItemlvl1ID == menuItemLvl1ID) {
      this.headerMobileNav.menuItemlvl1ID = 0;
    }
    else {
      this.headerMobileNav.menuItemlvl1ID = menuItemLvl1ID;
    }
  }

  showMobileMenuItemLvl2(menuItemLvl2ID: number) {
    // console.log('menuItemLvl2ID =', menuItemLvl2ID);
    if (this.headerMobileNav.menuItemlvl2ID == menuItemLvl2ID) {
      this.headerMobileNav.menuItemlvl2ID = 0;
    }
    else {
      this.headerMobileNav.menuItemlvl2ID = menuItemLvl2ID;
    }
  }
}
