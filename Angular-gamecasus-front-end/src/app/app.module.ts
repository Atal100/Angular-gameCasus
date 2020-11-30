import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { PublishersComponent } from './publishers/publishers.component';
import { DevelopersModule } from './developers/developers.module';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DevelopersComponent,
    PublishersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevelopersModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
