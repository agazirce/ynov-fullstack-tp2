import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMovie} from '../../../movie/movie.model';

@Injectable()
export class MovieResource {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('http://localhost:3000/movies');
  }

  create(movie: IMovie): Observable<IMovie> {
    return this.http.post<IMovie>('http://localhost:3000/movies', movie);
  }
}
