import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Db Connection
import connectDB from './utils/db';

// Routes
import auth from './routes/auth';
import merchant from './routes/merchant';
import client from './routes/client';
import { errorHandler } from './middleware/errorHandler';
import { authorize } from './middleware/authorize';
import { authenticate } from './middleware/authenticate';
import { authenticateMerchant } from './middleware/authenticateMerchant';

const app = express();

// PORT
const PORT = 5000;

// middleware
app.use(
    cors({
        origin: '*',
    })
);
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authorize, auth);
app.use('/api/merchant', authenticate, authenticateMerchant, merchant);
app.use('/api/client', authenticate, client);

// Error handler
app.use(errorHandler);

// Server listening on port 5000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Listening on Port ${PORT}`);
        });
    })
    .catch(console.log);
