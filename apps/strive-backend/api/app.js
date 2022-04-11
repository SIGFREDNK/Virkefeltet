// DEPENDENCIES
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import authentication from '@virkefeltet/auth';

// LOAD ENVIRONMENT VARIABLES
dotenv.config();

// IMPORTS
import projectRouter from './routes/project_routes.js';
import taskRouter from './routes/task_routes.js';
import habitRouter from './routes/habit_routes.js';
import skillRouter from './routes/skill_routes.js';
import achievementRouter from './routes/achievement_routes.js';
import diaryRouter from './routes/diary_routes.js';

// INITIATE EXPRESS
const app = express();

// INITIATE AUTHENTICATION
const auth = authentication(process.env.JWT_SECRET);

// MIDDLEWARES
app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true
    })
);
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(cookieParser());
app.use(auth.requireAuth);
app.use(auth.requireSubscription('Strive'));

// ROUTES
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/habits', habitRouter);
app.use('/api/skills', skillRouter);
app.use('/api/achievements', achievementRouter);
app.use('/api/diary/', diaryRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'The Strive Backend Is Running!'
    });
});

export default app;
