import { Component, OnInit } from '@angular/core';
import { SocialService } from '../services/socialService.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

   constructor(protected serviceSoc: SocialService) { }

  ngOnInit(): void {
  }

}
