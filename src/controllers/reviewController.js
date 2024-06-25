// API - 22 Get All Review By Movie ID
const getAllReviewsByMovieId = async (req, res, next) => {
  res.send('GET /api/reviews');
};

// API - 23 Get Review By ID and Movie ID
const getReviewByIdAndMovieId = async (req, res, next) => {
  res.send('GET /api/reviews/:id');
};

// API - 24 Create Review
const createReview = async (req, res, next) => {
  res.send('POST /api/reviews');
};

// API - 25 Update Review
const updateReview = async (req, res, next) => {
  res.send('PATCH /api/reviews/:id');
};

// API - 26 Delete Review
const deleteReview = async (req, res, next) => {
  res.send('DELETE /api/reviews/:id');
};

export {
  getAllReviewsByMovieId,
  getReviewByIdAndMovieId,
  createReview,
  updateReview,
  deleteReview,
};
