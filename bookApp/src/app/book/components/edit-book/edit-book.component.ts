import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookForm!: FormGroup;
  book=new Book();
  
  
  public API = 'https://localhost:44390/api/Categories/';
  constructor(private fb:FormBuilder,private bookService:BookService,private route:ActivatedRoute) {
   
    this.bookForm=new FormGroup({
      BookId:new FormControl(),
      Title:new FormControl(),
      CId:new FormControl(),
      Author:new FormControl(),
      ISBN :new FormControl(),
      BookYear:new FormControl(),
      BRating :new FormControl(),
      Quantity:new FormControl(),
      Price :new FormControl(this.book['CId']),
      BDescri:new FormControl(this.book['CId']),
      BPosition:new FormControl(this.book['CId']),   
      BStatus:new FormControl(this.book['CId']),
      BImgFile :new FormControl(this.book['CId']),
      BCondition :new FormControl(this.book['CId']),
      BTags:new FormControl(this.book['CId']),
     
    });   
   }
 
  async ngOnInit() {
    console.log('iinit');
    let BId = this.route.snapshot.paramMap.get('id');
    this.book=await this.bookService.getBookById(BId);
    // this.bookForm.setValue(this.book);
    
    this.bookForm.setValue({
      BookId:this.book['BookId'],
      Title:this.book['Title'],
      
      CId:this.book.Category['CName'],
      Author:this.book['Author'],
      ISBN :this.book['ISBN'],
      BookYear:this.book['BookYear'],
      BRating :this.book['BRating'],
      Quantity:this.book['Quantity'],
      Price :this.book['Price'],
      BDescri:this.book['BDescri'],
      BPosition:this.book['BPosition'],   
      BStatus:this.book['BStatus'],
      BImgFile :this.book['BImgFile'],
      BCondition :this.book['BCondition'],
      BTags:this.book['BTags'],
      
    });
    
     console.log(this.book.Category);
  }

 
  editBook(){
    this.bookForm.controls['CId'].setValue(this.book['CId']);
    this.bookService.updateBook(this.bookForm.value);

    console.log(this.bookForm.controls['Category']);
  }

}
