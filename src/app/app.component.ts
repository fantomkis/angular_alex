import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input()
    counter = 0;
   public title: string = '';

  ngOnInit() {
    this.title = 'Chamion';
    console.log(this.counter)
  }
  onClick(){
    this.counter = this.counter + 1;

  }

}
