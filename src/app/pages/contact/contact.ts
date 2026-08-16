import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { ContactService, ContactSubmission } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form: ContactSubmission = {
    name: '',
    email: '',
    company: '',
    projectDetails: '',
    submittedAt: new Date().toISOString(),
  };

  isSubmitting = false;
  message = '';
  isSuccess = false;

  constructor(private contactService: ContactService) {}

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) {
      return;
    }

    this.message = '';
    this.isSuccess = false;

    if (!this.form.name?.trim() || !this.form.email?.trim() || !this.form.projectDetails?.trim()) {
      this.message = 'Name, email, and project details are required.';
      this.isSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.form.submittedAt = new Date().toISOString();

    try {
      await Promise.race([
        firstValueFrom(this.contactService.submitInquiry({ ...this.form })),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Contact request timed out')), 10000)
        ),
      ]);

      this.isSuccess = true;
      this.message = 'Your inquiry has been received. We will contact you shortly.';
      this.form = {
        name: '',
        email: '',
        company: '',
        projectDetails: '',
        submittedAt: new Date().toISOString(),
      };
    } catch {
      this.isSuccess = false;
      this.message = 'The request took too long. Please check your email or try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
