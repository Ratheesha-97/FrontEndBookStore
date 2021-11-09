import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/shared/services/book.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-full-books-display',
  templateUrl: './full-books-display.component.html',
  styleUrls: ['./full-books-display.component.css']
})
export class FullBooksDisplayComponent implements OnInit {
  bookSubscription:Subscription|undefined=undefined;
  BookData:any[]=[];
  constructor(private bookServ:BookService, private userService: UserService) { }

  ngOnInit(): void {

    this.bookSubscription = this.bookServ.getAllBooks()
    .subscribe((res: any) => {
      this.BookData = res;
      console.log(this.BookData);
    });
  }


  addToCartBtn(id: number) {
    this.userService.addBookToCart(id)
      .subscribe((res: any) => {
        
      })
  }

}
