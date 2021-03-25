import {
    create as serviceCreate,
    findAll as serviceFindAll,
    get as serviceGet,
    remove as serviceRemove,
    update as serviceUpdate
} from "./movie.service";
import {ErrorType, IAppError} from "../common/error/error.model";
import {NextFunction, Request, Response} from "express";

export const findAll = (request: Request, response: Response, next: NextFunction): void => {
    serviceFindAll()
        .then(dtos => response.json(dtos))
        .catch(next);
};

export const get = (request: Request, response: Response, next: NextFunction): void => {
    const  id = parseInt(request.params.id);
    if(isNaN(id)) {
        const error: IAppError = { type: ErrorType.resourceIdFormat };
        next(error);
    } else {
        serviceGet(id)
            .then(dto => response.json(dto))
            .catch(next);
    }
};

export const create = (request: Request, response: Response, next: NextFunction): void => {
    serviceCreate(request.body).then(item => {
        response.status(201);
        response.json(item);
    }).catch(next);
}

export const update = (request: Request, response: Response, next: NextFunction): void => {
    const  id = parseInt(request.params.id);
    if(isNaN(id)) {
        const error: IAppError = { type: ErrorType.resourceIdFormat };
        next(error);
    } else {
        serviceUpdate(id, request.body)
            .then(() => response.sendStatus(204))
            .catch(next);
    }
};

export const remove = (request: Request, response: Response, next: NextFunction): void => {
    const  id = parseInt(request.params.id);
    if(isNaN(id)) {
        const error: IAppError = { type: ErrorType.resourceIdFormat };
        next(error);
    } else {
        serviceRemove(id)
            .then(() => response.sendStatus(204))
            .catch(next);
    }
};
