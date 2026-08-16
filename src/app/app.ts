import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(protected language: LanguageService) {}

  protected readonly title = signal('rhpsolution');

  protected readonly navItems = [
    { key: 'nav.solutions' as const, route: '/solutions' },
    { key: 'nav.services' as const, route: '/services' },
    { key: 'nav.architecture' as const, route: '/architecture' },
    { key: 'nav.workflow' as const, route: '/workflow' },
    { key: 'nav.results' as const, route: '/results' },
    { key: 'nav.contact' as const, route: '/contact' }
  ];

  protected readonly socialLinks = [
    { label: 'LinkedIn', route: '/about' },
    { label: 'Email', route: '/about' },
    { label: 'Contact', route: '/about' }
  ];
}
