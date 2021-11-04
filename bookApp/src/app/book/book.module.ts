import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { HomeBookComponent } from './components/home-book/home-book.component';
// import { EditCouponComponent } from './components/edit-coupon/edit-coupon.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeBookComponent,
    
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
