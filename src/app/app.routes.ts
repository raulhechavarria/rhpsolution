import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Solutions } from './pages/solutions/solutions';
import { Services } from './pages/services/services';
import { Workflow } from './pages/workflow/workflow';
import { Architecture } from './pages/architecture/architecture';
import { Results } from './pages/results/results';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'solutions', component: Solutions },
  { path: 'services', component: Services },
  { path: 'workflow', component: Workflow },
  { path: 'architecture', component: Architecture },
  { path: 'results', component: Results },
  { path: 'contact', component: Contact }
  , { path: 'es', redirectTo: 'es/home', pathMatch: 'full' }
  , { path: 'es/home', component: Home }
  , { path: 'es/about', component: About }
  , { path: 'es/solutions', component: Solutions }
  , { path: 'es/services', component: Services }
  , { path: 'es/workflow', component: Workflow }
  , { path: 'es/architecture', component: Architecture }
  , { path: 'es/results', component: Results }
  , { path: 'es/contact', component: Contact }
];
