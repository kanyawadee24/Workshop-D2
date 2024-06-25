import { getReviewByIdAndMovieId } from '../controllers/reviewController.js';
import db from '../model/prisma-client.js';

// TREAT THIS FILE LIKE REPOSITORY

const reviewService = {
  async createReview(data) {
    return db.review.create({ data });
  },

  async getReviews() {
    return db.review.findMany();
  },

  async getReviewById(id) {
    return db.review.findUnique({ where: { id } });
  },

  async updateReview(id, data) {
    return db.review.update({ where: { id }, data });
  },

  async deleteReview(id) {
    return db.review.delete({ where: { id } });
  },

  // for API - 22 Get All Review By Movie ID
  async getReviewsByMovieId(movieId) {
    return db.review.findMany({ where: { movieId } });
  },

  // for API - 23 Get Review By ID and Movie ID
  async getReviewByIdAndMovieId(movieId, id) {
    return db.review.findFirst({ where: { id, movieId } });
  },
};

export default reviewService;
