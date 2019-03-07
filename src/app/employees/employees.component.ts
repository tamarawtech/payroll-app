import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employees';
import {EMPLOYEES} from '../../models/mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = EMPLOYEES;
  selectedEmployee: Employee;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}
