import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app/app.component';
import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { PublishersComponent } from './publishers/publishers.component';
import { DevelopersModule } from './developers/developers.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UsecaseComponent } from './about/usecases/usecase/usecase.component';
import { UsecasesComponent } from './about/usecases/usecases.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsecaseComponent,
    UsecasesComponent,
    DashboardComponent,
    GamesComponent,
    PublishersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevelopersModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
