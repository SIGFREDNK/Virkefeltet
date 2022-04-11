// IMPORTS
import { Router } from 'express';
import * as employeeController from '../controllers/employee_controller.js';

// INITIATE ROUTER
const router = Router();

// ROUTES
router
    .route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createEmployee);
router
    .route('/:id')
    .get(employeeController.getEmployee)
    .delete(employeeController.deleteEmployee)
    .patch(employeeController.updateEmployee);

// EXPORT ROUTER
export default router;
