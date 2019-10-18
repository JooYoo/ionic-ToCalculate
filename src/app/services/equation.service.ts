import { Injectable } from '@angular/core';
import { Equation} from '../interfaces/equation';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  equations: Equation[]
  newEquationId: number
  newEquationExpression: string

  constructor() { 
    this.equations = []
    this.newEquationId = 0
  }

  addEquation(): void {
    this.equations.push({
      id: this.newEquationId,
      expression: this. newEquationExpression
    })
    this.newEquationId++;
    this.newEquationExpression = ''
  }
}
