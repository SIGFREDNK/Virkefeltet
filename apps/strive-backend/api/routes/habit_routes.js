// IMPORTS
import { Router } from 'express';
import * as habitController from '../controllers/habit_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/me/streak-and-count/:id').get(habitController.getStreakAndCount);

router
    .route('/me')
    .get(habitController.getMyHabits)
    .post(habitController.createMyHabit);

router
    .route('/')
    .get(habitController.getAllHabits)
    .post(habitController.createHabit);
router
    .route('/:id')
    .get(habitController.getHabit)
    .delete(habitController.deleteHabit)
    .patch(habitController.updateHabit);

// EXPORT ROUTER
export default router;
