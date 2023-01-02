import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-titel',
  templateUrl: './pipe-titel.component.html',
  styleUrls: ['./pipe-titel.component.scss']
})
export class PipeTitelComponent implements OnInit {
name : string= 'Pavel'
  constructor() { }

  ngOnInit(): void {
  }

}
