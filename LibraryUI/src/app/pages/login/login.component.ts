import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UsersService } from 'src/app/services/User/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit  {
  
  
//   user:number=0;
//   password:string='';

//   //constructor
//   constructor( private router:Router, private userService:UsersService){
//   }
//   ngOnInit(): void {}
 
//   userDetail:any=[]
//   // validation

//     loginForm = new FormGroup({
//     email: new  FormControl('',[Validators.required, Validators.email]),
//     password: new FormControl("",Validators.required)
//   });

//   get Email():FormControl{
//     return this.loginForm.get('email') as FormControl;
//   }
//   get PWD():FormControl{
//     return this.loginForm.get('password') as FormControl;
//   }

//   async onSubmit(){

// // function to check user

//    const userEmail=this.loginForm.value.email;
//    const pass=this.loginForm.value.password;

//   // this.userService.login(userEmail,pass).subscribe({
//   //   next:(res)=>{
//   //     const token=res.token;
//   //     localStorage.setItem('jwtToken',token);
//   //   }
//   // })
  
//     if((userEmail==='User1@email.com' )&&(pass==await this.checkPwd(1))){
//       this.user=1
//       this.userService.setUser(this.user);
//       this.router.navigate(['']);

//     }
//     else if((userEmail=='User2@email.com')&&(pass==await this.checkPwd(2))){
//       this.user=2
//       this.userService.setUser(this.user);
//       this.router.navigate(['']);

//     }
//     else if((userEmail=='User3@email.com')&&(pass==await this.checkPwd(3))){
//       this.user=3
//       this.userService.setUser(this.user);
//       this.router.navigate(['']);
//     }
//     else if((userEmail=='User4@email.com')&&(pass== await this.checkPwd(4))){
//       this.user=4
//       this.userService.setUser(this.user);
//       this.router.navigate(['']);
//     }
//     else{
//       alert("Wrong Credentials");
//     }
//    }
//   checkPwd(id: number): Promise<string> {
//     return new Promise((resolve, reject) => {
//       this.userService.getUser(id).subscribe({
//         next: (res) => {
//           this.password = res.password;
//           resolve(this.password); // resolve with the password after fetching
//         },
//         error: (err) => {
//           reject(err); // reject with an error if any
//         },
//       });
//     });
//   }

loginForm!: FormGroup;

constructor(
  private userService: UsersService,
  private fb: FormBuilder,
  private router:Router) {}

ngOnInit(): void {
  this.initForm();
}

initForm(): void {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

onSubmit(): void {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    this.userService.login(email, password).subscribe(
      (response) => {
        const token = response.token;
        localStorage.setItem('jwtToken', token);
        this.userService.setAuthenticationStatus(true);
        this.getIdFromToken()
        this.router.navigate(['']);
      }
    );
  } else {
    // Mark all controls as touched to display validation messages
    this.markFormGroupTouched(this.loginForm);
    alert("Require Appropriate Data")
  }
}







// Helper function to mark all controls as touched
markFormGroupTouched(formGroup: FormGroup): void {
  Object.values(formGroup.controls).forEach(control => {
    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    } else {
      control.markAsTouched();
    }
  });
}
 
getIdFromToken(){
const token = localStorage.getItem('jwtToken') as string;

const decodedToken:any=jwtDecode(token);
this.userService.setUser(parseInt(decodedToken.UserId,10));
console.log("decodedToken",decodedToken.UserId,decodedToken);

}
 
}
