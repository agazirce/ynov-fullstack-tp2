import {ICharacter, ICharacterDto} from './character.model';
import {characterRepository} from "./character.repository";
import {characterMapper} from "./character.mapper";
import {itemErrorHandler} from "../common/error/error.mapper";

export const findAll = (): Promise<ICharacter[]> => {
  return characterRepository.findAll()
  .then(characters => characterMapper.modelsToDtos(characters));
};

export const get = (id: number): Promise<ICharacterDto> => {
  return characterRepository.get(id)
      .then(characterMapper.modelToDto)
      .catch(itemErrorHandler(id));
};

export const create = (dto: ICharacterDto): Promise<ICharacterDto> => {
  const character = characterMapper.dtoToModel(dto);
  return characterRepository.create(character)
      .then(characterMapper.modelToDto);
};

export const update = (id: number, dto: ICharacterDto): Promise<Number> => {
  const character = characterMapper.dtoToModel(dto);
  return characterRepository.update(id, character)
      .then(countLinesUpdated => countLinesUpdated)
      .catch(itemErrorHandler(id));
};

export const remove = (id: number): Promise<Number> => {
  return characterRepository.remove(id)
      .then(countLinesDelete => countLinesDelete)
      .catch(itemErrorHandler(id));
};
