// API-10 : Register
const register = async (req, res, next) => {
  res.send('POST /api/auth/register');
};

// API-11 : Login
const login = async (req, res, next) => {
  res.send('POST /api/auth/login');
};

// API-12 : Get User
const getProfile = async (req, res, next) => {
  res.send('GET /api/auth/profile');
};

// API-13 : Update User Profile
const updateProfile = async (req, res, next) => {
  res.send('PATCH /api/auth/profile');
};

// API-14 : Delete User Profile
const deleteProfile = async (req, res, next) => {
  res.send('DELETE /api/auth/profile');
};

export { register, login, getProfile, updateProfile, deleteProfile };
