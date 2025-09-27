import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { StudentRegistrationFormComponent } from './components/student-registration-form/student-registration-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { TestingComponent } from './components/testing/testing.component';
import { StudentsComponent } from './components/adminPageComponents/students/students.component';
import { AdminDashboardComponent } from './components/adminPageComponents/admin-dashboard/admin-dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SendEmailComponent } from './components/adminPageComponents/send-email/send-email.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingTextComponent } from './components/scrolling-text/scrolling-text.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnquiryFormComponent,
    StudentRegistrationFormComponent,
    HomePageComponent,
    SlideshowComponent,
    TestingComponent,
    StudentsComponent,
    AdminDashboardComponent,
    AboutUsComponent,
    ScrollingTextComponent,
    SendEmailComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
