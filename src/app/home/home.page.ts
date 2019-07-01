import { Component } from '@angular/core';
import { Equation } from '../interfaces/equation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  equations: Equation[]
  inputNum: string
  input: string
  operator: string
  prepareCal: string
  result: number
  isResult: boolean
  newEquationExpression: string
  newEquationId: number


  constructor() { }

  ngOnInit() {
    this.equations = []
    this.inputNum = '0'
    this.input = '0'
    this.prepareCal = ''
    this.newEquationId = 0
  }

  displayNums(): void {
    if (this.inputNum === '0') {
      this.inputNum = ''
    }

    if (this.isResult) {
      this.inputNum = ''
      this.isResult = false
    }


    if (this.inputNum.length < 11) {
      this.prepareCal += this.input
      this.operatorProcessor()

      if (this.input == '+' || this.input == '-' || this.input == '*' || this.input == '/') {
        return
      }
      this.inputNum += this.input
    }

    this.input = '0'
  }

  operatorProcessor(): void {
    var i = this.prepareCal.length - 2
    if (this.prepareCal[i] == '+' || this.prepareCal[i] == '-' || this.prepareCal[i] == '*' || this.prepareCal[i] == '/') {
      this.inputNum = ''
    }
  }

  getResult(): void {
    this.result = eval(this.prepareCal)
    this.inputNum = String(this.result)

    // preapre Equation
    this.newEquationExpression = this.prepareCal + '=' + this.result + '\xa0\xa0'
    this.addEquation()

    this.prepareCal = ''
    this.isResult = true
  }

  backSpace(): void {
    // inputNum will remove one digit from end
    if (this.prepareCal.length == 1 || this.inputNum.length == 1) {
      this.inputNum = '0'
      this.prepareCal = ''
    } else if (this.inputNum.length == 1 && this.prepareCal.length > 1) {
      this.inputNum = '0'
      this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1)
    }
    else {
      this.skipOperator()
    }
  }

  skipOperator(): void {

    if (this.prepareCal[this.prepareCal.length - 1] == '+' ||
      this.prepareCal[this.prepareCal.length - 1] == '-' ||
      this.prepareCal[this.prepareCal.length - 1] == '*' ||
      this.prepareCal[this.prepareCal.length - 1] == '/') {

      this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1)

    } else {
      this.inputNum = this.inputNum.slice(0, this.inputNum.length - 1)
      this.prepareCal = this.prepareCal.slice(0, this.prepareCal.length - 1)
    }
  }

  clearAll(): void {
    this.prepareCal = ''
    this.inputNum = '0'
    this.equations = []
  }

  addEquation(): void {
    this.equations.push({
      id: this.newEquationId,
      expression: this.newEquationExpression
    })

    this.newEquationId++;
    this.newEquationExpression = ''
  }


}
