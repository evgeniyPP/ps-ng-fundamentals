import { TOASTR_TOKEN, IToastr } from './../../../common/toastr.service';
import { Component, Input, OnChanges, Inject } from '@angular/core';

import { AuthService } from '../../../user/auth.service';
import { ISession } from '../../shared/event.model';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges {
  @Input() eventId: number;
  @Input() sessions: ISession[];
  @Input() sortBy: 'votes' | 'name';
  @Input() filterBy: string;
  filteredSessions: ISession[];

  constructor(
    public auth: AuthService,
    private voterService: VoterService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnChanges() {
    if (!this.sessions) {
      return;
    }

    this.filterSessions(this.filterBy);
    this.sortBy === 'name'
      ? this.filteredSessions.sort(sortByNameAsc)
      : this.filteredSessions.sort(sortByVotesDesc);
  }

  toggleVote(session: ISession) {
    if (!this.auth.isAuth()) {
      this.toastr.warning('You must be authenticated to vote');
      return;
    }

    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    }

    if (this.sortBy === 'votes') {
      this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    if (!this.auth.isAuth()) {
      return false;
    }

    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
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
