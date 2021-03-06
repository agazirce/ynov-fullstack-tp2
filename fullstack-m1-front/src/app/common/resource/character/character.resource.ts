import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ICharacterDto} from './character.dto';

@Injectable()
export class CharacterResource {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<ICharacterDto[]> {
    return this.http.get<ICharacterDto[]>('http://localhost:3000/characters');
  }

  findOne(id: number): Observable<ICharacterDto> {
    return this.http.get<ICharacterDto>('http://localhost:3000/characters/' + id);
  }

  create(character: ICharacterDto): Observable<ICharacterDto> {
    return this.http.post<ICharacterDto>('http://localhost:3000/characters', character);
  }

  remove(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/characters/' + id);
  }
}
