import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevelopersComponent } from './developers.component';
import { DevelopersDetailsComponent } from './developers-details/developers-details.component';
import { DevelopersEditComponent } from './developers-edit/developers-edit.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { DevelopersNewComponent } from './developers-new/developers-new.component';
import { DevelopersStartComponent } from './developers-start/developers-start.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevelopersService } from './developers.service';
import { DevelopersItemComponent } from './developers-list/developers-item/developers-item.component';


@NgModule({
  declarations: [
      DevelopersComponent,
      DevelopersDetailsComponent,
      DevelopersEditComponent,
      DevelopersListComponent,
      DevelopersNewComponent,
      DevelopersStartComponent,
      DevelopersItemComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
   

  ],
  providers: [DevelopersService],
  exports: [DevelopersComponent]
})
export class DevelopersModule { }
