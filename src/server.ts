import express from 'express';
import bodyParser from 'body-parser';

// Db Connection
import connectDB from './utils/db';

// Routes
import auth from './routes/auth';

const app = express();

// PORT
const PORT = 5000;

// middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', auth);

// Server listening on port 5000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Listening on Port ${PORT}`);
        });
    })
    .catch(console.log);
