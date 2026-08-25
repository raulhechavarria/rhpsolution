import { Component } from '@angular/core';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(protected language: LanguageService) {}
}
