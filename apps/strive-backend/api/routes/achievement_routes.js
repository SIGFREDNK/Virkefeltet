// IMPORTS
import { Router } from 'express';
import * as achievementController from '../controllers/achievement_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(achievementController.getAllAchievements)
    .post(achievementController.createAchievement);
router
    .route('/:id')
    .get(achievementController.getAchievement)
    .delete(achievementController.deleteAchievement)
    .patch(achievementController.updateAchievement);

// EXPORT ROUTER
export default router;
