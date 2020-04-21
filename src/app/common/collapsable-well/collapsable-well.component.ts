import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css'],
})
export class CollapsableWellComponent {
  visible = false;

  toggleContent() {
    this.visible = !this.visible;
  }
}
