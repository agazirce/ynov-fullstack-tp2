import{ IMovie } from './movie.model';
import {movieRepository} from "./movie.repository";
import {itemErrorHandler} from "../common/error/error.mapper";

export const findAll = (): Promise<IMovie[]> => {
  return movieRepository.findAll()
      .then(movies => movies);
};

export const get = (id: number): Promise<IMovie> => {
  return movieRepository.get(id)
      .then(movie => movie)
      .catch(itemErrorHandler(id));
};

export const create = (item: IMovie): Promise<IMovie> => {
  return movieRepository.create(item)
      .then(movie => movie);
};

export const update = (id: number, item: IMovie): Promise<Number> => {
  return movieRepository.update(id, item)
      .then(countLinesUpdated => countLinesUpdated)
      .catch(itemErrorHandler(id));
};

export const remove = (id: number): Promise<Number> => {
  return movieRepository.remove(id)
      .then(countLinesDelete => countLinesDelete)
      .catch(itemErrorHandler(id));
};
