import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputs: string
  input: string

  constructor() { }

  ngOnInit() {
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
