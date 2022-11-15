import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @ContentChild('children') children: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.children)
  }

}
