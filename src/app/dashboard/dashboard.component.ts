import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employees';
import {EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeesService
  ) {
  }

  ngOnInit() {
    this.getTopEmployees();
  }

  getTopEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees.slice(1, 5);
      });
  }
}
