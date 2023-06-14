import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {

  @Input() footermenulist: any;

  @Input() contactdetails: any;

  @Input() socialmedialist: any;

  @Input() policylist: any;

  @Input() copyrightyear: any;

  footerLogos: any = {
    airsep: {
      title: 'Airsep',
      url: '/'
    },
    performance: {
      title: 'Performance',
      url: '/'
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.footermenulist = JSON.parse(this.footermenulist);
    console.log('this.footermenulist =', this.footermenulist);
    this.contactdetails = JSON.parse(this.contactdetails);
    console.log('this.contactdetails =', this.contactdetails);
    this.socialmedialist = JSON.parse(this.socialmedialist);
    console.log('this.socialmedialist =', this.socialmedialist);
    this.policylist = JSON.parse(this.policylist);
    console.log('this.policylist =', this.policylist);
  }

}