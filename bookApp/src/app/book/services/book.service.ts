import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public API = 'https://localhost:44390/api/Books/';
  public CAPI = 'https://localhost:44390/api/Categories/';
  postData: any;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any>(this.API);
  }
  async getBookById(id: any): Promise<any> {
    return this.http.get(this.API + id).toPromise();    
  }
  async getCat(): Promise<any> {
    return this.http.get(this.CAPI).toPromise();      
  }
  deleteBookById(id: number) {
    this.http.delete(this.API + id)
    .toPromise()
      .then((res: any) => {
        alert("Deleted..!");
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        alert("This entry cannot be deleted..!");
        console.log(err);
        return err;
      })
  }
  addBook(postData: FormData,router:Router): any {
    return this.http.post(this.API, postData)
    .toPromise()
    .then((res: any) => {
      alert("Book added..!");
      router.navigateByUrl('book');
      return res;
    })
    .catch((err: any) => {
      alert("A book with the same title exist, you can edit that entry or if you are trying to insert a used copy of the same book please change the condition to Used");
      console.log(err);
      return err;
    });
  }
  updateBook(updateableBookData: any,router:Router): any {
    console.log(updateableBookData); // before submitting to the REST API
    return this.http.put(this.API + updateableBookData.BookId, updateableBookData)
      .toPromise()
      .then((res: any) => {
        alert("Updated..!");
        router.navigateByUrl('book');
        return res;
      })
      .catch((err: any) => {
        alert("Encountered an error");
        console.log(err);
        return err;
      })
     
  }
}
