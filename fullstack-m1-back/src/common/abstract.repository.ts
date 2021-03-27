/*
 * M = Model
 */

import {PrimaryKeyError} from './error/repository-error.models';

export abstract class AbstractRepository<M> {

    protected abstract modelClass;

    findAll(): Promise<M[]> {
        return this.modelClass.findAll();
    }

    get(id: number): Promise<M> {
        return this.modelClass.findByPk(id, {rejectOnEmpty: true}).then(item => item);
    }

    create(item: M): Promise<M> {
        return this.modelClass.create(item).then(item => item);
    }

    update(id: number, item: M): Promise<Number> {
        return this.modelClass.update(item, {
            where: {
                id: id
            }
        }).then(countLinesUpdated => {
            if (countLinesUpdated[0] > 0){
                return {lineUpdated: countLinesUpdated[0]};
            } else {
                throw new PrimaryKeyError();
            }
        })
    }

    remove(id: number): Promise<Number> {
        return this.modelClass.destroy({
            where: {
                id: id
            }
        }).then(countLinesDeleted => {
            if (countLinesDeleted > 0){
                return {lineDeleted: countLinesDeleted};
            } else {
                throw new PrimaryKeyError();
            }
        })
    }
}
