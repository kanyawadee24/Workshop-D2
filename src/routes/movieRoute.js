import express from 'express';
import * as movieController from '../controllers/movieController.js';

const router = express.Router();

// API - 3 Get All Movie
router.get('/', movieController.getAllMovies);

// API - 4 Get Movie By ID
router.get('/:id', movieController.getMovieById);

// API - 9 Create Movie
router.post('/', movieController.createMovie);

// API - 21 Update Movie
router.patch('/:id', movieController.updateMovie);

// API - 15 Delete Movie (Soft Delete)
router.delete('/:id', movieController.deleteMovie);

// API - 19 Restore Movie
router.patch('/:id/restore', movieController.restoreMovie);

export default router;
