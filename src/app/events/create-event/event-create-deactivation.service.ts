import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from './create-event.component';

@Injectable({
  providedIn: 'root',
})
export class EventCreateDeactivationService
  implements CanDeactivate<CreateEventComponent> {
  constructor() {}

  canDeactivate(component: CreateEventComponent): boolean {
    if (component.isDirty) {
      return window.confirm(
        'You have not saved this event. Are you sure you want to cancel?'
      );
    }

    return true;
  }
}
