import moment from 'moment';
import { ICharacter, ICharacterDto } from './character.model';
import {AbstractMapper} from "../common/abstract.mapper";

class CharacterMapper extends AbstractMapper<ICharacterDto, ICharacter>{

    modelToDto(model: ICharacter): ICharacterDto {
        return {
            id: model.id,
            firstName: model.firstName,
            lastName: model.lastName,
            birthYear: model.birthYear,
            age: moment().year() - model.birthYear
        };
    }

    dtoToModel(dto: ICharacterDto): ICharacter {
        return {
            id: dto.id,
            firstName: dto.firstName,
            lastName: dto.lastName,
            birthYear: moment().subtract(dto.age, 'year').year()
        };
    }
}

export const characterMapper = new CharacterMapper();
