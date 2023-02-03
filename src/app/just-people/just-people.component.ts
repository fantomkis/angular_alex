import { Component, OnInit } from '@angular/core';
import { SocialService } from '../services/socialService.service';

@Component({
  selector: 'app-just-people',
  templateUrl: './just-people.component.html',
  styleUrls: ['./just-people.component.scss']
})
export class JustPeopleComponent implements OnInit {

   constructor(protected serviceSoc: SocialService) { }
   social =  this.serviceSoc.social.justPeople

  ngOnInit(): void {
  }

}
