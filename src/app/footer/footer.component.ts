import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  @Input() footerMenuList: any;

  @Input() contactDetails: any;

  @Input() socialMediaList: any;

  @Input() copyrightYear: any;

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

  constructor() { }

  ngOnInit(): void {}

}
