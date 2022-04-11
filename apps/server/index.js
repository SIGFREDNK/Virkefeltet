// DEPENDENCIES
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { database } from '@virkefeltet/core';

// IMPORTS
import app from './api/app.js';

// LOAD ENVIRONMENT VARIABLES
config();

// CONNECT TO DATABASE
database(
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    process.env.CLUSTER,
    process.env.DATABASE,
    mongoose
);

// START SERVER
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`VIRKEFELTET SERVER IS RUNNING ON PORT ${PORT}`);
});
