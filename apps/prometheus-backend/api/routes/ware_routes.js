// IMPORTS
import { Router } from 'express';
import * as wareController from '../controllers/ware_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(wareController.getAllWares)
    .post(wareController.createWare);
router
    .route('/:id')
    .get(wareController.getWare)
    .delete(wareController.deleteWare)
    .patch(wareController.updateWare);

// EXPORT ROUTER
export default router;
