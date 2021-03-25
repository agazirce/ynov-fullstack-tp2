import {IMovie, Movie} from './movie.model';
import {AbstractRepository} from "../common/abstract.repository";

class MovieRepository extends AbstractRepository<IMovie> {
  protected modelClass = Movie;
}

export const movieRepository = new MovieRepository();
