import {ErrorType, IAppError} from './error.model';
import {NextFunction, Request, Response} from 'express';

export  const errorMiddleware = (error: IAppError, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = getStatusCode(error);
    const message = getMessage(error);
    const type = getType(error);
    res.status(statusCode);
    res.json({ type, message });
}

const getStatusCode = (error: IAppError): number => {
    switch (error?.type) {
        case ErrorType.resourceIdFormat:
            return 400;
        case ErrorType.resourceIdNotFound:
        case ErrorType.resourceTypeNotFound:
            return 404;
        case ErrorType.unhandledError:
        default:
            return 500;
    }
};

const getMessage = (error: IAppError): string => {
    switch (error?.type) {
        case ErrorType.resourceIdFormat:
            return 'Resource id must be an integer';
        case ErrorType.resourceIdNotFound:
            return `Resource with id=${error.messageParam} does not exist`;
        case ErrorType.resourceTypeNotFound:
            return `Resource type ${error.messageParam} does not exist`;
        case ErrorType.unhandledError:
        default:
            return 'Unhandled error';

    }

};

const getType = (error: IAppError): ErrorType => {
    return error?.type || ErrorType.unhandledError;
};
