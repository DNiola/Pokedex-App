import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { } 
  guest = false

  handleActionSelected(event:any) {
    console.log(event) 
    if (event === 'guest') { 
      this.guest = true  
    }
  }
}
