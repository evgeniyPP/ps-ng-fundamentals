import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  @Input() appModalTrigger: string;
  private element: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.element = ref.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', () => {
      this.$(`#${this.appModalTrigger}`).modal({});
    });
  }
}
