// IMPORTS
import { Router } from 'express';
import * as supplierController from '../controllers/supplier_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(supplierController.getAllSuppliers)
    .post(supplierController.createSupplier);
router
    .route('/:id')
    .get(supplierController.getSupplier)
    .delete(supplierController.deleteSupplier)
    .patch(supplierController.updateSupplier);

// EXPORT ROUTER
export default router;
