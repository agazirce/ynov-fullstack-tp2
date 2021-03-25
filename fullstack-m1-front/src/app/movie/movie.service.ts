import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IMovie} from './movie.model';
import {MovieResource} from '../common/resource/movie/movie.resource';

@Injectable()
export class MovieService {

  constructor(
    private movieResource: MovieResource
  ) { }

  getItems(): Observable<IMovie[]> {
    return this.movieResource.findAll();
  }

  saveItem(movie: IMovie): Observable<IMovie> {
    return this.movieResource.create(movie);
  }
}
