import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty = false; // TODO

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  saveEvent(values: any) {
    this.eventService.saveEvent(values);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
