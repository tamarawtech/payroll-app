import {BaseEntity} from './base.model';

export class Employee extends BaseEntity {
  firstName: string;
  lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    super(id);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
