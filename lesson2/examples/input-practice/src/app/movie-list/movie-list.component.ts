import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   //declare a variable then use ngIf
   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle === ''){
         errorMsg = 'Please enter a movie title.';
      }
       else if (this.movies.includes(newTitle)) {
         errorMsg = `${newTitle} is already in your movie list.`;
      }      
      else if (newTitle === "secret") {
         errorMsg = "You found the secret";
      }
       else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
}