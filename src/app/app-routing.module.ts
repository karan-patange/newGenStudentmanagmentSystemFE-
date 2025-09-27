import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/adminPageComponents/admin-dashboard/admin-dashboard.component';
import { StudentsComponent } from './components/adminPageComponents/students/students.component';
import { SendEmailComponent } from './components/adminPageComponents/send-email/send-email.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },   // default route
  { path: '.', component: HomePageComponent },
  { path: 'students', component: StudentsComponent }   ,
  { path: 'sendEmail', component: SendEmailComponent }  ,
    { path: 'aboutUs', component: AboutUsComponent }  ,
     { path: 'home', component: HomePageComponent }  ,

     
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
