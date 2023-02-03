import { Component, OnInit } from '@angular/core';

import { SocialService } from '../services/socialService.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(protected serviceSoc: SocialService) { }
   social =  this.serviceSoc.social.friends

  ngOnInit(): void {
  }

}
