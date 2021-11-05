import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

interface IOrder {
    OrderId: number | undefined,
    UserId: number,
    CartId: number,
    Cart: Cart,
    OrderPrice: number,
    OrderDate: Date,
    OrderStatus: number,
    Coins: number,
    Coupon: string
}

@Injectable({
    providedIn: 'root'
})
export class Order implements IOrder {
    OrderId: number | undefined;
    UserId!: number;
    CartId!: number;
    Cart!: Cart;
    OrderPrice!: number;
    OrderDate!: Date;
    OrderStatus!: number;
    Coins!: number;
    Coupon!: string;
}
