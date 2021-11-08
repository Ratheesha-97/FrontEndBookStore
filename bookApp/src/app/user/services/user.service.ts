import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL_BASE = "https://localhost:44390/api/";

  constructor(private http: HttpClient) { }

  getUserId(): number {
    return 1;
  }

  getUserCartId(): number {
    return 1;
  }

  getUserCart(): Observable<Cart> {
    return this.http.get(this.REST_API_URL_BASE + "Carts/" + this.getUserCartId())
      .pipe(map((res: any) => {
        return res
      }));
  }

  updateCartQuantity(cartProduct: CartItem): any {
    return this.http.put(this.REST_API_URL_BASE + "CartProducts/" + cartProduct.CPId, cartProduct)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  checkoutCart(order: any): any {
    return this.http.post(this.REST_API_URL_BASE + "Orders/", order)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  addBookToCart(cartProduct: any): any {
    return this.http.post(this.REST_API_URL_BASE + "CartProducts/", cartProduct)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  removeFromCart(id: number): any {
    return this.http.delete(this.REST_API_URL_BASE + "CartProducts/" + id)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))

  }

  getCoupon(code: string): any {
    return this.http.get(this.REST_API_URL_BASE + "Coupons/" + code)
    .pipe(map((res: any) => {
      console.log(res);
      return res;
    }))
    
  }

  getUserDetails(): any {
    return this.http.get(this.REST_API_URL_BASE + "UserInfoes/" + this.getUserId())
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

}
