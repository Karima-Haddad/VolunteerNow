// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InscriptionBenevoleComponent } from './inscription-benevole/inscription-benevole';
import { InscriptionOrganisationComponent } from './inscription-organisation/inscription-organisation';

export const routes: Routes = [
  { path: '', redirectTo: '/benevole', pathMatch: 'full' },
  { path: 'benevole', component: InscriptionBenevoleComponent },
  { path: 'organisation', component: InscriptionOrganisationComponent },
  // { path: '**', redirectTo: '/benevole' } // 404 optionnel
];