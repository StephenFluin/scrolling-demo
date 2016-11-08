import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-container',
  template: `
  <button type="button" (click)="showMore()">Show More</button>
  <div style="border:1px solid #CCC;">
    Currently showing {{shownCount}} items.
    <list-item *ngFor="let item of shownItems; trackBy: trackByFn" [item]="item">
    </list-item>

  
  </div>

  `,
})
export class ListComponent {
  @Input() items: any[];
  shownItems = [];
  shownCount = 100;

  ngOnChanges() {
    for(let i = 0;i<this.shownCount;i++) {
      this.shownItems.push(this.items[i]);
    }
  }

  showMore() {
    for(let i = this.shownCount;i<this.shownCount+100;i++) {
      this.shownItems.push(this.items[i]);
    }
    this.shownCount += 100;
  
    
  }
  trackByFn(index, item) {
    return item.id;
  }

}
