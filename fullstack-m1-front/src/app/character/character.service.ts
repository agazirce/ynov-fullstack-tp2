import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResource } from '../common/resource/character/character.resource';
import { ICharacter } from './character.model';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {ICharacterDto} from '../common/resource/character/character.dto';

@Injectable()
export class CharacterService {

  constructor(
    private characterResource: CharacterResource
  ) { }

  getAllItems(): Observable<ICharacter[]> {
    return this.characterResource.findAll()
      .pipe(
        map((dtos: ICharacterDto[]) => {
          return dtos.map(dto => {
            return {
              id: dto.id,
              firstName: dto.firstName,
              lastName: dto.lastName,
              birthYear: moment().subtract(dto.age, 'year').year()
            };
          });
        })
      );
  }

  getItem(id: number): Observable<ICharacter> {
    return this.characterResource.findOne(id)
      .pipe(
        map((dto: ICharacterDto) => {
          return {
            id: dto.id,
            firstName: dto.firstName,
            lastName: dto.lastName,
            birthYear: moment().subtract(dto.age, 'year').year()
          };
        })
      );
  }

  saveItem(character: ICharacterDto): Observable<ICharacter> {
    return this.characterResource.create(character)
      .pipe(
        map(() => {
          return {
            id: character.id,
            firstName: character.firstName,
            lastName: character.lastName,
            birthYear: moment().subtract(character.age, 'year').year()
          };
        })
      );
  }

  removeItem(id: number): Observable<any> {
    return this.characterResource.remove(id);
  }
}
