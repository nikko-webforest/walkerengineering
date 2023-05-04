import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  footerMenuList: any = [
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
  ];

  footerLogos: any = {
    main: {
      title: 'Airsep',
      url: '/',
      imgSrc: 'assets/WE_Footer_Main_logo-v01.png',
    },
    sub: {
      title: 'Performance',
      url: '/',
      imgSrc: 'assets/WE_Footer_Sub_logo-v01.png',
    }
  };

  socialMediaLinks: any = [
    {
      platform: 'facebook',
      url: 'https://www.facebook.com/',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/',
    }
  ];

  contactDetails: any = {
    address: 'Walker Engineering 9255 San Fernando Rd. Sun Valley, CA 91352',
    phone: '1-818-252-7788',
    fax: '1-818-252-7788',
    email: '',
  };

  copyrightYear: any = this.getCurrentYear();

  constructor() { }

  ngOnInit(): void {}

  getCurrentYear() {
    var year = new Date();
    return year.getFullYear();
  }

}
