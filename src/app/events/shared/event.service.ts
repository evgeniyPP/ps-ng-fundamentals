import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IEvent, ISession } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('https://ngf-server.herokuapp.com/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http
      .get<IEvent>(`https://ngf-server.herokuapp.com/api/events/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    return this.http
      .post<IEvent>('https://ngf-server.herokuapp.com/api/events', event, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http
      .get<ISession[]>(
        `https://ngf-server.herokuapp.com/api/sessions/search?search=${searchTerm}`
      )
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
