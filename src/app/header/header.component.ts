import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, Host } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  headerNavigation01List: any = [
    {
      name: 'By Category',
      url: '',
      dropdownItems: [
        {
          mainCategories: [
            {
              name: 'All Categories',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
                {
                  name: 'Sub-Category 5',
                  url: '',
                },
                {
                  name: 'Sub-Category 6',
                  url: '',
                },
                {
                  name: 'Sub-Category 7',
                  url: '',
                },
              ],
            },
            {
              name: 'Category 1',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
              ],
            },
            {
              name: 'Category 2',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
              ],
            },
            {
              name: 'Category 3',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
                {
                  name: 'Sub-Category 5',
                  url: '',
                },
              ],
            },
            {
              name: 'Category 4',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
                {
                  name: 'Sub-Category 5',
                  url: '',
                },
                {
                  name: 'Sub-Category 6',
                  url: '',
                },
              ],
            },
          ]
        }
      ],
    },
    {
      name: 'Applications',
      url: '',
      dropdownItems: [
        {
          mainCategories: [
            {
              name: 'Application 1',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
                {
                  name: 'Sub-Category 5',
                  url: '',
                },
                {
                  name: 'Sub-Category 6',
                  url: '',
                },
                {
                  name: 'Sub-Category 7',
                  url: '',
                },
              ],
            },
            {
              name: 'Application 2',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
              ],
            },
            {
              name: 'Application 3',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
              ],
            },
            {
              name: 'Application 4',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
                {
                  name: 'Sub-Category 3',
                  url: '',
                },
                {
                  name: 'Sub-Category 4',
                  url: '',
                },
                {
                  name: 'Sub-Category 5',
                  url: '',
                },
              ],
            },
            {
              name: 'Application 5',
              url: '',
              subCategories: [
                {
                  name: 'Sub-Category 1',
                  url: '',
                },
                {
                  name: 'Sub-Category 2',
                  url: '',
                },
              ],
            },
          ]
        }
      ],
    },
    {
      name: 'News',
      url: '',
      dropdownItems: [],
    },
    {
      name: 'Media',
      url: '',
      dropdownItems: [
        {
          mainCategories: [
            {
              name: 'Photos',
              url: '',
              subCategories: [
                {
                  name: 'Photo Gallery 1',
                  url: '',
                },
                {
                  name: 'Photo Gallery 2',
                  url: '',
                },
                {
                  name: 'Photo Gallery 3',
                  url: '',
                },
                {
                  name: 'Photo Gallery 4',
                  url: '',
                },
                {
                  name: 'Photo Gallery 5',
                  url: '',
                },
              ],
            },
            {
              name: 'Videos',
              url: '',
              subCategories: [
                {
                  name: 'Video Tutorial 1',
                  url: '',
                },
                {
                  name: 'Video Tutorial 2',
                  url: '',
                },
                {
                  name: 'Video Tutorial 3',
                  url: '',
                },
                {
                  name: 'Video Tutorial 4',
                  url: '',
                },
              ],
            },
          ]
        }
      ],
    },
    {
      name: 'Support',
      url: '',
      dropdownItems: [
        {
          mainCategories: [
            {
              name: 'All Resources',
              url: '',
              subCategories: [
                {
                  name: 'System Info 1',
                  url: '',
                },
                {
                  name: 'System Info 2',
                  url: '',
                },
                {
                  name: 'System Info 3',
                  url: '',
                },
                {
                  name: 'System Info 4',
                  url: '',
                },
                {
                  name: 'System Info 5',
                  url: '',
                },
                {
                  name: 'System Info 6',
                  url: '',
                },
                {
                  name: 'System Info 7',
                  url: '',
                },
              ],
            },
            {
              name: 'Technical Information',
              url: '',
              subCategories: [
                {
                  name: 'System Info 1',
                  url: '',
                },
                {
                  name: 'System Info 2',
                  url: '',
                },
                {
                  name: 'System Info 3',
                  url: '',
                },
              ],
            },
            {
              name: 'Troubleshooting',
              url: '',
              subCategories: [
                {
                  name: 'System Info 1',
                  url: '',
                },
                {
                  name: 'System Info 2',
                  url: '',
                },
                {
                  name: 'System Info 3',
                  url: '',
                },
                {
                  name: 'System Info 4',
                  url: '',
                },
                {
                  name: 'System Info 5',
                  url: '',
                },
                {
                  name: 'System Info 6',
                  url: '',
                },
                {
                  name: 'System Info 7',
                  url: '',
                },
                {
                  name: 'System Info 8',
                  url: '',
                },
              ],
            },
          ]
        }
      ],
    },
    {
      name: 'Dealers Only',
      url: '',
      dropdownItems: [],
    },
  ];

  headerNavigation02List: any = [
    {
      name: 'AIRSEP',
      url: '/'
    },
    {
      name: 'PERFORMANCE',
      url: '/'
    }
  ];

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
