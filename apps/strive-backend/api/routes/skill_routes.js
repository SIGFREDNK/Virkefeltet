// IMPORTS
import { Router } from 'express';
import * as skillController from '../controllers/skill_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/me').get(skillController.getMySkills);

router
    .route('/')
    .get(skillController.getAllSkills)
    .post(skillController.createSkill);
router
    .route('/:id')
    .get(skillController.getSkill)
    .delete(skillController.deleteSkill)
    .patch(skillController.updateSkill);

// EXPORT ROUTER
export default router;
