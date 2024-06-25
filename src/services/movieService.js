import db from '../model/prisma-client.js';

// TREAT THIS FILE LIKE REPOSITORY

const movieService = {
  async createMovie(data) {
    return db.movie.create({ data });
  },

  async getMovies() {
    return db.movie.findMany();
  },

  async getMovieById(id) {
    return db.movie.findUnique({ where: { id } });
  },

  async updateMovie(id, data) {
    return db.movie.update({ where: { id }, data });
  },

  async deleteMovie(id) {
    return db.movie.delete({ where: { id } });
  },
};

export default movieService;
