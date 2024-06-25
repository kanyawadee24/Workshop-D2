// API - 3 Get All Movie
const getAllMovies = async (req, res, next) => {
  res.send('GET /api/movies');
};

// API - 4 Get Movie By ID

const getMovieById = async (req, res, next) => {
  res.send('GET /api/movies/:id');
};

// API - 9 Create Movie
const createMovie = async (req, res, next) => {
  res.send('POST /api/movies');
};

// API - 21 Update Movie
const updateMovie = async (req, res, next) => {
  res.send('PATCH /api/movies/:id');
};

// API - 15 Delete Movie (Soft Delete)
const deleteMovie = async (req, res, next) => {
  res.send('DELETE /api/movies/:id');
};

// API - 19 Restore Movie
const restoreMovie = async (req, res, next) => {
  res.send('PATCH /api/movies/:id/restore');
};

export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie, restoreMovie };
