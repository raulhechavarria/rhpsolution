import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  constructor(protected language: LanguageService) {}
}
