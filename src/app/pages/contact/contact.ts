import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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

  // signals so zoneless Angular re-renders after async state changes
  isSubmitting = signal(false);
  message = signal('');
  isSuccess = signal(false);

  constructor(private contactService: ContactService) {}

  async onSubmit(): Promise<void> {
    if (this.isSubmitting()) {
      return;
    }

    this.message.set('');
    this.isSuccess.set(false);

    if (!this.form.name?.trim() || !this.form.email?.trim() || !this.form.projectDetails?.trim()) {
      this.message.set('Name, email, and project details are required.');
      return;
    }

    this.isSubmitting.set(true);
    this.form.submittedAt = new Date().toISOString();

    try {
      await Promise.race([
        firstValueFrom(this.contactService.submitInquiry({ ...this.form })),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Contact request timed out')), 10000)
        ),
      ]);

      this.isSuccess.set(true);
      this.message.set('Your inquiry has been received. We will contact you shortly.');
      this.form = {
        name: '',
        email: '',
        company: '',
        projectDetails: '',
        submittedAt: new Date().toISOString(),
      };
    } catch {
      this.isSuccess.set(false);
      this.message.set('The request took too long. Please check your email or try again later.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
