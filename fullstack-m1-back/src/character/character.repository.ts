import {ICharacter, Character} from './character.model';
import {AbstractRepository} from "../common/abstract.repository";

class CharacterRepository extends AbstractRepository<ICharacter> {

  protected modelClass = Character;

}

export const characterRepository = new CharacterRepository();
