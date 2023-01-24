import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SocialService{
    counter = 0;
    social = {
        family: {
            ura: { name: 'Юра', agre: 44, prof: 'Bisnes', img: "../../assets/imeges/1.jpg" },
            dasha: { name: 'Даша', agre: 42, prof: 'Mam', img: '../../assets/imeges/2.jpg' },
            leonid: { name: 'Leonid', agre: 43, prof: 'Bisnes', img: '../../assets/imeges/3.jpg' },
            nata: { name: 'Natali', agre: 45, prof: 'Mam', img: '../../assets/imeges/4.jpg' },
            gMam: { name: 'Olga', agre: 65, prof: 'Not work', img: '../../assets/imeges/5.jpg' },
        },
            friends: {
            sem: { name: 'Sem', agre: 23, prof: 'Bisnes', img: "../../assets/imeges/6.jpg" },
            danik: { name: 'Daniel', agre: 24, prof: 'Bisnes', img: '../../assets/imeges/7.jpeg' },
            fil: { name: 'Filip', agre: 23, prof: 'Bisnes', img: '../../assets/imeges/8.jpeg' },
            illia: { name: 'Illa', agre: 20, prof: 'Bisnes', img: '../../assets/imeges/9.jpg' },
            urik: { name: 'Ura', agre: 17, prof: 'Not work', img: '../../assets/imeges/10.jpg' },
        },

    }
    
    increment() {  
        this.counter = this.counter + 1;
        console.log(this.counter )
    }
    decrement() {
        this.counter = this.counter - 1;
    }



}