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

  getItems(): Observable<ICharacter[]> {
    return this.characterResource.findAll()
      .pipe(
        map((dtos: ICharacterDto[]) => {
          return dtos.map(dto => {
            return {
              firstName: dto.firstName,
              lastName: dto.lastName,
              birthYear: moment().subtract(dto.age, 'year').year()
            };
          });
        })
      );
  }

  saveItem(character: ICharacter): Observable<ICharacter> {
    const dto = {
      firstName: character.firstName,
      lastName: character.lastName,
      age: moment().year() - character.birthYear
    };
    return this.characterResource.create(dto)
      .pipe(
        map(() => {
          return {
            firstName: dto.firstName,
            lastName: dto.lastName,
            birthYear: moment().subtract(dto.age, 'year').year()
          };
        })
      );
  }
}
