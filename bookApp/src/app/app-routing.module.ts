import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/home/home.component';
import { TestimonialComponent } from './homePage/testimonial/testimonial.component';
import { FilterByDisplayComponent } from './shared/books/FilterByDisplay/filter-by-display/filter-by-display.component';
import { FullBooksDisplayComponent } from './shared/books/FullBooksDisplay/full-books-display/full-books-display.component';
import { CategorydisplayComponent } from './shared/category/categorydisplay/categorydisplay.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'categories/:cid',component:CategorydisplayComponent},
  {path:'Books',component:FullBooksDisplayComponent},
  {path:'Searchbooks/:Filter/:searchText',component:FilterByDisplayComponent},
  {path: '',component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
