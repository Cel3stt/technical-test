import {
  Employee,
  FullTimeEmployee,
  Contractor,
} from '../models/Employee';


export const employees: Employee [] = [
  new FullTimeEmployee(1, 'Russell', 6500),
  new FullTimeEmployee(2, 'Al', 5200),
  new Contractor(3, 'Genrey', 60, 120),
  new Contractor(4, 'Irheil', 75, 90),
  new Contractor(5, 'Cathy', 55, 80),
  new Contractor(6, 'Monmon', 55, 80),
  new Contractor(7, 'Gwy', 55, 80)

]

export function getTotalPayout(list: Employee[]): number {
  return list.reduce((total, employee) => total + employee.calculatePay(), 0);
}

