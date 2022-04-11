// IMPORTS
import { Router } from 'express';
import * as businessController from '../controllers/business_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(businessController.getAllBusinesses)
    .post(businessController.createBusiness);

router.route('/my-businesses').get(businessController.getUsersBusinesses);

router
    .route('/:id')
    .get(businessController.getBusiness)
    .delete(businessController.deleteBusiness)
    .patch(businessController.updateBusiness);

// EXPORT ROUTER
export default router;
