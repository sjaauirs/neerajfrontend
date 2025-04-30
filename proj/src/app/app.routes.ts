import { Routes } from '@angular/router';

import { EmployeeComponent } from './Employee/Employee.component'; // <-- Import
import { HomeComponent } from './home/home.component';
import { ClientCompanyComponent } from './Company/client-company.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'employee', component: EmployeeComponent }, 
  {path: 'company' , component: ClientCompanyComponent}
];
