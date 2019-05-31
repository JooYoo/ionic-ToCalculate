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


  constructor() { }

  ngOnInit() {
    this.equations = []
    this.inputNum = '0'
    this.input = '0'
    this.prepareCal = ''
  }

  displayNums(): void {
    if (this.inputNum === '0') {
      this.inputNum = ''
    }

    if(this.isResult){
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
    this.prepareCal = ''
    this.isResult = true
  }

  clearInputs(): void {
    this.inputNum = '0'
  }


}
