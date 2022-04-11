// IMPORTS
import { Router } from 'express';
import { signup, login, logout } from '../controllers/auth_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);

// EXPORT ROUTER
export default router;
