import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rhpsolution');

  protected readonly navItems = [
    { label: 'Solutions', route: '/solutions' },
    { label: 'Services', route: '/services' },
    { label: 'Architecture', route: '/architecture' },
    { label: 'Workflow', route: '/workflow' },
    { label: 'Results', route: '/results' },
    { label: 'Contact', route: '/contact' }
  ];

  protected readonly socialLinks = [
    { label: 'LinkedIn', route: '/about' },
    { label: 'Email', route: '/about' },
    { label: 'Contact', route: '/about' }
  ];
}
