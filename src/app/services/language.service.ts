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
  | 'contact.error'
  | 'solutions.eyebrow' | 'solutions.title' | 'solutions.description'
  | 'solutions.step1Title' | 'solutions.step1Text' | 'solutions.step2Title' | 'solutions.step2Text'
  | 'solutions.step3Title' | 'solutions.step3Text' | 'solutions.step4Title' | 'solutions.step4Text'
  | 'solutions.step5Title' | 'solutions.step5Text' | 'solutions.step6Title' | 'solutions.step6Text'
  | 'solutions.step7Title' | 'solutions.step7Text'
  | 'services.eyebrow' | 'services.title' | 'services.description'
  | 'workflow.eyebrow' | 'workflow.title' | 'workflow.description'
  | 'workflow.step1Title' | 'workflow.step1Text' | 'workflow.step2Title' | 'workflow.step2Text'
  | 'workflow.step3Title' | 'workflow.step3Text' | 'workflow.step4Title' | 'workflow.step4Text'
  | 'results.eyebrow' | 'results.title' | 'results.description' | 'results.efficiency'
  | 'results.reliability' | 'results.visibility' | 'results.reduction' | 'results.beforeAfter'
  | 'results.change' | 'results.before' | 'results.after' | 'results.inventory' | 'results.invoices'
  | 'results.energy' | 'results.schedule' | 'results.meatTrace'
  | 'results.efficiencyText' | 'results.reliabilityText' | 'results.visibilityText' | 'results.reductionText'
  | 'results.before1' | 'results.before2' | 'results.before3' | 'results.before4' | 'results.before5'
  | 'results.after1' | 'results.after2' | 'results.after3' | 'results.after4' | 'results.after5'
  | 'results.inventoryText' | 'results.invoicesText' | 'results.energyText' | 'results.scheduleText' | 'results.meatTraceText';

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
    'contact.success': 'Your inquiry has been received. We will contact you shortly.', 'contact.error': 'The request took too long. Please try again later.',
    'solutions.eyebrow': 'Solutions', 'solutions.title': 'End-to-end digital product development', 'solutions.description': 'We design and build software systems that align technology with business goals, from early planning to continuous improvement after deployment.',
    'solutions.step1Title': 'Planning & Ideation', 'solutions.step1Text': 'Defining the project scope, business goals, budget, and technical feasibility.', 'solutions.step2Title': 'Requirements Analysis', 'solutions.step2Text': 'Gathering and documenting what users need through user stories and functional requirements.', 'solutions.step3Title': 'System Design', 'solutions.step3Text': 'Creating software architecture, database models, workflows, and UI/UX prototypes.', 'solutions.step4Title': 'Development & Coding', 'solutions.step4Text': 'Writing the front-end interface and back-end server logic and database code.', 'solutions.step5Title': 'Testing & QA', 'solutions.step5Text': 'Running unit, integration, security, and performance tests to find and fix bugs.', 'solutions.step6Title': 'Deployment & Implementation', 'solutions.step6Text': 'Releasing the software to cloud or on-premise environments for final users.', 'solutions.step7Title': 'Maintenance & Evolution', 'solutions.step7Text': 'Monitoring, fixing bugs, optimizing performance, and adding new features over time.',
    'services.eyebrow': 'Services', 'services.title': 'Systems we build and evolve', 'services.description': 'We develop custom software solutions for operational efficiency, traceability, analytics, and business automation across multiple industries.',
    'workflow.eyebrow': 'Workflow Studio', 'workflow.title': 'We design workflows that keep operations focused and efficient.', 'workflow.description': 'We map the workflow of any company, define the exact objective, simulate each process, and propose a practical solution to eliminate bottlenecks such as the infinite queue.', 'workflow.step1Title': 'Fixed objective', 'workflow.step1Text': 'We define the business goal, expected outcome, and measurable target so every process has a clear purpose.', 'workflow.step2Title': 'Workflow simulation', 'workflow.step2Text': 'We simulate the current process to identify delays, rework, duplicate tasks, and weak points.', 'workflow.step3Title': 'Infinite queue analysis', 'workflow.step3Text': 'We detect the root cause behind accumulation, overloaded queues, and uncontrolled waiting times.', 'workflow.step4Title': 'Proposed solution', 'workflow.step4Text': 'We redesign responsibilities, priorities, automation, routing, and monitoring to stabilize throughput.',
    'results.eyebrow': 'Results', 'results.title': 'Results that improve operations and decision-making', 'results.description': 'We help businesses reduce friction, eliminate operational blind spots, and turn data into better decisions with faster, more reliable processes.', 'results.efficiency': 'Operational efficiency', 'results.reliability': 'System reliability', 'results.visibility': 'Visibility', 'results.reduction': 'Manual reduction', 'results.beforeAfter': 'Before vs After', 'results.change': 'Real operational change', 'results.before': 'Before', 'results.after': 'After', 'results.inventory': 'Inventory & stock', 'results.invoices': 'Invoice register', 'results.energy': 'Electrical consumption', 'results.schedule': 'Landscaping schedule', 'results.meatTrace': 'MeatTrace Manager', 'results.efficiencyText': 'Reduced manual work through workflow automation and process standardization.', 'results.reliabilityText': 'Improved platform uptime and stability with secure cloud-based infrastructure.', 'results.visibilityText': 'Clearer control of inventory, invoicing, consumption, and production indicators.', 'results.reductionText': 'Lower dependency on paper records, spreadsheets, and repetitive tasks.', 'results.before1': 'Inventory losses, stock inconsistencies, and limited visibility into product availability.', 'results.before2': 'Invoices, contracts, and supporting documents scattered across paper records and isolated files.', 'results.before3': 'Stations without reliable consumption data, making operational decisions difficult.', 'results.before4': 'Unplanned routes, inefficient scheduling, and poor daily coordination.', 'results.before5': 'Estimated income disconnected from actual production and financial performance.', 'results.after1': 'Real-time inventory visibility with product traceability and faster stock lookup.', 'results.after2': 'Digital document management that standardizes contracts and invoices in one controlled format.', 'results.after3': 'Connected stations reporting live consumption metrics through actionable dashboards.', 'results.after4': 'Optimized route planning and improved execution across daily field operations.', 'results.after5': 'Production and projected income aligned with actual outcomes for better financial control.', 'results.inventoryText': 'Before: inventory losses and fragmented records. After: faster lookup, real-time stock visibility, last-cost tracking, and more reliable purchasing decisions.', 'results.invoicesText': 'Before: contracts and invoices were lost or stored inconsistently. After: documents are captured digitally, standardized, and easier to audit.', 'results.energyText': 'Before: stations lacked consistent energy-use information. After: networked stations report live consumption through a centralized system.', 'results.scheduleText': 'Before: work orders lacked geographic coordination. After: locations are planned efficiently and more tasks are completed in the same operating window.', 'results.meatTraceText': 'Before: production reporting and expected income were not aligned. After: daily production is tracked against financial performance for stronger forecasting.'
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
    'contact.success': 'Recibimos tu consulta. Nos comunicaremos contigo pronto.', 'contact.error': 'La solicitud tardó demasiado. Inténtalo de nuevo más tarde.',
    'solutions.eyebrow': 'Soluciones', 'solutions.title': 'Desarrollo completo de productos digitales', 'solutions.description': 'Diseñamos y construimos sistemas de software que alinean la tecnología con los objetivos del negocio, desde la planificación hasta la mejora continua.',
    'solutions.step1Title': 'Planificación e ideación', 'solutions.step1Text': 'Definimos el alcance, objetivos, presupuesto y viabilidad técnica del proyecto.', 'solutions.step2Title': 'Análisis de requisitos', 'solutions.step2Text': 'Recopilamos y documentamos lo que los usuarios necesitan mediante historias de usuario y requisitos funcionales.', 'solutions.step3Title': 'Diseño del sistema', 'solutions.step3Text': 'Creamos la arquitectura, modelos de datos, flujos de trabajo y prototipos de interfaz.', 'solutions.step4Title': 'Desarrollo y programación', 'solutions.step4Text': 'Escribimos el código de la interfaz, la lógica del servidor y las bases de datos.', 'solutions.step5Title': 'Pruebas y calidad', 'solutions.step5Text': 'Ejecutamos pruebas unitarias, de integración, seguridad y rendimiento para corregir errores.', 'solutions.step6Title': 'Despliegue e implementación', 'solutions.step6Text': 'Publicamos el software en la nube o en servidores locales para los usuarios finales.', 'solutions.step7Title': 'Mantenimiento y evolución', 'solutions.step7Text': 'Monitoreamos, corregimos errores, optimizamos y agregamos nuevas funciones.',
    'services.eyebrow': 'Servicios', 'services.title': 'Sistemas que construimos y hacemos evolucionar', 'services.description': 'Desarrollamos soluciones personalizadas para eficiencia operativa, trazabilidad, análisis y automatización empresarial.',
    'workflow.eyebrow': 'Estudio de flujos', 'workflow.title': 'Diseñamos flujos que mantienen las operaciones enfocadas y eficientes.', 'workflow.description': 'Mapeamos el flujo de cualquier empresa, definimos el objetivo, simulamos cada proceso y proponemos una solución para eliminar cuellos de botella como la cola infinita.', 'workflow.step1Title': 'Objetivo definido', 'workflow.step1Text': 'Definimos la meta, el resultado esperado y un indicador medible para cada proceso.', 'workflow.step2Title': 'Simulación del flujo', 'workflow.step2Text': 'Simulamos el proceso actual para encontrar retrasos, retrabajo, tareas duplicadas y puntos débiles.', 'workflow.step3Title': 'Análisis de cola infinita', 'workflow.step3Text': 'Detectamos la causa de la acumulación, las colas saturadas y los tiempos de espera sin control.', 'workflow.step4Title': 'Solución propuesta', 'workflow.step4Text': 'Rediseñamos responsabilidades, prioridades, automatización, rutas y monitoreo para estabilizar el flujo.',
    'results.eyebrow': 'Resultados', 'results.title': 'Resultados que mejoran las operaciones y las decisiones', 'results.description': 'Ayudamos a reducir fricción, eliminar puntos ciegos y convertir datos en mejores decisiones mediante procesos rápidos y confiables.', 'results.efficiency': 'Eficiencia operativa', 'results.reliability': 'Confiabilidad del sistema', 'results.visibility': 'Visibilidad', 'results.reduction': 'Reducción manual', 'results.beforeAfter': 'Antes y después', 'results.change': 'Cambio operativo real', 'results.before': 'Antes', 'results.after': 'Después', 'results.inventory': 'Inventario y existencias', 'results.invoices': 'Registro de facturas', 'results.energy': 'Consumo eléctrico', 'results.schedule': 'Planificación de jardinería', 'results.meatTrace': 'MeatTrace Manager', 'results.efficiencyText': 'Menos trabajo manual mediante automatización y estandarización de procesos.', 'results.reliabilityText': 'Mayor disponibilidad y estabilidad con infraestructura segura en la nube.', 'results.visibilityText': 'Más control sobre inventario, facturación, consumo e indicadores de producción.', 'results.reductionText': 'Menor dependencia de papel, hojas de cálculo y tareas repetitivas.', 'results.before1': 'Pérdidas de inventario, inconsistencias y poca visibilidad de los productos disponibles.', 'results.before2': 'Facturas, contratos y documentos repartidos entre papel y archivos aislados.', 'results.before3': 'Estaciones sin datos confiables de consumo, dificultando las decisiones.', 'results.before4': 'Rutas no planificadas, horarios ineficientes y poca coordinación diaria.', 'results.before5': 'Ingresos estimados desconectados de la producción y el desempeño financiero.', 'results.after1': 'Visibilidad del inventario en tiempo real, trazabilidad y búsqueda más rápida.', 'results.after2': 'Gestión digital que estandariza contratos y facturas en un formato controlado.', 'results.after3': 'Estaciones conectadas que reportan consumo en vivo mediante tableros útiles.', 'results.after4': 'Rutas optimizadas y mejor ejecución de las operaciones de campo.', 'results.after5': 'Producción e ingresos proyectados alineados con resultados reales.', 'results.inventoryText': 'Antes: pérdidas y registros fragmentados. Después: búsqueda rápida, inventario en tiempo real, costos y compras más confiables.', 'results.invoicesText': 'Antes: documentos perdidos o inconsistentes. Después: captura digital, estandarización y auditoría más sencilla.', 'results.energyText': 'Antes: poca información sobre energía. Después: estaciones conectadas reportan consumo en vivo desde un sistema central.', 'results.scheduleText': 'Antes: órdenes sin coordinación geográfica. Después: ubicaciones planificadas y más tareas completadas en el mismo horario.', 'results.meatTraceText': 'Antes: producción e ingresos esperados no estaban alineados. Después: seguimiento diario para pronósticos más sólidos.'
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
