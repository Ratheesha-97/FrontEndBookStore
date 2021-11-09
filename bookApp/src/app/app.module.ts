import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //  StarRatingModule.forRoot()
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
