import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { User } from 'src/app/models/user.model';
import { BooksService } from 'src/app/services/Book/books.service';
import { UsersService } from 'src/app/services/User/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
    lented_Books:any;
    borrowedBooks: any;
    books:Book[]=[];
    curLoggedUser:User={
      id: 0,
      name: '',
      email: '',
      password: '',
      token: 0,
      booksBorrowed: 0,
      books_Lent: 0,
      userImg: ''
    }
  constructor(private bookService:BooksService,private userService:UsersService){
  }
  ngOnInit(): void {
    this.userService.getUser(this.userService.user).subscribe({
      next:(res)=>{
        this.curLoggedUser=res;
      }
    })
    this.bookService.getAllBooks().subscribe({
      next:(res)=>{
        this.books=res;
        console.log(res);
    this.lented_Books = this.books.filter((book) => book.lent_By_User_Id === this.userService.user );
    this.borrowedBooks = this.books.filter((book) => book.currently_Borrowed_By_User_Id ===this.userService.user);
      }
    })
    
  }

}
