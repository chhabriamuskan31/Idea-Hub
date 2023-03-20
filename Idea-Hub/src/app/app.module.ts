import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MediumModule } from './medium/medium.module';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MediumModule,
    NgbModule,
    UserModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
