// DEPENDENCIES
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import authentication from '@virkefeltet/auth';

// LOAD ENVIRONMENT VARIABLES
dotenv.config();

// IMPORTS

// -- routes --
import businessRouter from './routes/business_routes.js';
import customerRouter from './routes/customer_routes.js';
import employeeRouter from './routes/employee_routes.js';
import invoiceRouter from './routes/invoice_routes.js';
import wareRouter from './routes/ware_routes.js';
import recordRouter from './routes/record_routes.js';
import supplierRouter from './routes/supplier_routes.js';

// -- middlewares --
import * as businessMiddlewares from './middlewares/business_middlewares.js';

// INITIATE EXPRESS
const app = express();

// INITIATE AUTHENTICATION
const auth = authentication(process.env.JWT_SECRET);

// MIDDLEWARES
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(cookieParser());
app.use(auth.requireAuth);
app.use(auth.requireSubscription('Prometheus'));
app.use(businessMiddlewares.getBusinesses);

// ROUTES
app.use('/api/businesses', businessRouter);
app.use('/api/customers', customerRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/invoices', invoiceRouter);
app.use('/api/wares', wareRouter);
app.use('/api/records', recordRouter);
app.use('/api/suppliers', supplierRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'The Prometheus Backend Is Running!'
    });
});

export default app;
