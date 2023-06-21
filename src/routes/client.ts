import express from 'express';
import { becomeMerchant } from '../controller/client';
const router = express.Router();

router.post('/becomeMerchant', becomeMerchant);

export default router;
