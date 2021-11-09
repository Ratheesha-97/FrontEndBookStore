import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Wishlist } from '../../models/wishlist.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist!: Wishlist[];
  wishlistSubscription: Subscription | undefined = undefined;
  constructor(private userService: UserService) { }


  addBookToCart(index: number){
    
    let book = this.wishlist[index].Book;
    console.log("adding book", book.Title);
    this.userService.addBookToCart(book.BookId)
      .subscribe((res: any) => {
        console.log("Book added to cart.");
        
      })
  }
  ngOnInit(): void {
    this.wishlistSubscription = this.userService.getUserDetails()
    .subscribe((res: any) => {
      this.wishlist = res.Wishlists;
      console.log(this.wishlist);
    })
  }

}
