// IMPORTS
import { Router } from 'express';
import * as habitController from '../controllers/habit_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/me').get(habitController.getMyHabits);

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
