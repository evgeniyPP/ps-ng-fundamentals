import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './../jQuery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() elementId: string;
  @Input() title: string;
  @Input() closeOnClick = 'true';
  @ViewChild('modalContainer') containerElement: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  close() {
    if (this.closeOnClick.toLocaleLowerCase() === 'true') {
      const container = this.containerElement.nativeElement;
      this.$(container).modal('hide');
    }
  }
}
