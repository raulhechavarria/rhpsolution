import { Injectable, signal } from '@angular/core';

type Language = 'en' | 'es';

type CopyKey =
  | 'nav.solutions'
  | 'nav.services'
  | 'nav.architecture'
  | 'nav.workflow'
  | 'nav.results'
  | 'nav.contact'
  | 'nav.book'
  | 'home.eyebrow'
  | 'home.title'
  | 'home.description'
  | 'home.consultation'
  | 'home.solutions'
  | 'home.smallBusiness'
  | 'home.benefit1'
  | 'home.benefit2'
  | 'home.benefit3'
  | 'home.solutionsEyebrow'
  | 'home.solutionsTitle'
  | 'home.inventoryTitle'
  | 'home.inventoryText'
  | 'home.erpTitle'
  | 'home.erpText'
  | 'home.customTitle'
  | 'home.customText'
  | 'home.whyEyebrow'
  | 'home.whyTitle'
  | 'home.ctaEyebrow'
  | 'home.ctaTitle'
  | 'home.write'
  | 'contact.title'
  | 'contact.description'
  | 'contact.response'
  | 'contact.project'
  | 'contact.send'
  | 'contact.sending'
  | 'contact.success'
  | 'contact.error';

const copy: Record<Language, Record<CopyKey, string>> = {
  en: {
    'nav.solutions': 'Solutions', 'nav.services': 'Services', 'nav.architecture': 'Architecture',
    'nav.workflow': 'Workflow', 'nav.results': 'Results', 'nav.contact': 'Contact', 'nav.book': 'Book a call',
    'home.eyebrow': 'Built for small business',
    'home.title': 'Custom software that helps small businesses work smarter.',
    'home.description': 'We improve everyday operations with practical systems, automation, and clear workflows built around the way your business actually works.',
    'home.consultation': 'Book a consultation', 'home.solutions': 'See our solutions',
    'home.smallBusiness': 'Small business focus', 'home.benefit1': 'Practical systems', 'home.benefit2': 'Clear processes', 'home.benefit3': 'Reliable support',
    'home.solutionsEyebrow': 'Solutions', 'home.solutionsTitle': 'Technology that solves real business problems.',
    'home.inventoryTitle': 'Operations & inventory', 'home.inventoryText': 'Track work, stock, and daily operations without relying on disconnected spreadsheets.',
    'home.erpTitle': 'Finance & administration', 'home.erpText': 'Simplify reporting, approvals, and recurring administrative work.',
    'home.customTitle': 'Custom platforms', 'home.customText': 'Build only what your team needs, connected to the tools you already use.',
    'home.whyEyebrow': 'Why us', 'home.whyTitle': 'A practical technology partner for growing companies.',
    'home.ctaEyebrow': 'Ready to improve', 'home.ctaTitle': 'Tell us what is slowing your business down.', 'home.write': 'Write us',
    'contact.title': 'Let’s build a system that works for your business.',
    'contact.description': 'Tell us about your process, bottlenecks, and goals. We will help you choose a practical solution for your company.',
    'contact.response': 'Within 24 hours', 'contact.project': 'Project details', 'contact.send': 'Send inquiry', 'contact.sending': 'Sending...',
    'contact.success': 'Your inquiry has been received. We will contact you shortly.', 'contact.error': 'The request took too long. Please try again later.'
  },
  es: {
    'nav.solutions': 'Soluciones', 'nav.services': 'Servicios', 'nav.architecture': 'Arquitectura',
    'nav.workflow': 'Flujo de trabajo', 'nav.results': 'Resultados', 'nav.contact': 'Contacto', 'nav.book': 'Agendar llamada',
    'home.eyebrow': 'Creado para pequeñas Compañías',
    'home.title': 'Software personalizado para que tu compañía trabaje mejor.',
    'home.description': 'Mejoramos las operaciones diarias con sistemas prácticos, automatización y procesos claros adaptados a la forma en que realmente trabajas.',
    'home.consultation': 'Agendar consulta', 'home.solutions': 'Ver soluciones',
    'home.smallBusiness': 'Enfoque en pequeñas compañías', 'home.benefit1': 'Sistemas prácticos', 'home.benefit2': 'Procesos claros', 'home.benefit3': 'Soporte confiable',
    'home.solutionsEyebrow': 'Soluciones', 'home.solutionsTitle': 'Tecnología que resuelve problemas reales del negocio.',
    'home.inventoryTitle': 'Operaciones e inventario', 'home.inventoryText': 'Controla el trabajo, el inventario y las operaciones diarias sin depender de hojas de cálculo desconectadas.',
    'home.erpTitle': 'Finanzas y administración', 'home.erpText': 'Simplifica reportes, aprobaciones y tareas administrativas repetitivas.',
    'home.customTitle': 'Plataformas personalizadas', 'home.customText': 'Construimos solo lo que tu equipo necesita y lo conectamos con tus herramientas actuales.',
    'home.whyEyebrow': 'Por qué nosotros', 'home.whyTitle': 'Un socio tecnológico práctico para compañías en crecimiento.',
    'home.ctaEyebrow': 'Listos para mejorar', 'home.ctaTitle': 'Cuéntanos qué está frenando tu negocio.', 'home.write': 'Escríbenos',
    'contact.title': 'Construyamos un sistema que funcione para tu Compañía.',
    'contact.description': 'Cuéntanos sobre tus procesos, obstáculos y objetivos. Te ayudaremos a elegir una solución práctica para tu empresa.',
    'contact.response': 'En menos de 24 horas', 'contact.project': 'Detalles del proyecto', 'contact.send': 'Enviar consulta', 'contact.sending': 'Enviando...',
    'contact.success': 'Recibimos tu consulta. Nos comunicaremos contigo pronto.', 'contact.error': 'La solicitud tardó demasiado. Inténtalo de nuevo más tarde.'
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<Language>('en');

  toggle(): void {
    this.language.update((language) => language === 'en' ? 'es' : 'en');
  }

  text(key: CopyKey): string {
    return copy[this.language()][key];
  }
}
