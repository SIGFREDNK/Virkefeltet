// IMPORTS
import { Router } from 'express';
import * as customerController from '../controllers/customer_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createCustomer);
router
    .route('/:id')
    .get(customerController.getCustomer)
    .delete(customerController.deleteCustomer)
    .patch(customerController.updateCustomer);

// EXPORT ROUTER
export default router;
