import express from 'express';
import * as movieListController from '../controllers/movieListController.js';

const router = express.Router();

// API - 5 Get All Movie List
router.get('/', movieListController.getAllMovieLists);

// API - 6 Get Movie List By ID
router.get('/:id', movieListController.getMovieListById);

// API - 7 Create Movie List
router.post('/', movieListController.createMovieList);

// API - 8 Update Movie List
router.patch('/:id', movieListController.updateMovieList);

// API - 17 Delete Movie List (Soft Delete)
router.delete('/:id', movieListController.deleteMovieList);

// API - 8  Add movie to movie list
router.post('/:movieListId/movies/:movieId', movieListController.addMovieToMovieList);

// API - 16  Remove movie from movie list
router.delete('/:movieListId/movies/:movieId', movieListController.removeMovieFromMovieList);

export default router;
