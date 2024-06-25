import db from '../model/prisma-client.js';

// TREAT THIS FILE LIKE REPOSITORY

const userService = {
  async createUser(data) {
    return db.user.create({ data });
  },

  async getUsers() {
    return db.user.findMany();
  },

  async getUserById(id) {
    return db.user.findUnique({ where: { id } });
  },

  async getUserByEmail(email) {
    return db.user.findUnique({ where: { email } });
  },

  async updateUser(id, data) {
    return db.user.update({ where: { id }, data });
  },

  async deleteUser(id) {
    return db.user.delete({ where: { id } });
  },
};

export default userService;
