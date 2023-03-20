import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MediumHeaderComponent } from './medium-header/medium-header.component';
import { MediumContentComponent } from './medium-content/medium-content.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { InsertPostComponent } from './insert-post/insert-post.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MediumComponent,
    MediumHeaderComponent,
    MediumContentComponent,
    ViewDetailsComponent,
    InsertPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule,
    // FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
})
export class MediumModule { }
