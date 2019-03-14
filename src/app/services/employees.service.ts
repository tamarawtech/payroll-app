import {Injectable} from '@angular/core';
import {Employee} from '../models/employees';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

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
    return this.httpClient.get<Employee[]>(this.URL)
      .pipe(
        catchError(this.handleError('getEmployees', []))
      );
  }

  getEmployee(id: string): Observable<Employee> {
    this.log(`fetched employee: ${id}`);
    return this.httpClient.get<Employee>(`${this.URL}/${id}`);
  }

  private log(message: string): void {
    this.messageService.add(`EmployeeService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
