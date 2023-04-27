import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  
  title = 'Walker Engineering Group';

  constructor() {} 
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
