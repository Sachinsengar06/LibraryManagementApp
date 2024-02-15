import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { User } from 'src/app/models/user.model';
import { BooksService } from 'src/app/services/Book/books.service';
import { UsersService } from 'src/app/services/User/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BooksService,
    private userService: UsersService
  ) { }
  UserFromDb: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    token: 0,
    booksBorrowed: 0,
    books_Lent: 0,
    userImg: ''
  }

  book: Book =
    {
      id: 0,
      title: '',
      imageLink: '',
      author: '',
      genre: '',
      description: '',
      isBookAvailable: false,
      rating: 0,
      lent_By_User_Id: 0,
      currently_Borrowed_By_User_Id: 0
    };
  bookId: any;
  lentedBookUser:any;

  ngOnInit(): void {

   
    this.bookId = this.activatedRoute.snapshot.params['id'];

     //getting details of book here from db
    this.bookService.getOneBook(this.bookId).subscribe({
      next: (res) => {
        this.book = res;
        this.userService.getUser(this.book.lent_By_User_Id).subscribe({
          next:(res)=>{
            this.lentedBookUser=res;
          }
         });
      }
    });

    //getting user currently logged in
    this.userService.getUser(this.userService.user).subscribe({
      next: (res) => {
        this.UserFromDb = res;
      }
    });

     // getting user lented this book for token update
    

  }


  // checkBookAvail() {
  //   console.log(this.book,this.UserFromDb)
  //   if (this.book.isBookAvailable && this.checkToken()) 
  //   {
  //     return true;
  //   }
  //   return false;
  // }

  checkToken() {
    if (this.UserFromDb.token > 0) {
      this.UserFromDb.token--;

    //which book is borrowed by user
    this.UserFromDb.booksBorrowed=this.bookId;

    //which user borrowed the book
    this.book.currently_Borrowed_By_User_Id=this.UserFromDb.id;

    //setting that book is borrowed and no other user can borrow
    this.book.isBookAvailable=false;

      //update Db for who has borrowed book
      this.updateCurBorBookInDB(this.book.id,this.book);

    //decresing  token in database for current user
      this.updateTokenInDB(this.UserFromDb.id, this.UserFromDb);
    // increasing token in db for lented user
      this.lentedBookUser.token++;
      console.log("id of user lented and token the book",this.lentedBookUser.id,this.lentedBookUser.token)
      this.updateTokenInDB(this.lentedBookUser.id,this.lentedBookUser);
      this.router.navigate(['/user'])
      return true;
    }
    return false;
}
updateTokenInDB(id:number, updatedData:User){
  this.userService.updateUser(id, updatedData).subscribe({
  });
}
updateCurBorBookInDB(id:number, updatedData:Book){
  this.bookService.updateBook(id, updatedData).subscribe({
  });
}

LoginAlert(){
  alert("Login to borrow book")
}
  


  

}

