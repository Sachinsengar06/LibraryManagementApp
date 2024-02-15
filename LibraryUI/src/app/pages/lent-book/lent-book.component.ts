import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/Book/books.service';
import { UsersService } from 'src/app/services/User/users.service';

@Component({
  selector: 'app-lent-book',
  templateUrl: './lent-book.component.html',
  styleUrls: ['./lent-book.component.css']
})
export class LentBookComponent implements OnInit {
  BookList:any=[];
  constructor(
    private bookService: BooksService,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    
  }

  AddBookForm: any = new FormGroup({
    tittle: new FormControl("", [Validators.required]),
    genre: new FormControl("", [Validators.required]),
    author: new FormControl("", [Validators.required]),
   
  });

  

  addBookRequest: Book = {
    id: 0,
    title: '',
    imageLink: '',
    author: '',
    genre: '',
    description: '',
    isBookAvailable: true,
    rating: 0,
    lent_By_User_Id: this.userService.user,
    currently_Borrowed_By_User_Id: 0

  }

  addBook() {
   
      console.log("hi from add");
      this.bookService.postBook(this.addBookRequest).subscribe({
        next: (Book) => {
          this.router.navigate(['']);
        }
      })
    
   
  }

}
