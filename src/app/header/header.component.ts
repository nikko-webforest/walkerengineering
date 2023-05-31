import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    },
  };

  headerNavigation01ActiveItem: number = 0;
  showMegaMenu: boolean = false;
  selectedMainCategory: string = '';
  mobileMenuShow: boolean = false;
  fetchedProducts: any = [];

  productsSearchList: any = [];

  productSearchKeyword: string = '';

  constructor(private productsService: ProductsService) {} // private eRef: ElementRef

  ngOnInit(): void {
    this.fetchProducts();
  }

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
    console.log(
      'this.headerNavigation01ActiveItem = ' + this.headerNavigation01ActiveItem
    );
    console.log('this.selectedMainCategory = ' + this.selectedMainCategory);
    // if
    if (this.headerNavigation01ActiveItem == id + 1) {
      this.showMegaMenu = !this.showMegaMenu;
    } else {
      this.headerNavigation01ActiveItem = id + 1;
      this.showMegaMenu = true;
    }

    this.selectedMainCategory = '';

    // console.log(dropdownItems?.hasOwnProperty('mainCategories'));

    // if( dropdownItems?.hasOwnProperty('mainCategories') == true ){
    //   dropdownItems.mainCategories.forEach((itemA: any, indexA: any) => {
    //     // console.log(itemA);
    //     // console.log(itemA?.name);
    //     if( indexA == 0 ){
    //       this.selectedMainCategory = itemA.name.toLowerCase();
    //     }
    //   });
    // }
    // else {
    //   this.selectedMainCategory = '';
    // }

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
    if (link != '') {
      window.location.href = link;
    }
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((results: any) => {
      console.log(results.data.products.nodes[0]);
      this.fetchedProducts = results.data.products.nodes;
    });
  }

  productSearch() {
    this.productsSearchList = [];

    this.fetchedProducts.forEach((item: any, index: any) => {
      if (
        item.title
          .toLowerCase()
          .includes(this.productSearchKeyword.toLowerCase()) &&
        this.productSearchKeyword != ''
      ) {
        this.productsSearchList.push(item);
      }
    });
    console.log(this.productsSearchList);
  }

  calculateDiscount(beforePrice: any, currentPrice: any) {
    var discount = 100 - (currentPrice / beforePrice) * 100;
    return discount.toFixed(0) + '%';
  }

  addToCart() {}

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
    if (this.mobileDropdownIndex == dropdownIndex) {
      this.mobileDropdownIndex = 0;
    } else {
      this.mobileDropdownIndex = dropdownIndex;
    }
  }

  mobileMainCategoryDropdownIndex: number = 0;

  toggleMainCategoryDropdown(mainCategoryDropdownIndex: number) {
    console.log(mainCategoryDropdownIndex);

    if (this.mobileMainCategoryDropdownIndex == mainCategoryDropdownIndex) {
      this.mobileMainCategoryDropdownIndex = 0;
    } else {
      this.mobileMainCategoryDropdownIndex = mainCategoryDropdownIndex;
    }
  }
}
