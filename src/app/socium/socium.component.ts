import { Component, OnInit } from '@angular/core';
import { SocialService } from '../services/socialService.service';

@Component({
  selector: 'app-socium',
  templateUrl: './socium.component.html',
  styleUrls: ['./socium.component.scss'],
   providers: [ SocialService
],
})
export class SociumComponent implements OnInit {

  constructor(protected socialService: SocialService) { }

  ngOnInit(): void {
  }

}
