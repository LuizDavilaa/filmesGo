import { Film } from './film/film.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmes: Film[] = [
    {
      id: "A vida é bela",
      name: "A vida é bela",
      category: "Gênero: Guerra/Romance",
      duration: "Duração: 2h 2min",
      rating: 4.9,
      year: "Ano: 1997",
      classification: "Classificação: 16",
      director: "Diretor: Roberto Benigni",
      language: "Idioma: Italiano/Inglês/Alemão",
      imagePath: "assets/img/films/vida.jpg"
    },
    {
      id: "La La Land",
      name: "La La Land: Cantando Estações",
      category: "Gênero: Musical",
      duration: "Duração: 2h 8min",
      rating: 4.5,
      year: "Ano: 2016",
      classification: "Classificação: 16",
      director: "Diretor: Damien Chazelle",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/land.jpg"
    },
    {
      id: "Rambo",
      name: "Rambo: First Blood",
      category: "Gênero: Ação/Aventura",
      duration: "Duração: 1h 33min",
      rating: 4.7,
      year: "Ano: 1982",
      classification: "Classificação: 16",
      director: "Diretor: Ted Kotcheff",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/rambo.jpg"
    },
    {
      id: "Star Wars",
      name: "Star Wars: Uma Nova Esperança",
      category: "Gênero: Ficção Científica",
      duration: "Duração: 2h 5min",
      rating: 4.6,
      year: "Ano: 1977",
      classification: "Classificação: 16",
      director: "Diretor: George Lucas",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/wars.jpg"
    },
    {
      id: "V de Vingança",
      name: "V de Vingança",
      category: "Gênero: Ação/Thriller",
      duration: "Duração: 2h 13min",
      rating: 4.8,
      year: "Ano: 2005",
      classification: "Classificação: 16",
      director: "Diretor: James McTeigue",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/v.jpg"
    },
    {
      id: "Parasita",
      name: "Parasita",
      category: "Gênero: Thriller/Comédia",
      duration: "Duração: 2h 12min",
      rating: 4.6,
      year: "Ano: 2019",
      classification: "Classificação: 16",
      director: "Diretor: Bong Joon-ho",
      language: "Idioma: Coreano/Inglês",
      imagePath: "assets/img/films/parasita.jpg"
    },
    {
      id: "O Rei do Show",
      name: "O Rei do Show",
      category: "Gênero: Musical/Drama",
      duration: "Duração: 1h 46min",
      rating: 4.8,
      year: "Ano: 2017",
      classification: "Classificação: Livre",
      director: "Diretor: Michael Gracey",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/rei.jpg"
    },
    {
      id: "Quem quer ser um milionário?",
      name: "Quem quer ser um milionário?",
      category: "Gênero: Drama/Romance",
      duration: "Duração: 2h 3min",
      rating: 4.7,
      year: "Ano: 2008",
      classification: "Classificação: 16",
      director: "Diretor: Danny Boyle",
      language: "Idioma: Inglês",
      imagePath: "assets/img/films/milionario.jpg"
    },
    {
      id: "Minha mãe é uma peça",
      name: "Minha mãe é uma peça",
      category: "Gênero: Comédia",
      duration: "Duração: 1h 24min",
      rating: 4.9,
      year: "Ano: 2013",
      classification: "Classificação: 12",
      director: "Diretor: André Pellenz",
      language: "Idioma: Português",
      imagePath: "assets/img/films/mae.jpg"
    },
    {
      id: "O Auto da Compadecida",
      name: "O Auto da Compadecida",
      category: "Gênero: Comédia/Aventura",
      duration: "Duração: 2h 3min",
      rating: 4.9,
      year: "Ano: 2000",
      classification: "Classificação: Livre",
      director: "Diretor: Guel Arraes",
      language: "Idioma: Português",
      imagePath: "assets/img/films/compadecida.jpg"
    },
  ]

  constructor() { }

  films() : Film[]{
    return this.filmes;
  }

}
