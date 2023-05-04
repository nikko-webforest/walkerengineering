import { Component, OnInit, Input, ViewEncapsulation, HostListener, ElementRef, Host } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  @Input() headerNavigation01List: any;

  @Input() headerNavigation02List: any;

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

  contactDetails: any = {
    address: 'Walker Engineering 9255 San Fernando Rd. Sun Valley, CA 91352',
    phone: '1-818-252-7788',
    fax: '1-818-252-7788',
    email: '',
  };

  headerNavigation01ActiveItem: number = 0;
  showMegaMenu: boolean = false;
  selectedMainCategory: string = '';

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

  mouseOutside() {
    console.log('outside');
    this.showMegaMenu = false;
    this.headerNavigation01ActiveItem = 0;
  }

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

  selectMainCategory(category: string) {
    this.selectedMainCategory = category.toLowerCase();
  }

  openLink(link: any) {
    if( link != '' ){
      window.location.href = link;
    }
  }

}
