import { Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateDeactivationService } from './events/create-event/event-create-deactivation.service';
import { EventsListResolverService } from './events/shared/events-list-resolver.service';
import { EventResolverService } from './events/event-details/event-resolver.service';
import { EventsListComponent } from './events/events-list.component';
import { Error404Component } from './errors/error404.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';

export const mainRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [EventCreateDeactivationService],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolverService },
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user/profile',
    component: ProfileComponent,
  },
  {
    path: 'user/login',
    component: LoginComponent,
  },
];
