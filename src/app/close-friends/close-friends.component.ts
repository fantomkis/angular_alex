import { Component, OnInit } from '@angular/core';
import { SocialService } from '../services/socialService.service';

@Component({
  selector: 'app-close-friends',
  templateUrl: './close-friends.component.html',
  styleUrls: ['./close-friends.component.scss']
})
export class CloseFriendsComponent implements OnInit {

   constructor(protected serviceSoc: SocialService) { }
   social =  this.serviceSoc.social.closeFriends


  ngOnInit(): void {
  }

}
