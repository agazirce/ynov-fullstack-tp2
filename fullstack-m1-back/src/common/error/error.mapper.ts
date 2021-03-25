import { ErrorType } from './error.model';
import {PrimaryKeyError} from "./repository-error.models";
import {EmptyResultError} from "sequelize";

export const itemErrorHandler = id => error => {
    if (error instanceof PrimaryKeyError || error instanceof EmptyResultError) {
        return Promise.reject({ type: ErrorType.resourceIdNotFound, messageParam: id });
    }
    return Promise.reject(error);
};
