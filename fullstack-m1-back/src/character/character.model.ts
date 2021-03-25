import {sequelize} from "../common/orm/db-connect";

export interface ICharacter {
  id: number;
  firstName: string;
  lastName: string;
  birthYear: number;
}

export interface ICharacterDto extends ICharacter {
  age: number;
}


const { DataTypes, Model } = require('sequelize');

export class Character extends Model implements ICharacter{
  id: number;
  firstName: string;
  lastName: string;
  birthYear: number;
}

Character.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthYear: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Character' // We need to choose the model name
});
