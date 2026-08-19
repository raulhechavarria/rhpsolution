import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { ContactService, ContactSubmission } from '../../services/contact.service';
import { LanguageService } from '../../services/language.service';

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

  constructor(private contactService: ContactService, protected language: LanguageService) {}

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
      this.message.set(this.language.text('contact.success'));
      this.form = {
        name: '',
        email: '',
        company: '',
        projectDetails: '',
        submittedAt: new Date().toISOString(),
      };
    } catch {
      this.isSuccess.set(false);
      this.message.set(this.language.text('contact.error'));
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
