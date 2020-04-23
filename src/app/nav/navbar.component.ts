import { EventService } from './../events/shared/event.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../user/auth.service';
import { ISessionWithEventId } from './../events/shared/event.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISessionWithEventId[];

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit() {}

  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions: ISessionWithEventId[]) => {
        this.foundSessions = sessions;
      });
  }
}
