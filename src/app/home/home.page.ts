import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayInput: string
  currentInput: string

  constructor() { }

  ngOnInit() {
    this.displayInput = '0'
    this.currentInput = ''
  }

  addDisplayInput(): void {
    this.displayInput += this.currentInput
    this.currentInput = ''
  }


}
