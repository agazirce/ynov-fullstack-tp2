import {sequelize} from "../common/orm/db-connect";

export interface IUser {
    id: number;
    email: string;
    password: string;
}

const { DataTypes, Model } = require('sequelize');

export class User extends Model implements IUser{
    id: number;
    email: string;
    password: string;
}

User.init({
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});
