// IMPORTS
import { Router } from 'express';
import * as taskController from '../controllers/task_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/me')
    .get(taskController.getMyTasks)
    .post(taskController.createMyTask);

router
    .route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask);
router
    .route('/:id')
    .get(taskController.getTask)
    .delete(taskController.deleteTask)
    .patch(taskController.updateTask);

// EXPORT ROUTER
export default router;
