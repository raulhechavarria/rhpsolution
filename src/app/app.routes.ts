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
];
