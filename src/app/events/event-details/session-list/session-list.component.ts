import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from './../../shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() sortBy: 'votes' | 'name';
  @Input() filterBy: string;
  filteredSessions: ISession[];

  ngOnChanges() {
    if (!this.sessions) {
      return;
    }

    this.filterSessions(this.filterBy);
    this.sortBy === 'name'
      ? this.filteredSessions.sort(sortByNameAsc)
      : this.filteredSessions.sort(sortByVotesDesc);
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.filteredSessions = [...this.sessions];
    } else {
      this.filteredSessions = this.sessions.filter(
        (session) => session.level.toLocaleLowerCase() === filter
      );
    }
  }
}

function sortByNameAsc(session1: ISession, session2: ISession) {
  if (session1.name > session2.name) {
    return 1;
  } else if (session1.name === session2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(session1: ISession, session2: ISession) {
  return session2.voters.length - session1.voters.length;
}
