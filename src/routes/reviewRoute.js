import express from 'express';
import * as reviewController from '../controllers/reviewController.js';

const router = express.Router();

// API - 22 Get All Review By Movie ID
router.get('/:movieId', reviewController.getAllReviewsByMovieId);

// API - 23 Get Review By ID and Movie ID
router.get('/:movieId/:id', reviewController.getReviewByIdAndMovieId);

// API - 24 Create Review
router.post('/', reviewController.createReview);

// API - 25 Update Review
router.patch('/:id', reviewController.updateReview);

// API - 26 Delete Review
router.delete('/:id', reviewController.deleteReview);

export default router;
