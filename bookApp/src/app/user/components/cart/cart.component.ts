import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { Cart } from '../../models/cart.model';
import { Order } from '../../models/order.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  val: number = 0;
  cart: Cart = new Cart;
  cartSubscription: Subscription | undefined = undefined;
  constructor(private userService: UserService) { }


  removeBtnClick(id: number){
    console.log("Removing product: " + id);
    
    this.userService.removeFromCart(id);
  }
  
  onChange(i: number) {
    this.cartSubscription = this.userService.updateCartQuantity(this.cart.CartProducts[i])
      .subscribe((res: any) => {
      })
  }

  
  getCartprice(): number {
    let res = 0;
    this.cart.CartProducts.forEach(cartProduct => {
      res += (cartProduct.Quantity * cartProduct.Book.Price);
    });
    return res;
  }

  onCheckoutClick() {
    let order: any = {
      CartId: this.cart.CartId,
      OrderPrice: this.getCartprice(),
      OrderDate: new Date(),
      OrderStatus: 0,
      UserId: this.userService.getUserId(),
      // Coins: 0,
      // Coupon: '',
      // Coins: coins,
      // Coupon: coupon,
      OrderId: undefined
    }
    this.cartSubscription = this.userService.checkoutCart(order)
    .subscribe((res: Order) => {      
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.cartSubscription = this.userService.getUserCart()
      .subscribe((res: Cart) => {
        this.cart = res;
      })
  }

}
