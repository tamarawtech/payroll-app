import {Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees/employees.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/:id', component: EmployeeDetailsComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}

