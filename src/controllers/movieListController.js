// API - 5 Get All Movie List
const getAllMovieLists = async (req, res, next) => {
  res.send('GET /api/movie-lists');
};

// API - 6 Get Movie List By ID
const getMovieListById = async (req, res, next) => {
  res.send('GET /api/movie-lists/:id');
};

// API - 7 Create Movie List
const createMovieList = async (req, res, next) => {
  res.send('POST /api/movie-lists');
};

// API - 8 Update Movie List
const updateMovieList = async (req, res, next) => {
  res.send('PATCH /api/movie-lists/:id');
};

// API - 17 Delete Movie List (Soft Delete)
const deleteMovieList = async (req, res, next) => {
  res.send('DELETE /api/movie-lists/:id');
};

// API - 8  Add movie to movie list
const addMovieToMovieList = async (req, res, next) => {
  res.send('POST /api/movie-lists/:movieListId/movies/:movieId');
};

// API - 16  Remove movie from movie list
const removeMovieFromMovieList = async (req, res, next) => {
  res.send('DELETE /api/movie-lists/:movieListId/movies/:movieId');
};

export {
  getAllMovieLists,
  getMovieListById,
  createMovieList,
  updateMovieList,
  deleteMovieList,
  addMovieToMovieList,
  removeMovieFromMovieList,
};
