import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent {
  @Input() count: number;
  @Output() vote = new EventEmitter();
  iconColor: 'red' | 'white';
  @Input() set voted(value: boolean) {
    this.iconColor = value ? 'red' : 'white';
  }

  constructor() {}

  onClick() {
    this.vote.emit();
  }
}
