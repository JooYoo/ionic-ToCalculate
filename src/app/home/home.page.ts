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
  isStart: boolean
  newEquationExpression: string
  newEquationId: number


  constructor() { }

  ngOnInit() {
    this.equations = []
    this.inputNum = '0'
    this.input = '0'
    this.prepareCal = ''
    this.newEquationId = 0
    this.isStart = true
  }

  displayNums(): void {

    if (this.isStart) {
      this.inputNum = ''
      this.isStart = false
    }
    else if (this.inputNum === '0') {
      this.inputNum = '0'
    }

    if (this.isResult) {

      if (this.input == '+' || this.input == '-' || this.input == '*' || this.input == '/') {
        
      } else {
        this.prepareCal = ''
        this.inputNum = ''
      }
      this.isResult = false
    }


    if (this.inputNum.length < 11) {
      this.prepareCal += this.input
      this.operatorProcessor()

      if (this.input == '+' || this.input == '-' || this.input == '*' || this.input == '/') {
        return
      }

      if (this.input === '.' && this.inputNum[0] == '.') {
        this.inputNum = '0.'
        this.prepareCal = '0.'
      } else if (this.inputNum[0] === '0' && this.input === '0') {
        this.inputNum = '0'
      } else {
        this.inputNum += this.input
      }


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

    if (eval(this.prepareCal)) {
      this.result = eval(this.prepareCal)
    }

    if (!this.result) {
      return
    }

    var resultLength = String(this.result).length
    if (resultLength > 11) {
      this.inputNum = String(this.result).slice(0, 8 - resultLength)
    } else {
      this.inputNum = String(this.result)
    }


    // prepare Equation
    this.newEquationExpression = this.prepareCal + '=' + this.result + '\xa0\xa0'
    this.addEquation()

    // this.prepareCal = ''
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
    this.isStart = true
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
