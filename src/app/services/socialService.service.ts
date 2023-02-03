import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})

    
 interface social_list {
    family: {
        name: string;
        age: number;
        prof: string;
        img: string;
    }[],
    friends: {
        name: string;
        age: number;
        prof: string;
        img: string;
    }[],
     closeFriends: {
        name: string;
        age: number;
        prof: string;
        img: string;
     }[],
     justPeople: {
        name: string;
        age: number;
        prof: string;
        img: string;
    }[],
}
   
export class SocialService{
    
    counter = 0;
    
    social:social_list = {
       family: [
            { name: 'Юра', age: 44, prof: 'Bisnes', img: "../../assets/imeges/1.jpg" },
            { name: 'Даша', age: 42, prof: 'Mam', img: '../../assets/imeges/2.jpg' },
            { name: 'Leonid', age: 43, prof: 'Bisnes', img: '../../assets/imeges/3.jpg' },
            { name: 'Natali', age: 45, prof: 'Mam', img: '../../assets/imeges/4.jpg' },
            { name: 'Olga', age: 65, prof: 'Not work', img: '../../assets/imeges/5.jpg' },
        ],
        friends: [
            { name: 'Sem', age: 23, prof: 'Bisnes', img: "../../assets/imeges/6.jpg" },
            { name: 'Daniel', age: 24, prof: 'Bisnes', img: '../../assets/imeges/7.jpeg' },
            { name: 'Filip', age: 23, prof: 'Bisnes', img: '../../assets/imeges/8.jpeg' },
            { name: 'Illa', age: 20, prof: 'Bisnes', img: '../../assets/imeges/9.jpg' },
            { name: 'Ura', age: 17, prof: 'Not work', img: '../../assets/imeges/10.jpg' },
        ],
         closeFriends: [
             { name: 'Illa', age: 20, prof: 'Bisnes', img: '../../assets/imeges/9.jpg' },
                 { name: 'Ura', age: 17, prof: 'Not work', img: '../../assets/imeges/10.jpg' },
            { name: 'Daniel', age: 24, prof: 'Bisnes', img: '../../assets/imeges/7.jpeg' },
            { name: 'Filip', age: 23, prof: 'Bisnes', img: '../../assets/imeges/8.jpeg' },
         
             { name: 'Sem', age: 23, prof: 'Bisnes', img: "../../assets/imeges/6.jpg" },
        ],
        justPeople: [
            { name: 'Ivan', age: 30, prof: 'Man', img: "../../assets/imeges/11.jpg" },
            { name: 'Alex', age: 35, prof: 'Ticher', img: '../../assets/imeges/12.jpg' },
            { name: 'Sergi', age: 24, prof: 'Bisnes', img: '../../assets/imeges/13.jpg' },
            { name: 'Lubamir', age: 22, prof: 'Student', img: '../../assets/imeges/14.jpg' },
            { name: 'Vetali', age: 24, prof: 'Not work', img: '../../assets/imeges/15.jpg' },
            ],

    }
 


}