import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated(){
    return this.isAuthenticatedSubject.asObservable();
  }

  setAuthenticationStatus(isAuthenticated:boolean){
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  baseUrl="https://localhost:7012/api/"

  constructor(private http:HttpClient) { }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+'User/'+id)
  }
  updateUser(id:number,updatedData:User):Observable<User>{
    return this.http.put<User>(this.baseUrl+'User/'+id,updatedData)
  }


  //variable
  user!:number;

    // to communicate data between login page and header page using serivce

  setUser(value:number){
    this.user=value;
  }


  //login Jwt
  login(email:string, password:string):Observable<any>{
    
    const Credentials={email,password};
    return this.http.post(this.baseUrl+'User',Credentials);
  }
}
