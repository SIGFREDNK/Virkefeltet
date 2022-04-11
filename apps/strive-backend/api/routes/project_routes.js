// IMPORTS
import { Router } from 'express';
import * as projectController from '../controllers/project_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router.route('/me').get(projectController.getMyProjects);

router
    .route('/')
    .get(projectController.getAllProjects)
    .post(projectController.createProject);
router
    .route('/:id')
    .get(projectController.getProject)
    .delete(projectController.deleteProject)
    .patch(projectController.updateProject);

// EXPORT ROUTER
export default router;
