import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<'en' | 'es'>('en');

  toggle(): void {
    this.language.update((current) => (current === 'en' ? 'es' : 'en'));
  }

  text(key: string): string {
    const translations: Record<'en' | 'es', Record<string, string>> = {
      en: {
        'nav.solutions': 'Solutions',
        'nav.services': 'Services',
        'nav.architecture': 'Architecture',
        'nav.workflow': 'Workflow',
        'nav.results': 'Results',
        'nav.contact': 'Contact',
        'nav.book': 'Book a call',
        'home.eyebrow': 'Built for small business',
        'home.title': 'Custom software that helps small businesses work smarter.',
        'home.description': 'We improve everyday operations with practical systems, automation, and clear workflows built around the way your business actually works.',
        'home.consultation': 'Book a consultation',
        'home.solutions': 'See our solutions',
        'home.smallBusiness': 'Small business focus',
        'home.benefit1': 'Practical systems',
        'home.benefit2': 'Clear processes',
        'home.solutionsEyebrow': 'Solutions',
        'home.solutionsTitle': 'Technology that solves real business problems.',
        'home.inventoryTitle': 'Operations & inventory',
        'home.inventoryText': 'Track work, stock, and daily operations without relying on disconnected spreadsheets.',
        'home.demandTracking': 'Demand tracking',
        'home.warehouseControls': 'Warehouse controls',
        'home.processAutomation': 'Process automation',
        'home.erpTitle': 'Finance & administration',
        'home.erpText': 'Simplify reporting, approvals, and recurring administrative work.',
        'home.customTitle': 'Custom platforms',
        'home.customText': 'Build only what your team needs, connected to the tools you already use.',
        'home.accelerationTitle': 'Operational acceleration',
        'home.accelerationText': 'We simplify legacy complexity and build systems that make growth easier to manage.',
        'home.whyEyebrow': 'Why us',
        'home.whyTitle': 'A practical technology partner for growing companies.',
        'home.ctaEyebrow': 'Ready to improve',
        'home.ctaTitle': 'Tell us what is slowing your business down.',
        'home.write': 'Write us',
        'home.architectureTitle': 'Robust architecture',
        'home.architectureText': 'Secure, scalable foundations designed to handle operational complexity and future growth.',
        'home.clarityTitle': 'Operational clarity',
        'home.clarityText': 'Dashboards and workflows built to simplify decision-making across departments.',
        'home.performanceTitle': 'High performance',
        'home.performanceText': 'Lean engineering practices that prioritize speed, reliability, and measurable results.',
        'home.hostingTitle': 'Hosting service',
        'home.hostingText': 'AWS infrastructure for DNS, databases, and secure network management, ensuring availability and resilience.',
        'home.benefitsLabel': 'Key business benefits',
        'home.architecturePreview': 'System architecture preview',
        'results.eyebrow': 'Results',
        'results.title': 'Operational improvements that create momentum.',
        'results.description': 'We help businesses reduce friction, see clearer data, and improve where the day-to-day work actually happens.',
        'results.efficiency': 'Efficiency',
        'results.efficiencyText': 'Streamline repetitive tasks and operational bottlenecks.',
        'results.reliability': 'Reliability',
        'results.reliabilityText': 'Create more dependable processes across teams and tools.',
        'results.visibility': 'Visibility',
        'results.visibilityText': 'Turn scattered information into quick decisions.',
        'results.reduction': 'Cost reduction',
        'results.reductionText': 'Reduce waste, errors, and avoidable delays.',
        'results.beforeAfter': 'Before vs after',
        'results.change': 'A clearer way to operate.',
        'results.before': 'Before',
        'results.before1': 'Manual work in spreadsheets',
        'results.before2': 'Disconnected systems',
        'results.before3': 'Slow approvals',
        'results.before4': 'Limited visibility',
        'results.before5': 'Reactive decisions',
        'results.after': 'After',
        'results.after1': 'Automated workflows',
        'results.after2': 'Connected data sources',
        'results.after3': 'Faster approvals',
        'results.after4': 'Real-time visibility',
        'results.after5': 'Proactive decisions',
        'results.inventory': 'Inventory control',
        'results.inventoryText': 'Keep stock and demand aligned with clean data and clear workflows.',
        'results.invoices': 'Invoice flow',
        'results.invoicesText': 'Reduce administrative delays and improve cash visibility.',
        'results.energy': 'Energy monitoring',
        'results.energyText': 'Track usage and improve operational forecasting.',
        'results.schedule': 'Scheduling',
        'results.scheduleText': 'Keep teams coordinated and projects moving on time.',
        'results.meatTrace': 'Meat traceability',
        'results.meatTraceText': 'Improve product tracking, transparency, and compliance.',
        'services.eyebrow': 'Services',
        'services.title': 'Support that fits the way your business runs.',
        'services.description': 'We design, build, and refine digital systems that support real operations without adding friction.',
        'solutions.eyebrow': 'Solutions',
        'solutions.title': 'A roadmap toward simpler operations.',
        'solutions.description': 'We help companies move from fragmented tools to a connected operating model that scales with the business.',
        'solutions.step1Title': 'Diagnose the problem',
        'solutions.step1Text': 'We look at your processes, pain points, and the systems you rely on.',
        'solutions.step2Title': 'Map the workflow',
        'solutions.step2Text': 'We design the flow of work so the business becomes easier to manage.',
        'solutions.step3Title': 'Define the system',
        'solutions.step3Text': 'We clarify what needs to be automated, connected, or simplified.',
        'solutions.step4Title': 'Build the foundation',
        'solutions.step4Text': 'We create the core structure that supports operations and growth.',
        'solutions.step5Title': 'Improve reporting',
        'solutions.step5Text': 'Dashboards and data visibility help teams make faster decisions.',
        'solutions.step6Title': 'Train and adapt',
        'solutions.step6Text': 'We make sure the business can use the system with confidence.',
        'solutions.step7Title': 'Scale intentionally',
        'solutions.step7Text': 'We keep improving the system as your business evolves.',
        'workflow.eyebrow': 'Workflow',
        'workflow.title': 'A practical process from discovery to delivery.',
        'workflow.description': 'Our approach keeps the technical work aligned with the business reality of your team.',
        'workflow.step1Title': 'Discovery',
        'workflow.step1Text': 'We understand your current process and identify the biggest friction points.',
        'workflow.step2Title': 'Design',
        'workflow.step2Text': 'We map the ideal flow and define the necessary technical decisions.',
        'workflow.step3Title': 'Build',
        'workflow.step3Text': 'We implement the solution in a way that supports your daily operations.',
        'workflow.step4Title': 'Support',
        'workflow.step4Text': 'We refine the system and make sure it continues to fit the business.',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.company': 'Company',
        'contact.projectDetails': 'Project details',
        'contact.submit': 'Send inquiry',
        'contact.success': 'Thanks! Your message was sent successfully.',
        'contact.error': 'Something went wrong. Please try again.'
        , 'contact.eyebrow': 'Contact'
        , 'contact.title': 'Let’s build a system that works for your business.'
        , 'contact.description': 'Tell us about your process, bottlenecks, and goals. We will help you choose a practical solution for your company.'
        , 'contact.responseTime': 'Response time'
        , 'contact.responseValue': 'Within 24 hours'
        , 'contact.namePlaceholder': 'Your name'
        , 'contact.emailPlaceholder': 'your@email.com'
        , 'contact.companyPlaceholder': 'Company name'
        , 'contact.detailsPlaceholder': 'Tell us about your workflow, challenge, or system needs'
        , 'contact.sending': 'Sending...'
        , 'contact.noCommitment': "No commitment — just a conversation about what's possible."
        , 'about.title': 'About our service'
        , 'about.description': 'We help businesses grow with strategic digital solutions that combine branding, communication, content, and marketing. From corporate identity to online reputation management, we create clear and impactful experiences that connect your brand with the right audience. Contact us to learn more about how we can help your business thrive in the digital landscape.'
        , 'about.phone': 'Phone'
        , 'about.email': 'Email'
        , 'about.imageAlt': 'Evelyn and Raul'
        , 'services.customSystem': 'Custom system'
        , 'services.opticalInventory': 'Optical inventory'
        , 'services.cryptoMarket': 'Crypto market'
        , 'services.inventorySystem': 'Inventory system'
        , 'services.telemetry': 'Telemetry'
        , 'services.landscapingSchedule': 'Landscaping schedule'
        , 'services.meatTraceManager': 'MeatTrace Manager'
        , 'services.agriHubErp': 'AgriHub ERP'
        , 'services.invoicesRegister': 'Invoices register'
        , 'services.electricalConsumption': 'Electrical consumption'
        , 'footer.linkedin': 'LinkedIn'
        , 'footer.emailPhone': 'Email / Phone'
        , 'footer.contact': 'Contact'
        , 'footer.copyright': '© 2026 RHP Solutions. All rights reserved.'
      },
      es: {
        'nav.solutions': 'Soluciones',
        'nav.services': 'Servicios',
        'nav.architecture': 'Arquitectura',
        'nav.workflow': 'Flujo de trabajo',
        'nav.results': 'Resultados',
        'nav.contact': 'Contacto',
        'nav.book': 'Agendar una llamada',
        'home.eyebrow': 'Pensado para pequeñas empresas',
        'home.title': 'Software personalizado que ayuda a las pequeñas empresas a trabajar mejor.',
        'home.description': 'Mejoramos la operación diaria con sistemas prácticos, automatización y procesos claros adaptados a la realidad de su negocio.',
        'home.consultation': 'Reservar consulta',
        'home.solutions': 'Ver nuestras soluciones',
        'home.smallBusiness': 'Enfoque en pequeñas empresas',
        'home.benefit1': 'Sistemas prácticos',
        'home.benefit2': 'Procesos claros',
        'home.solutionsEyebrow': 'Soluciones',
        'home.solutionsTitle': 'Tecnología que resuelve problemas reales del negocio.',
        'home.inventoryTitle': 'Operaciones e inventario',
        'home.inventoryText': 'Controle trabajo, stock y operaciones diarias sin depender de hojas de cálculo desconectadas.',
        'home.demandTracking': 'Seguimiento de la demanda',
        'home.warehouseControls': 'Controles de almacén',
        'home.processAutomation': 'Automatización de procesos',
        'home.erpTitle': 'Finanzas y administración',
        'home.erpText': 'Simplifique reportes, aprobaciones y tareas administrativas recurrentes.',
        'home.customTitle': 'Plataformas personalizadas',
        'home.customText': 'Construya solo lo que su equipo necesita, conectado con las herramientas que ya usa.',
        'home.accelerationTitle': 'Aceleración operativa',
        'home.accelerationText': 'Simplificamos la complejidad heredada y creamos sistemas que facilitan la gestión del crecimiento.',
        'home.whyEyebrow': '¿Por qué nosotros?',
        'home.whyTitle': 'Un aliado tecnológico práctico para empresas en crecimiento.',
        'home.ctaEyebrow': 'Listo para mejorar',
        'home.ctaTitle': 'Cuéntenos qué está frenando a su negocio.',
        'home.write': 'Escríbanos',
        'home.architectureTitle': 'Arquitectura robusta',
        'home.architectureText': 'Bases seguras y escalables diseñadas para manejar la complejidad operativa y el crecimiento futuro.',
        'home.clarityTitle': 'Claridad operativa',
        'home.clarityText': 'Dashboards y flujos de trabajo creados para simplificar la toma de decisiones entre departamentos.',
        'home.performanceTitle': 'Alto rendimiento',
        'home.performanceText': 'Prácticas de ingeniería eficientes que priorizan velocidad, confiabilidad y resultados medibles.',
        'home.hostingTitle': 'Servicio de hosting',
        'home.hostingText': 'Infraestructura AWS para DNS, bases de datos y redes seguras, garantizando disponibilidad y resiliencia.',
        'home.benefitsLabel': 'Beneficios principales',
        'home.architecturePreview': 'Vista previa de la arquitectura del sistema',
        'results.eyebrow': 'Resultados',
        'results.title': 'Mejoras operativas que generan impulso.',
        'results.description': 'Ayudamos a las empresas a reducir fricción, ver datos más claros y mejorar donde ocurre el trabajo del día a día.',
        'results.efficiency': 'Eficiencia',
        'results.efficiencyText': 'Simplifique tareas repetitivas y cuellos de botella operativos.',
        'results.reliability': 'Confiabilidad',
        'results.reliabilityText': 'Cree procesos más confiables entre equipos y herramientas.',
        'results.visibility': 'Visibilidad',
        'results.visibilityText': 'Transforme información dispersa en decisiones rápidas.',
        'results.reduction': 'Reducción de costos',
        'results.reductionText': 'Disminuya desperdicios, errores y retrasos evitables.',
        'results.beforeAfter': 'Antes y después',
        'results.change': 'Una forma más clara de operar.',
        'results.before': 'Antes',
        'results.before1': 'Trabajo manual en hojas de cálculo',
        'results.before2': 'Sistemas desconectados',
        'results.before3': 'Aprobaciones lentas',
        'results.before4': 'Visibilidad limitada',
        'results.before5': 'Decisiones reactivas',
        'results.after': 'Después',
        'results.after1': 'Flujos automatizados',
        'results.after2': 'Fuentes de datos conectadas',
        'results.after3': 'Aprobaciones más rápidas',
        'results.after4': 'Visibilidad en tiempo real',
        'results.after5': 'Decisiones proactivas',
        'results.inventory': 'Control de inventario',
        'results.inventoryText': 'Mantenga el stock y la demanda alineados con datos limpios y flujos claros.',
        'results.invoices': 'Flujo de facturas',
        'results.invoicesText': 'Reduzca retrasos administrativos y mejore la visibilidad del flujo de caja.',
        'results.energy': 'Monitoreo energético',
        'results.energyText': 'Siga el consumo y mejore la planeación operativa.',
        'results.schedule': 'Programación',
        'results.scheduleText': 'Mantenga los equipos coordinados y los proyectos avanzando a tiempo.',
        'results.meatTrace': 'Trazabilidad de carne',
        'results.meatTraceText': 'Mejore el seguimiento del producto, la transparencia y la compliance.',
        'services.eyebrow': 'Servicios',
        'services.title': 'Soporte que encaja con la forma en que opera su negocio.',
        'services.description': 'Diseñamos, construimos y perfeccionamos sistemas digitales que apoyan la operación real sin agregar fricción.',
        'solutions.eyebrow': 'Soluciones',
        'solutions.title': 'Una hoja de ruta hacia operaciones más simples.',
        'solutions.description': 'Ayudamos a las empresas a pasar de herramientas fragmentadas a un modelo operativo conectado que escala con el negocio.',
        'solutions.step1Title': 'Diagnosticar el problema',
        'solutions.step1Text': 'Analizamos sus procesos, puntos de dolor y sistemas en los que depende.',
        'solutions.step2Title': 'Mapear el flujo',
        'solutions.step2Text': 'Diseñamos el flujo de trabajo para que el negocio sea más fácil de gestionar.',
        'solutions.step3Title': 'Definir el sistema',
        'solutions.step3Text': 'Clarificamos qué debe automatizarse, conectarse o simplificarse.',
        'solutions.step4Title': 'Crear la base',
        'solutions.step4Text': 'Generamos la estructura central que apoya operaciones y crecimiento.',
        'solutions.step5Title': 'Mejorar reportes',
        'solutions.step5Text': 'Tableros y visibilidad de datos ayudan a tomar decisiones más rápidas.',
        'solutions.step6Title': 'Capacitar y adaptar',
        'solutions.step6Text': 'Nos aseguramos de que el negocio pueda usar el sistema con confianza.',
        'solutions.step7Title': 'Escalar con intención',
        'solutions.step7Text': 'Seguimos mejorando el sistema a medida que su negocio evoluciona.',
        'workflow.eyebrow': 'Flujo de trabajo',
        'workflow.title': 'Un proceso práctico desde la exploración hasta la entrega.',
        'workflow.description': 'Nuestro enfoque mantiene el trabajo técnico alineado con la realidad del negocio de su equipo.',
        'workflow.step1Title': 'Descubrimiento',
        'workflow.step1Text': 'Entendemos su proceso actual e identificamos los mayores puntos de fricción.',
        'workflow.step2Title': 'Diseño',
        'workflow.step2Text': 'Mapeamos el flujo ideal y definimos las decisiones técnicas necesarias.',
        'workflow.step3Title': 'Construcción',
        'workflow.step3Text': 'Implementamos la solución para apoyar sus operaciones diarias.',
        'workflow.step4Title': 'Soporte',
        'workflow.step4Text': 'Refinamos el sistema y nos aseguramos de que siga ajustándose al negocio.',
        'contact.name': 'Nombre',
        'contact.email': 'Correo electrónico',
        'contact.company': 'Empresa',
        'contact.projectDetails': 'Detalles del proyecto',
        'contact.submit': 'Enviar consulta',
        'contact.success': '¡Gracias! Tu mensaje fue enviado correctamente.',
        'contact.error': 'Algo salió mal. Inténtalo de nuevo.'
        , 'contact.eyebrow': 'Contacto'
        , 'contact.title': 'Construyamos un sistema que funcione para tu negocio.'
        , 'contact.description': 'Cuéntanos sobre tus procesos, dificultades y objetivos. Te ayudaremos a elegir una solución práctica para tu empresa.'
        , 'contact.responseTime': 'Tiempo de respuesta'
        , 'contact.responseValue': 'Dentro de 24 horas'
        , 'contact.namePlaceholder': 'Tu nombre'
        , 'contact.emailPlaceholder': 'tu@correo.com'
        , 'contact.companyPlaceholder': 'Nombre de la empresa'
        , 'contact.detailsPlaceholder': 'Cuéntanos sobre tu flujo de trabajo, desafío o necesidades del sistema'
        , 'contact.sending': 'Enviando...'
        , 'contact.noCommitment': 'Sin compromiso: solo una conversación sobre lo que es posible.'
        , 'about.title': 'Sobre nuestro servicio'
        , 'about.description': 'Ayudamos a las empresas a crecer con soluciones digitales estratégicas que combinan marca, comunicación, contenido y marketing. Desde la identidad corporativa hasta la gestión de la reputación en línea, creamos experiencias claras e impactantes que conectan tu marca con la audiencia correcta. Contáctanos para conocer cómo podemos ayudar a que tu negocio prospere en el entorno digital.'
        , 'about.phone': 'Teléfono'
        , 'about.email': 'Correo electrónico'
        , 'about.imageAlt': 'Evelyn y Raul'
        , 'services.customSystem': 'Sistema personalizado'
        , 'services.opticalInventory': 'Inventario óptico'
        , 'services.cryptoMarket': 'Mercado de criptomonedas'
        , 'services.inventorySystem': 'Sistema de inventario'
        , 'services.telemetry': 'Telemetría'
        , 'services.landscapingSchedule': 'Agenda de jardinería'
        , 'services.meatTraceManager': 'MeatTrace Manager'
        , 'services.agriHubErp': 'AgriHub ERP'
        , 'services.invoicesRegister': 'Registro de facturas'
        , 'services.electricalConsumption': 'Consumo eléctrico'
        , 'footer.linkedin': 'LinkedIn'
        , 'footer.emailPhone': 'Correo / Teléfono'
        , 'footer.contact': 'Contacto'
        , 'footer.copyright': '© 2026 RHP Solutions. Todos los derechos reservados.'
      }
    };

    return translations[this.language()][key] ?? translations.en[key] ?? key;
  }
}
