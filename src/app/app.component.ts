import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quotes(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Quotes(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Quotes(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),

  ];

  
   
  
}
