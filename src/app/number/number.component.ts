import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

  counter = 0;
  // number

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.counter = this.counter + 1;

  }

}
