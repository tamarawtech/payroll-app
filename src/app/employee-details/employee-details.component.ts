import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../models/employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor() {
  }

  ngOnInit() {
  }

}
