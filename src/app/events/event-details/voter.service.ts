import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ISession } from './../shared/event.model';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor(private http: HttpClient) {}

  addVoter(eventId: number, session: ISession, userName: string): void {
    session.voters.push(userName);

    this.http
      .post(
        `https://ngf-server.herokuapp.com/api/events/${eventId}/sessions/${session.id}/voters/${userName}`,
        {},
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, userName: string): void {
    session.voters = session.voters.filter((voter) => voter !== userName);

    this.http
      .delete(
        `https://ngf-server.herokuapp.com/api/events/${eventId}/sessions/${session.id}/voters/${userName}`
      )
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some((voter) => voter === userName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
