import express from 'express';
import { addProduct } from '../controller/merchant';
const router = express.Router();

router.post('/addProduct', addProduct);

export default router;
