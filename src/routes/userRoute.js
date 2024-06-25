import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// API - 1 Get All Users
router.get('/', userController.getAllUsers);

// API - 2 Get User By ID
router.get('/:id', userController.getUserById);

// API - 14 Delete User By ID (Soft Delete)
router.delete('/:id', userController.deleteUserById);

export default router;
