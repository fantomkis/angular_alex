import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SocialService{
    counter = 0;
    increment() {
        this.counter = this.counter + 1;
    }
    decrement() {
        this.counter = this.counter - 1;
    }

}