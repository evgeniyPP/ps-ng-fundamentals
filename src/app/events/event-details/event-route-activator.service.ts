import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const id = +route.params['id'];
    const isEventExists = !!this.eventService.getEvent(id);

    if (!isEventExists) {
      this.router.navigate(['404']);
    }

    return isEventExists;
  }
}
