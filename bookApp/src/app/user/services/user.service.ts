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

  getUserCartId(): string | null {
    let cartId = sessionStorage.getItem('cartId');
    if (cartId == null) {
      this.updateSession();
      return sessionStorage.getItem('cartId');
    }
    return cartId;
  }

  updateSession(): void {
    this.http.get(this.REST_API_URL_BASE + "UserInfoes/" + this.getUserId())
      .subscribe((res: any) => {
        sessionStorage.setItem('cartId', res.CartId);
      })
  }

  createBookSubmission(bookSubmission: any): any {
    return this.http.post(this.REST_API_URL_BASE + "BookSubmissions/", bookSubmission)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  createAddress(address: any): any {
    return this.http.post(this.REST_API_URL_BASE + "Addresses/", address)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteAddress(id: number): any {
    return this.http.delete(this.REST_API_URL_BASE + "Addresses/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
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
        this.updateSession();
        return res;
      }))
  }

}