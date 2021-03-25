import {findAll, create, get, remove, update} from "./character.controller";
import express from 'express';
import {routeParamIdMiddleware} from "../common/route-param-id.middleware";

export const  router = express.Router();
router.get('/', findAll);
router.get('/:id', routeParamIdMiddleware, get);
router.post('/', create);
router.put('/:id', routeParamIdMiddleware, update);
router.delete('/:id', routeParamIdMiddleware, remove);
