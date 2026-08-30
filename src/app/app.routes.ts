// app.routes.ts
import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/application/dashboard/dashboard.component';
import { SubmitProjectComponent } from './pages/application/submit-project/submit-project.component';
import { StudentListComponent } from './pages/application/student-list/student-list.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submit-project', component: SubmitProjectComponent },
  { path: 'students', component: StudentListComponent },
];