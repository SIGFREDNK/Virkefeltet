// IMPORTS
import { Router } from 'express';
import * as invoiceController from '../controllers/invoice_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(invoiceController.getAllInvoices)
    .post(invoiceController.createInvoice);
router
    .route('/:id')
    .get(invoiceController.getInvoice)
    .delete(invoiceController.deleteInvoice)
    .patch(invoiceController.updateInvoice);

// EXPORT ROUTER
export default router;
