import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'jk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Ready to laugh?';
  joke: any;
  constructor(private jokeService: JokeService) { }
  ngOnInit() {
    this.getRandomJoke();
  }

  private getRandomJoke() {
    this.jokeService.getRandomJoke()
      .subscribe(joke => this.joke = joke);
  }

}
