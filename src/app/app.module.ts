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
import { AppRoutingMobule } from './social.module';
import { FamilyComponent } from './family/family.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { JustPeopleComponent } from './just-people/just-people.component';
import { CloseFriendsComponent } from './close-friends/close-friends.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    HomeComponent,
    JustPeopleComponent,
    PageNotFoundComponent,
    CloseFriendsComponent,
   
    
   
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
