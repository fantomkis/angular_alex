import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input()
  
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // onClick(){
  //   this.counter = this.counter + 1;

  // }

}
