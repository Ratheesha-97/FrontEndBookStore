import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-full-books-display',
  templateUrl: './full-books-display.component.html',
  styleUrls: ['./full-books-display.component.css']
})
export class FullBooksDisplayComponent implements OnInit {
  bookSubscription:Subscription|undefined=undefined;
  BookData:any[]=[];
  constructor(private bookServ:BookService) { }

  ngOnInit(): void {

    this.bookSubscription = this.bookServ.getAllBooks()
    .subscribe((res: any) => {
      this.BookData = res;
      console.log(this.BookData);
    });
  }

}
