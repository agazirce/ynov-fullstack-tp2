import {sequelize} from "../common/orm/db-connect";

export interface IMovie {
    id: number;
    title: string;
    year: number;
  }

const { DataTypes, Model } = require('sequelize');

export class Movie extends Model implements IMovie{
    id: number;
    title: string;
    year: number;
}

Movie.init({
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Movie' // We need to choose the model name
});
