import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {

  title = 'Walker Engineering Group';

  @Input() type: any = 'header';
  @Input() menu1: any = [
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
  @Input() menu2: any = [
    {
      name: 'AIRSEP',
      url: '/'
    },
    {
      name: 'PERFORMANCE',
      url: '/'
    }
  ];

  constructor() {} 
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
