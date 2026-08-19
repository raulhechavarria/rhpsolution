import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-workflow',
  imports: [],
  templateUrl: './workflow.html',
  styleUrl: './workflow.css',
})
export class Workflow {
  constructor(protected language: LanguageService) {}
}
