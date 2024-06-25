import db from '../model/prisma-client.js';

// TREAT THIS FILE LIKE REPOSITORY

const movieListService = {
  async createMovieList(data) {
    return db.movieList.create({ data });
  },

  async getMovieLists() {
    return db.movieList.findMany();
  },

  async getMovieListById(id) {
    return db.movieList.findUnique({ where: { id } });
  },

  async updateMovieList(id, data) {
    return db.movieList.update({ where: { id }, data });
  },

  async deleteMovieList(id) {
    return db.movieList.delete({ where: { id } });
  },
};

export default movieListService;
