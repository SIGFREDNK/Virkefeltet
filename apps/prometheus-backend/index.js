// IMPORTS
import app from './api/app.js';

// DEPENDENCIES
import mongoose from 'mongoose';
import { database } from '@virkefeltet/core';

// CONNECT TO DATABASE
database(
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    process.env.CLUSTER,
    process.env.DATABASE,
    mongoose
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`THE PROMETHEUS BACKEND SERVER IS RUNNING ON PORT ${PORT}`);
});
