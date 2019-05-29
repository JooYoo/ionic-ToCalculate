import { Component } from '@angular/core';
import { Equation } from '../interfaces/equation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  equations: Equation[]
  inputDisplay: string
  input: number
  operator: string
  result: number

  constructor() {

  }

  ngOnInit() {
    this.equations = []
    this.inputDisplay = '0'
    this.input = 0
  }

  addInputs(): void {
    if (this.inputDisplay === '0') {
      this.inputDisplay = ''
    }
    if (this.inputDisplay.length < 11) {
      this.inputDisplay += this.input
    }
    this.input = 0
  }

  getResult(): void {
    this.result = eval(this.inputDisplay)
    console.log(this.result)
    this.inputDisplay = String(this.result)
  }

  clearInputs(): void {
    this.inputDisplay = '0'
  }


}
