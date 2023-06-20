import express from 'express';
import bodyParser from 'body-parser';

// Db Connection
import connectDB from './utils/db';

// Routes
import auth from './routes/auth';
import { errorHandler } from './controller/errorHandler';
import { authenticate } from './utils/authenticate';

const app = express();

// PORT
const PORT = 5000;

// middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authenticate, auth);
app.use(errorHandler);
// Server listening on port 5000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Listening on Port ${PORT}`);
        });
    })
    .catch(console.log);
