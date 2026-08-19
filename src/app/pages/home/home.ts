import { Component } from '@angular/core';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(protected language: LanguageService) {}
}
