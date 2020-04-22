import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from './../shared/event.service';
import { IEvent, ISession } from './../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;
  sortBy = 'votes';
  filterBy = 'all';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.resetComponent();
    });
  }

  addSession() {
    this.addMode = true;
  }

  createSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((session) => session.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }

  resetComponent() {
    this.addMode = false;
    this.sortBy = 'votes';
    this.filterBy = 'all';
  }
}
