import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';

import { environment } from '../../environments/environment';

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  projectDetails: string;
  submittedAt: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  submitInquiry(submission: ContactSubmission) {
    return this.http.post(environment.apiUrl, submission, {
      headers: { 'Content-Type': 'application/json' },
    }).pipe(timeout({ each: 15000 }));
  }
}
