import express from 'express';
import { router as routerCharacters } from './character/character.router';
import { router as routerMovies } from './movie/movie.router';
import {routeNotFoundMiddleware} from "./common/route-not-found.middleware";
import {authRouter} from "./auth/auth.router";

export  const router = express.Router();
router.use('/movies', routerMovies);
router.use('/characters', routerCharacters);
router.use('/auth', authRouter);
router.use(routeNotFoundMiddleware);
