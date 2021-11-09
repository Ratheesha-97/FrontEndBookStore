import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeroblockComponent } from './homePage/heroblock/heroblock.component';
import { BookCarouselComponent } from './homePage/book-carousel/book-carousel.component';
import { TestimonialComponent } from './homePage/testimonial/testimonial.component';
import { CategorydisplayComponent } from './shared/category/categorydisplay/categorydisplay.component';
import { FullBooksDisplayComponent } from './shared/books/FullBooksDisplay/full-books-display/full-books-display.component';
import { FilterByDisplayComponent } from './shared/books/FilterByDisplay/filter-by-display/filter-by-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    HomeComponent,
    HeroblockComponent,
    BookCarouselComponent,
    TestimonialComponent,
    CategorydisplayComponent,
    FullBooksDisplayComponent,
    FilterByDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
