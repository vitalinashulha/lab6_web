export class Employee {
  name: string;
  p: number; 

  constructor(name: string, p: number) {
    if (p > 0) {
      this.p = p;
    } else {
      this.p = 8000; 
    }
    this.name = name;
  }

  calculateIncome(k: number): number {
    return k * this.p;
  }
}