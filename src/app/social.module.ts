import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { CloseFriendsComponent } from "./close-friends/close-friends.component";

import { FamilyComponent } from "./family/family.component";
import { FriendsComponent } from "./friends/friends.component";
import { HomeComponent } from "./home/home.component";
import { JustPeopleComponent } from "./just-people/just-people.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'family', component: FamilyComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'just-people', component: JustPeopleComponent },
    { path: 'closee-friends', component: CloseFriendsComponent },
    {path: '**', component: PageNotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingMobule {

}