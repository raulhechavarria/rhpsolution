import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit(): void {
    this.message = '';
    this.isSuccess = false;

    if (!this.form.name?.trim() || !this.form.email?.trim() || !this.form.projectDetails?.trim()) {
      this.message = 'Name, email, and project details are required.';
      this.isSuccess = false;
      return;
    }

    this.isSubmitting = true;
    this.form.submittedAt = new Date().toISOString();

    this.contactService.submitInquiry({ ...this.form }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.isSuccess = true;
        this.message = 'Your inquiry has been received. We will contact you shortly.';
        this.form = {
          name: '',
          email: '',
          company: '',
          projectDetails: '',
          submittedAt: new Date().toISOString(),
        };
      },
      error: () => {
        this.isSubmitting = false;
        this.isSuccess = false;
        this.message = 'There was an error sending your inquiry. Please try again later.';
      },
    });
  }
}
