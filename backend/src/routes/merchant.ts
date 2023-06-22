import express from 'express';
import { addProduct, deleteProduct, getProducts } from '../controller/merchant';
const router = express.Router();

router.get('/getProducts', getProducts);
router.post('/addProduct', addProduct);
router.post('/deleteProduct', deleteProduct);

export default router;
