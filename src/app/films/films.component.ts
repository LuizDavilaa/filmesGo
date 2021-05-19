import { FilmsService } from './films.service';
import { Film } from './film/film.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[];

  constructor(private FilmsService: FilmsService) { }

  ngOnInit(): void {
    this.films = this.FilmsService.films();
  }

}
