import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quotes(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Quotes(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Quotes(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Quotes(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuotes(quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }


  
  constructor(){}

  ngOnInit(){
  }

}
