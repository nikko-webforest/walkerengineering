import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Walker Engineering Group';

  @Input() type: any = 'header';
  @Input() headerMenu1: any = [
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
              name: 'Marine',
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
              name: 'Over the Road',
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
              name: 'Industrial',
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
              name: 'Military',
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
              name: 'Marine',
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
              name: 'Power Generation',
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
              name: 'Industrial',
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
              name: 'Military',
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
              name: 'Racing',
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
  @Input() headerMenu2: any = [
    {
      name: 'Shop AIRSEP',
      url: '/',
    },
    {
      name: 'Shop PERFORMANCE',
      url: '/',
    }
  ];
  @Input() footerMenu1: any = [
    {
      title: 'Products',
      items: [
        {
          name: 'Airsep',
          url: '/',
        },
        {
          name: 'Everquiet Air Filter Sillencer',
          url: '/',
        },
        {
          name: 'AIRSEP High Performance Air Filters',
          url: '/',
        },
        {
          name: 'Replacement Filters and Parts',
          url: '/',
        },
        {
          name: 'Diesel Engine Accessories',
          url: '/',
        },
        {
          name: 'Industrial Process Filters',
          url: '/'
        },
      ]
    },
    {
      title: 'Service',
      items: [
        {
          name: 'Custom Filter Request',
          url: '/',
        },
      ]
    },
    {
      title: 'Applications',
      items: [
        {
          name: 'Marine',
          url: '/',
        },
        {
          name: 'Power Generation',
          url: '/',
        },
        {
          name: 'Military',
          url: '/',
        },
        {
          name: 'Industrial',
          url: '/',
        },
        {
          name: 'Racing',
          url: '/',
        },
      ]
    },
    {
      title: 'Support',
      items: [
        {
          name: 'Contact Us',
          url: '/',
        },
        {
          name: 'FAQ',
          url: '/',
        },
        {
          name: 'Technical Information',
          url: '/',
        },
        {
          name: 'Troubleshooting',
          url: '/',
        },
        {
          name: 'Limited Warranty',
          url: '/',
        },
        {
          name: 'Warning',
          url: '/',
        },
      ]
    },
    {
      title: 'Information',
      items: [
        {
          name: 'About Us',
          url: '/',
        },
        {
          name: 'Quality IS09001',
          url: '/',
        },
        {
          name: 'News',
          url: '/',
        },
        {
          name: 'Videos',
          url: '/',
        },
        {
          name: 'Ad Library',
          url: '/',
        },
      ]
    },
  ]
  @Input() contactDetails: any = {
    address: 'Walker Engineering 9255 San Fernando Rd. Sun Valley, CA 91352',
    phone: '1-818-252-7788',
    fax: '1-818-252-7788',
    email: '',
  };
  @Input() socialMediaList: any = [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/',
    }
  ];
  @Input() copyrightYear: any = '2023';

  constructor() {} 
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
