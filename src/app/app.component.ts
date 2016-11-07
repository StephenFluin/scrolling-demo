import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Infinite Scroll Demo';
  itemList = [];
  constructor() {
    for (let i = 0; i < 1000000; i++) {
      this.itemList.push({ title: `Item ${i}`, date: new Date(), id: i });
    }
  }
}
