import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly language = inject(LanguageService);

  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateSeo();
    });

    effect(() => {
      this.language.language();
      this.updateSeo();
    });
  }

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
    { label: 'LinkedIn', route: 'https://www.linkedin.com/in/raul-hechavarria-028356117/' },
    { label: 'Email / Phone', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];

  private updateSeo(): void {
    const path = this.router.url.split('?')[0].replace(/\/$/, '') || '/home';
    const spanish = this.language.language() === 'es';
    const metadata = this.getMetadata(path, spanish);
    const canonicalPath = path === '/home' ? '/' : path;
    const canonicalUrl = `https://rhpsolution.net${canonicalPath}`;

    this.document.documentElement.lang = spanish ? 'es' : 'en';
    this.titleService.setTitle(metadata.title);
    this.meta.updateTag({ name: 'description', content: metadata.description });
    this.meta.updateTag({ property: 'og:title', content: metadata.title });
    this.meta.updateTag({ property: 'og:description', content: metadata.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });

    let canonical = this.document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }

  private getMetadata(path: string, spanish: boolean): { title: string; description: string } {
    const metadata: Record<string, { en: { title: string; description: string }; es: { title: string; description: string } }> = {
      '/home': {
        en: { title: 'RHP Solutions | Practical business software and automation', description: 'RHP Solutions builds practical software, automation, and clear workflows for growing small businesses.' },
        es: { title: 'RHP Solutions | Software y automatización para empresas', description: 'RHP Solutions crea software práctico, automatización y procesos claros para pequeñas empresas en crecimiento.' },
      },
      '/about': {
        en: { title: 'About RHP Solutions | Practical technology partner', description: 'Learn how RHP Solutions helps growing businesses improve operations with practical technology.' },
        es: { title: 'Sobre RHP Solutions | Tecnología práctica para empresas', description: 'Conoce cómo RHP Solutions ayuda a las empresas en crecimiento a mejorar sus operaciones con tecnología práctica.' },
      },
      '/solutions': {
        en: { title: 'Business Software Solutions | RHP Solutions', description: 'A practical roadmap from business problems to connected systems, automation, and better reporting.' },
        es: { title: 'Soluciones de software empresarial | RHP Solutions', description: 'Una hoja de ruta práctica desde los problemas del negocio hasta sistemas conectados, automatización y mejores reportes.' },
      },
      '/services': {
        en: { title: 'Business Technology Services | RHP Solutions', description: 'Software design, development, automation, and support that fits the way your business runs.' },
        es: { title: 'Servicios de tecnología empresarial | RHP Solutions', description: 'Diseño, desarrollo, automatización y soporte de software adaptados a la forma en que opera tu negocio.' },
      },
      '/workflow': {
        en: { title: 'Our Software Development Workflow | RHP Solutions', description: 'Discover a practical process from discovery and design through implementation and ongoing support.' },
        es: { title: 'Nuestro proceso de desarrollo de software | RHP Solutions', description: 'Conoce un proceso práctico desde el descubrimiento y diseño hasta la implementación y el soporte continuo.' },
      },
      '/architecture': {
        en: { title: 'Software Architecture and Cloud Systems | RHP Solutions', description: 'Explore our approach to frontend, backend, databases, hosting, security, and scalable operations.' },
        es: { title: 'Arquitectura de software y sistemas cloud | RHP Solutions', description: 'Conoce nuestro enfoque para frontend, backend, bases de datos, hosting, seguridad y operaciones escalables.' },
      },
      '/results': {
        en: { title: 'Business Results from Better Systems | RHP Solutions', description: 'See how better workflows and connected data improve efficiency, reliability, visibility, and cost control.' },
        es: { title: 'Resultados empresariales con mejores sistemas | RHP Solutions', description: 'Descubre cómo mejores procesos y datos conectados aumentan la eficiencia, confiabilidad, visibilidad y control de costos.' },
      },
      '/contact': {
        en: { title: 'Contact RHP Solutions | Build a Better Business System', description: 'Tell RHP Solutions about your process, bottlenecks, and goals. Start a practical conversation about your next system.' },
        es: { title: 'Contacta a RHP Solutions | Construyamos un mejor sistema', description: 'Cuéntale a RHP Solutions sobre tus procesos, dificultades y objetivos. Inicia una conversación práctica sobre tu próximo sistema.' },
      },
    };

    return (metadata[path] ?? metadata['/home'])[spanish ? 'es' : 'en'];
  }
}
