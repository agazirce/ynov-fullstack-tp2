/*
 * Dto = ModelDto
 * M = Model
 */

export abstract class AbstractMapper<Dto, M> {

    abstract modelToDto(model: M): Dto;

    abstract dtoToModel(dto: Dto): M;

    modelsToDtos(models: M[]): Dto[] {
        return models.map(model => this.modelToDto(model));
    }

    dtosToModels(dtos: Dto[]): M[] {
        return dtos.map(dto => this.dtoToModel(dto));
    }
}
