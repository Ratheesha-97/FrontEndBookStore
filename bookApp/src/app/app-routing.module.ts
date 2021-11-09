import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponHomeComponent } from './coupon/components/coupon-home/coupon-home.component';
import { AdminAuthGuard } from './Shared/guards/adminGuard/admin-auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'coupon',
    loadChildren: () => import('./coupon/coupon.module').then(m => m.CouponModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./book-details/book-details.module').then(m => m.BookDetailsModule)
  },
  // {path:'coupon1',component:CouponHomeComponent}
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate : [AdminAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
