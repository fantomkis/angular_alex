import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { CloseFriendsComponent } from "./close-friends/close-friends.component";
import { ErorrComponent } from "./erorr/erorr.component";
import { FamilyComponent } from "./family/family.component";
import { FriendsComponent } from "./friends/friends.component";
import { HomeComponent } from "./home/home.component";
import { JustPeopleComponent } from "./just-people/just-people.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'family', component: FamilyComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'just-people', component: JustPeopleComponent },
    { path: 'closee-friends', component: CloseFriendsComponent },
    {path: 'erorr', component: ErorrComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingMobule {

}