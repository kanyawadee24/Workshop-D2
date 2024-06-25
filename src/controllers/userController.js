import userService from "../services/userService.js";

// API - 1 Get All Users
const getAllUsers = async (req, res, next) => {
  const users = await userService.getUsers();
  res.status(200).json({ message: "All Users", data: users });
};

// API - 2 Get User By ID
const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getUserById(Number(id));
  res.status(200).json({ message: 'Get User By ID', data: user });
};

// API - 14 Delete User By ID (Soft Delete)
const deleteUserById = async (req, res, next) => {
  res.send("DELETE /api/users/:id");
};

export { getAllUsers, getUserById, deleteUserById };
