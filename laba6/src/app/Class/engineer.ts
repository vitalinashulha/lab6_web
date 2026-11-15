import { Employee } from './employee';

export class Engineer extends Employee {
  n: number; 

  constructor(name: string, p: number, n: number) {
    super(name, p);
    
    if (n >= 0) {
      this.n = n;
    } else {
      this.n = 0;
    }
  }

  override calculateIncome(k: number): number {
    let baseIncome = super.calculateIncome(k);
    
    return baseIncome * (this.n / 10);
  }
}