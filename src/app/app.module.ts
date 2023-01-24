import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NumberComponent } from './number/number.component';
import { ChildComponent } from './child/child.component';
import { DeficePipe } from './pipes/defices.pipe';
import { SocialService } from './services/socialService.service';
import { SociumComponent } from './socium/socium.component';
import { AppRoutingMobule } from './app-routing.module';
import { FamilyComponent } from './family/family.component';
import { FriendsComponent } from './friends/friends.component';

import { ErorrComponent } from './erorr/erorr.component';
import { HomeComponent } from './home/home.component';
import { JustPeopleComponent } from './just-people/just-people.component';
import { CloseFriendsComponent } from './close-friends/close-friends.component';

@NgModule({
  exports: [NumberComponent],
  declarations: [
    AppComponent,
    TitleComponent,
    NumberComponent,
    ChildComponent,
    DeficePipe,
    SociumComponent,
    FamilyComponent,
    FriendsComponent,

    ErorrComponent,
    HomeComponent,
    JustPeopleComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingMobule
  ],
  providers: [
    SocialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
