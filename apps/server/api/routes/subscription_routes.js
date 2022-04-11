// IMPORTS
import { Router } from 'express';
import * as subscriptionController from '../controllers/subscription_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(subscriptionController.getAllSubscriptions)
    .post(subscriptionController.createSubscription);
router
    .route('/:id')
    .get(subscriptionController.getSubscription)
    .delete(subscriptionController.deleteSubscription)
    .patch(subscriptionController.updateSubscription);

// EXPORT ROUTER
export default router;
