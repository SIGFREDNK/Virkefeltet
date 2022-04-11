// IMPORTS
import { Router } from 'express';
import * as productController from '../controllers/product_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);
router
    .route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProduct)
    .patch(productController.updateProduct);

// EXPORT ROUTER
export default router;
