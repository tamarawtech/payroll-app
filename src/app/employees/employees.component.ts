import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employees';
import {EmployeesService} from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeesService
  ) {
  }

  ngOnInit() {
    this.populateEmployees();
  }

  populateEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }
}
