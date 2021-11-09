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
  categories:any;
  categoryList: any ;
  public API = 'https://localhost:44390/api/Categories/';
  constructor(
    private router:Router,
    private bookService:BookService,
    private route:ActivatedRoute) {
   
    this.bookForm=new FormGroup({
      BookId:new FormControl(),
      Title:new FormControl(),
      CId:new FormControl(),
      Author:new FormControl(),
      ISBN :new FormControl(),
      BookYear:new FormControl(),
      BRating :new FormControl(),
      Quantity:new FormControl(),
      Price :new FormControl(),
      BDescri:new FormControl(),
      BPosition:new FormControl(),   
      BStatus:new FormControl(),
      BImgFile :new FormControl(),
      BCondition :new FormControl(),
      BTags:new FormControl(),
     
    });   
   }
   
  async ngOnInit() {
    
    let BId = this.route.snapshot.paramMap.get('id');
    this.book=await this.bookService.getBookById(BId);
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
    this.categories=await this.bookService.getCat(); 
    console.log(this.categories);
    this.categoryList=this.categories.map((cat: { CName: any; })=>cat.CName)
    .filter((name: any)=>name!=this.book.Category['CName']);
     
  }

  async editBook(){
    this.categories.map((cat: any) => {            
            if (cat.CName == this.bookForm.controls['CId'].value) {
              this.bookForm.controls['CId'].setValue(cat.CategoryId);             
            }
          });
    this.bookService.updateBook(this.bookForm.value,this.router);
  }

}
