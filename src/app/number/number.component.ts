import { Component, OnInit, Input, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-number',
 
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input() counter: number = 0;
  isNoun = this.counter % 2 === 0;

  constructor() { }

  ngOnInit(): void {
  }

  

  // onClick(){
  //   this.counter = this.counter + 1;

  // }

}
