import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';
import { Login } from './login';
import { Courses } from './courses';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: 'login', component: Login},
  { path: 'courses', component: Courses},
  { path: 'courses/:id', component: Courses},
  { path: 'courses/new', component: Courses}
];
