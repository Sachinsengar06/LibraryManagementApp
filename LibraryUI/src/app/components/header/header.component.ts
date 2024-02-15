import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/User/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated=false;
  user:number=0;
  book:any=2
  
  userData:User={
    id: 0,
    name: '',
    email: '',
    password: '',
    token: 0,
    booksBorrowed: 0,
    books_Lent: 0,
    userImg: ''
  }
  
  constructor(private userService:UsersService){}
  ngOnInit():void{
    this.userService.isAuthenticated.subscribe({
      next:(res)=>{
        this.isAuthenticated=res
      }
    });
    this.userService.getUser(this.userService.user).subscribe({
      next:(res)=>{
        this.userData=res;
      }
    })
  }

  //logout logic for users
  logout():void{
    this.userService.setAuthenticationStatus(false);
    this.userService.setUser(0);
  }
}
