import { Component, Input, OnInit } from '@angular/core';
import { SocialService } from '../services/socialService.service';


@Component({
  selector: 'app-reusebla',
  templateUrl: './reusebla.component.html',
  styleUrls: ['./reusebla.component.scss']
})
export class ReuseblaComponent implements OnInit {
  @Input() social: any = SocialService;
   constructor() { }
  

  ngOnInit(): void {
  }

}
