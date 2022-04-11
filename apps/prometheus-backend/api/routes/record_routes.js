// IMPORTS
import { Router } from 'express';
import * as recordController from '../controllers/record_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(recordController.getAllRecords)
    .post(recordController.createRecord);
router
    .route('/:id')
    .get(recordController.getRecord)
    .delete(recordController.deleteRecord)
    .patch(recordController.updateRecord);

// EXPORT ROUTER
export default router;
