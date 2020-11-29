import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { PublishersComponent } from './publishers/publishers.component';
import { DevelopersDetailsComponent } from './developers/developers-details/developers-details.component';
import { DevelopersEditComponent } from './developers/developers-edit/developers-edit.component';
import { DevelopersListComponent } from './developers/developers-list/developers-list.component';
import { DevelopersNewComponent } from './developers/developers-new/developers-new.component';
import { DevelopersStartComponent } from './developers/developers-start/developers-start.component';
import { PublishersDetailsComponent } from './publishers/publishers-details/publishers-details.component';
import { PublishersEditComponent } from './publishers/publishers-edit/publishers-edit.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { PublishersNewComponent } from './publishers/publishers-new/publishers-new.component';
import { PublishersStartComponent } from './publishers/publishers-start/publishers-start.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DevelopersComponent,
    PublishersComponent,
    DevelopersDetailsComponent,
    DevelopersEditComponent,
    DevelopersListComponent,
    DevelopersNewComponent,
    DevelopersStartComponent,
    PublishersDetailsComponent,
    PublishersEditComponent,
    PublishersListComponent,
    PublishersNewComponent,
    PublishersStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
