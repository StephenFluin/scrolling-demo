import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-item',
  template: `
  <div style="height:100px;">
    {{item | json}}
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
    @Input() item: any;
}
