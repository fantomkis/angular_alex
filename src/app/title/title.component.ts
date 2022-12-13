import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // inputValue = ''
   @Input() title:any;
  constructor() { }
 
  ngOnInit(): void {
  }
// onInput (event: any){
//     console.log(event)
//   this.inputValue = event.target.value;
// }
}
