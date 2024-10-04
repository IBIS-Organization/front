import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'nav', component: NavComponent }
  
];
