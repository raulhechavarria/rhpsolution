import { Component } from '@angular/core';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-architecture',
  imports: [],
  templateUrl: './architecture.html',
  styleUrl: './architecture.css',
})
export class Architecture {
  constructor(protected language: LanguageService) {}
}
