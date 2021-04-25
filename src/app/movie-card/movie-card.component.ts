import { Component, OnInit } from '@angular/core';
import {
  GetAllMoviesService,
  AddFavoriteMovieService,
  RemoveFavoriteMovieService,
} from '../fetch-api-data.service';
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiData2: AddFavoriteMovieService,
    public fetchApiData3: RemoveFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public buttonModule: MatButtonModule
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
}
