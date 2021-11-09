import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book/services/book.service';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
book:any;
reviews:any;
reviewList: any;
rating=0;
clicked=false;
  constructor(private route:ActivatedRoute,private bookService:BookService,private reviewService:ReviewService) { }

  async ngOnInit(): Promise<void> {
    let BId = this.route.snapshot.paramMap.get('id');
    this.book=await this.bookService.getBookById(BId);
    console.log(this.book)
    this.reviews=await this.reviewService.getReviews();
    console.log(this.reviews)
    this.reviewList=this.reviews.filter((c: { BookId: string | null;Review1: string | null; })=>(c.BookId==BId && c.Review1!=null))
    console.log(this.reviewList[0].UserInfo.FName);
    console.log(this.reviewList);
    this.rating=this.book['BRating'];
  }

}
