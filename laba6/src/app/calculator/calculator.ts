import { Component } from '@angular/core';
import { Employee } from '../Class/employee';
import { Engineer } from '../Class/engineer';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.html', 
  styleUrl: './calculator.css',     
})
export class Calculator {
  employee_show: string = '';
  engineer_show: string = '';

  calcIncome(emp_name: string, p1: string, k1: string, eng_name: string, p2: string, k2: string, n: string) {
    try {
      if (!emp_name.trim() || !eng_name.trim()) {
        throw new Error('Ім\'я співробітника або інженера не може бути порожнім');
      }

      const parsedP1 = parseFloat(p1);
      const parsedK1 = parseFloat(k1);
      const parsedP2 = parseFloat(p2);
      const parsedK2 = parseFloat(k2);
      const parsedN = parseInt(n);

      if (
        isNaN(parsedP1) || parsedP1 < 0 ||
        isNaN(parsedK1) || parsedK1 < 0 ||
        isNaN(parsedP2) || parsedP2 < 0 ||
        isNaN(parsedK2) || parsedK2 < 0 ||
        isNaN(parsedN)  || parsedN < 0
      ) {
        throw new Error('Усі числові значення (зарплата, коефіцієнт, кількість проєктів) мають бути додатними');
      }

      let employee = new Employee(emp_name, parsedP1);
      let engineer = new Engineer(eng_name, parsedP2, parsedN);

      this.employee_show = `Співробітник ${employee.name}: Дохід = ${employee.calculateIncome(parsedK1).toFixed(2)}`;
      this.engineer_show = `Інженер ${engineer.name} (${engineer.n} проєктів): Дохід = ${engineer.calculateIncome(parsedK2).toFixed(2)}`;
      
    } catch (e: any) {
      this.employee_show = `Помилка: ${e.message}`;
      this.engineer_show = '';
    }
  } 
}