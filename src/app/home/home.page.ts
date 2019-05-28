import { Component } from '@angular/core';
import { Equation } from '../interfaces/equation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  equations: Equation[]
  inputs: string
  input: string

  constructor() { }

  ngOnInit() {
    this.equations = []
    this.inputs = '0'
    this.input = ''
  }

  addInputs(): void {
    if (this.inputs === '0') {
      this.inputs =''
    }
    if (this.inputs.length < 11) {
      this.inputs += this.input
    }
    this.input = ''
  }

  clearInputs():void{
    this.inputs = '0'
  }


}
