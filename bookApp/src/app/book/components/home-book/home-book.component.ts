import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styles: [
  ]
})
export class HomeBookComponent implements OnInit {
  books:any[] | undefined;
  book:any;
  constructor(private bookServcie:BookService) { }

  ngOnInit(): void {
    this.allBooks();
  }
  allBooks(){
    this.bookServcie.getBooks().subscribe(data=>{
      this.books=data;
    })
  }
  viewBook(id:any){
    // this.bookServcie.getBookById(id).subscribe(data=>{
    //   this.book=data;
    // })
  }
  deleteBook(id:any){
    this.bookServcie.deleteBookById(id);
    this.allBooks();
  }
  
}
