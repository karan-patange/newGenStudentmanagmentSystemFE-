import { Component } from '@angular/core';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {
subject: string = '';
  body: string = '';
  selectedApi: string = '';
  message: string = '';

  constructor(private emailService: EmailServiceService) {}

  sendEmail() {
    if (!this.subject || !this.body || !this.selectedApi) {
      this.message = "Please fill all fields and select an option.";
      return;
    }

    if (this.selectedApi === 'girls') {
      this.emailService.sendEmailToGirls(this.subject, this.body).subscribe(res => this.message = res);
    } else if (this.selectedApi === 'all') {
      this.emailService.sendEmailToAll(this.subject, this.body).subscribe(res => this.message = res);
    } else if (this.selectedApi === 'fees90') {
      this.emailService.sendEmailToFees90(this.subject, this.body).subscribe(res => this.message = res);
    }
  }
}
