import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Employee} from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const employees: Employee[] = [
      new Employee('1', 'One', 'One'),
      new Employee('2', 'Two', 'Two'),
      new Employee('3', 'Three', 'Three'),
      new Employee('4', 'Four', 'Four'),
      new Employee('5', 'Five', 'Five'),
      new Employee('6', 'Six', 'Six'),
      new Employee('7', 'Seven', 'Seven'),
      new Employee('8', 'Eight', 'Eight'),
      new Employee('9', 'Nine', 'Nine'),
      new Employee('10', 'Ten', 'Ten')
    ];
    return {employees};
  }
}
