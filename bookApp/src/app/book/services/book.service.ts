import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public API = 'https://localhost:44390/api/Books/';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any>(this.API);
  }
  async getBookById(id: any): Promise<any> {
    return this.http.get(this.API + id).toPromise();
      
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
  addBook(postData: Object): Observable<any> {
    return this.http.post(this.API, postData);
  }
  updateBook(updateableBookData: any): any {
    console.log(updateableBookData); // before submitting to the REST API
    return this.http.put(this.API + updateableBookData.BookId, updateableBookData)
      .toPromise()
      .then((res: any) => {
        alert("Updated..!");
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        alert("Encountered an error");
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log('It is over!');
      });
  }
}
