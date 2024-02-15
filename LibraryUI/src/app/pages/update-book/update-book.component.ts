import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/Book/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  id:any;
  BookDetail:Book={
    id:0,
    title:'',
    imageLink:'',
    author:'',
    genre:'',
    description:'',
    isBookAvailable:true,
    rating:0,
    lent_By_User_Id:0,
    currently_Borrowed_By_User_Id:0

  }
  constructor(
    private activatedRoute:ActivatedRoute,
    private bookService:BooksService,
    private router:Router){}

    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      this.bookService.getOneBook(this.id).subscribe({
        next:(res)=>{
          this.BookDetail=res;
        }
      });
    }

    updateBook(){
      console.log("book detail form update",this.BookDetail.id,this.BookDetail);
      this.bookService.updateBook(this.BookDetail.id,this.BookDetail).subscribe({
      });
    }
}
