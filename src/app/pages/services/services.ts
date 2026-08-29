import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly opticalDemoVideo = '/videos/ClearStock.mp4';
  isVideoModalOpen = false;

  constructor(protected language: LanguageService) {}

  openOpticalDemo(): void {
    this.isVideoModalOpen = true;
  }

  closeOpticalDemo(): void {
    this.isVideoModalOpen = false;
  }
}
