import { Component, OnInit, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ProductsService } from '../../services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent implements OnInit {

  @Input() headernav1: any;

  @Input() headernav2: any;

  @Input() contactdetails: any;

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
    },
  };

  headerDesktopNav: any = {
    activeMenuIndex: 0,
    hasDropdownItems: 0,
    activeMainCategoryLabel: '',
    showMegaMenu: false,
  };

  headerMobileNav: any = {
    showMenu: false,
    activeMenuIndex: 0,
    activeMainCategoryIndex: 0,
  };

  fetchedProducts: any = [];

  productSearch: any = {
    keyword: '',
    list: [],
  };

  constructor (
    private productsService: ProductsService,
    public appComponent: AppComponent
  ) { } // private eRef: ElementRef

  ngOnInit(): void {
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

  toggleMegaMenu(id: any, dropdownItemsLength: any) {
    // console.log('this.headerDesktopNav.activeMenuIndex = ' + this.headerDesktopNav.activeMenuIndex);
    // console.log('this.headerDesktopNav.activeMainCategoryLabel = ' + this.headerDesktopNav.activeMainCategoryLabel);
    // console.log('this.headerDesktopNav.hasDropdownItems = ' + this.headerDesktopNav.hasDropdownItems);
    
    this.headerDesktopNav.hasDropdownItems = false;
    if (this.headerDesktopNav.activeMenuIndex == id + 1) {
      this.headerDesktopNav.showMegaMenu = !this.headerDesktopNav.showMegaMenu;
    }
    else {
      this.headerDesktopNav.activeMenuIndex = id + 1;
      this.headerDesktopNav.showMegaMenu = true;
    }
    
    if (dropdownItemsLength != 0) {
      this.headerDesktopNav.hasDropdownItems = true;
    }
    else {
      this.headerDesktopNav.hasDropdownItems = false;
    }

    this.headerDesktopNav.activeMainCategoryLabel = '';
  }

  hideMegaMenu() {
    // console.log('outside');
    this.headerDesktopNav.activeMenuIndex = 0;
    this.headerDesktopNav.activeMainCategoryLabel = '';
    this.headerDesktopNav.showMegaMenu = false;
  }

  selectMainCategory(category: string) {
    this.headerDesktopNav.activeMainCategoryLabel = category.toLowerCase();
  }

  openLink(link: any) {
    if (link != '') window.location.href = link;
  }

  openProductLink(link: any) {
    if (link != '') window.location.href = `${environment.stagingShopifyDomain}/products/${link}`;
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((results: any) => {
      // console.log('results.data.products.nodes');
      // console.table(results.data.products.nodes);
      this.fetchedProducts = results.data.products.nodes;
    });
  }

  doProductSearch() {
    this.productSearch.list = [];

    this.fetchedProducts.forEach((item: any, index: any) => {
      if (item.title.toLowerCase().includes(this.productSearch.keyword.toLowerCase()) && this.productSearch.keyword != '') {
        this.productSearch.list.push(item);
      }
    });

    // console.log(this.productSearch.list);
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    var discount = 100 - (currentPrice / beforePrice) * 100;
    return discount.toFixed(0) + '%';
  }

  toggleCart() {
    this.appComponent.toggleCart();
  }

  addToCart() {}

  // mobile
  toggleMobileMenu() {
    this.headerMobileNav.showMenu = !this.headerMobileNav.showMenu;
    this.headerMobileNav.activeMenuIndex = 0;
    this.headerMobileNav.activeMainCategoryIndex = 0;
  }

  toggleMobileDropdown(dropdownIndex: number) {
    // console.log(dropdownIndex);

    this.headerMobileNav.activeMainCategoryIndex = 0;
    if (this.headerMobileNav.activeMenuIndex == dropdownIndex) {
      this.headerMobileNav.activeMenuIndex = 0;
    }
    else {
      this.headerMobileNav.activeMenuIndex = dropdownIndex;
    }
  }

  toggleMainCategoryDropdown(mainCategoryDropdownIndex: number) {
    // console.log(mainCategoryDropdownIndex);

    if (this.headerMobileNav.activeMainCategoryIndex == mainCategoryDropdownIndex) {
      this.headerMobileNav.activeMainCategoryIndex = 0;
    }
    else {
      this.headerMobileNav.activeMainCategoryIndex = mainCategoryDropdownIndex;
    }
  }
}