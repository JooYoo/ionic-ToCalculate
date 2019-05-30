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

    if(this.prepareCal.length == 0){
      this.input=''
    }

    if (this.inputNum.length < 11) {

      this.prepareCal += this.input
      this.isOperator()

      if (this.input == '+' || this.input == '-' || this.input == '*' || this.input == '/') {
        return
      }

      

      this.inputNum += this.input
    }

    this.input = '0'
  }

  isOperator(): void {
    var i = this.prepareCal.length - 2
    console.log(this.prepareCal[i])
    if (this.prepareCal[i] == '+' || this.prepareCal[i] == '-' || this.prepareCal[i] == '*' || this.prepareCal[i] == '/') {
      this.inputNum = ''
      
    }
  }

  getResult(): void {
    this.result = eval(this.prepareCal)
    this.inputNum = String(this.result)
    this.prepareCal = ''
  }

  clearInputs(): void {
    this.inputNum = '0'
  }


}
