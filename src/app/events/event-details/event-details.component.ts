import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './../shared/event.service';
import { IEvent, ISession } from './../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const currentId = +this.route.snapshot.params.id;
    this.event = this.eventService.getEvent(currentId);
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
}
