import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-number',
 
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit, OnChanges {
  @Input() counter: number = 0;
  isNoun = this.counter % 2 === 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isNoun = changes['counter'].currentValue % 2 === 0;
  }

  // onClick(){
  //   this.counter = this.counter + 1;

  // }

}
