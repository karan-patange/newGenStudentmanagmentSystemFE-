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



import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';

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
    SendEmailComponent,
    CoursesComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
