import { Component } from '@angular/core';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent {
 student: any = {
    studentName: '',
    studentMobileNumber: '',
    studentEmailId: '',
    highestQualification: '',
    passingYear: '',
    gender: '',
    dateOfBirth: '',
    studentAddress: {
      city: '',
      state: '',
      pinCode: ''
    }
  };

  isSubmitting = false;
at: any="@";

  constructor(private studentService: StudentRegistrationService) {}

  onSubmit() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;

      this.studentService.registerStudent(this.student).subscribe({
        next: () => {
          alert('Student Registered Successfully!');
          this.isSubmitting = false;
        },
        error: () => {
          alert('Error while registering student.');
          this.isSubmitting = false;
        }
      });
    }
  }
}
