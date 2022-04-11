// DEPENDENCIES
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoSanitize from 'express-mongo-sanitize';
import express, { json } from 'express';
import cookieParser from 'cookie-parser';

// IMPORTS
import authRouter from './routes/auth_routes.js';
import userRouter from './routes/user_routes.js';
import subscriptionRouter from './routes/subscription_routes.js';
import productRouter from './routes/product_routes.js';

// INITIATE EXPRESS
const app = express();

// MIDDLEWARES
app.use(json({ limit: '10kb' }));
app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cookieParser());

// ROUTES
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/subscriptions', subscriptionRouter);
app.use('/api/products', productRouter);

// CATCH UNKNOWN ROUTES
app.all('*', (req, res, next) => res.status(404).end('Siden blev ikke fundet'));

export default app;
