import express from 'express';
import { login, resetPassword, signUp } from '../controller/auth';
const router = express.Router();

router.post('/login', login);
router.post('/signup', signUp);
router.post('/resetPassword', resetPassword);

export default router;
