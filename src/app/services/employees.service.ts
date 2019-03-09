import {Injectable} from '@angular/core';
import {Employee} from '../models/employees';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private URL = 'api/employees';

  constructor(
    private messageService: MessagesService,
    private httpClient: HttpClient
  ) {
  }

  getEmployees(): Observable<Employee[]> {
    this.log('fetched employees');
    return this.httpClient.get<Employee[]>(this.URL);
  }

  getEmployee(id: string): Observable<Employee> {
    this.log(`fetched employee: ${id}`);
    return this.httpClient.get<Employee>(`${this.URL}/${id}`);
  }

  private log(message: string): void {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}
