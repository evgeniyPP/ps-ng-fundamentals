import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { mainRoutes } from './main.routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsableWellComponent } from './common/collapsable-well/collapsable-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { TOASTR_TOKEN, IToastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { ModalComponent } from './common/modal/modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { LocationValidatorDirective } from './events/create-event/location-validator.directive';

const toastr: IToastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(mainRoutes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    ModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
})
export class AppModule {}
