import express from 'express';
import {
    becomeMerchant,
    getProducts,
    getProductsByCategory,
    updateCart,
} from '../controller/client';
const router = express.Router();

router.get('/getProducts', getProducts);
router.get('/getProductsByCategory', getProductsByCategory);
router.post('/becomeMerchant', becomeMerchant);
router.post('/updateCart', updateCart);

export default router;
