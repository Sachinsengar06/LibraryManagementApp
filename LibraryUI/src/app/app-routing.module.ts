import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { LentBookComponent } from './pages/lent-book/lent-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'detail/:id',component:DetailComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'addBook',component:LentBookComponent},
  {path:'updateBook/:id',component:UpdateBookComponent},
  {path:'about',component:AboutComponent},
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
