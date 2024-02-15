import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl="https://localhost:7012/api/"

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl+'Book');
  }
  getOneBook(id:number):Observable<Book>{
    let url='https://localhost:7012/api/Book/'+id;
    return this.http.get<Book>(url);
  }
  postBook(addBookRequest:Book):Observable<Book>{
    return this.http.post<Book>(this.baseUrl+'Book',addBookRequest);
  }
  updateBook(id:number,updateBookRequest:Book):Observable<Book>{
    let url='https://localhost:7012/api/Book/'+id;
    return this.http.put<Book>(url,updateBookRequest);
  }
}
