export abstract class Employee {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract calculatePay(): number;

  abstract getType(): string;
}

export class FullTimeEmployee extends Employee {
  monthlySalary: number;

  constructor(id: number, name: string, monthlySalary: number) {
    super(id, name);
    this.monthlySalary = monthlySalary;
  }

  calculatePay(): number {
    return this.monthlySalary;
  }

  getType(): string {
    return 'Full-Time';
  }
}

export class Contractor extends Employee {
  hourlyRate: number;
  hoursWorked: number;

  constructor(id: number, name: string, hourlyRate: number, hoursWorked: number) {
    super(id, name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  getType(): string {
    return 'Contractor';
  }
}

