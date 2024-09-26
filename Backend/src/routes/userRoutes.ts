// backend/routes/userRoutes.ts
import { Router } from 'express';
import {
    initializeUserTable,
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
} from '../controllers/userController';

const router: Router = Router();

router.post('/initialize', initializeUserTable); // Initializes user table
router.post('/create', createUser); // Create a new user
router.get('/users', getAllUsers); // Get all users
router.put('/users/:id', updateUser); // Update user by ID
router.delete('/users/:id', deleteUser); // Delete user by ID

export default router;
