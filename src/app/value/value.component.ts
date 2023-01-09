import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  title: string = '';
  setValue() {
    this.title= 'Niky'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
