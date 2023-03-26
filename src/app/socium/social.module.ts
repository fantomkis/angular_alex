import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CloseFriendsComponent } from "../close-friends/close-friends.component";
import { FamilyComponent } from "../family/family.component";
import { FriendsComponent } from "../friends/friends.component";
import { JustPeopleComponent } from "../just-people/just-people.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { ReuseblaComponent } from "../reusebla/reusebla.component";
import { SocialService } from "../services/socialService.service";
import { RoutingMobule } from "./social-routing.module";
import { SociumComponent } from "./socium.component";

@NgModule({
    declarations: [
        SociumComponent,
        FriendsComponent,
        CloseFriendsComponent,
        FamilyComponent,
        JustPeopleComponent,
        ReuseblaComponent,
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,
        RoutingMobule,
        
    ],
     providers: [
    SocialService,
  

  ],

    exports: [
        SocialMobule
    ]


})
export class SocialMobule{

}