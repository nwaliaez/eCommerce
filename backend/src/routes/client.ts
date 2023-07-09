import express from 'express';
import {
    becomeMerchant,
    cartCount,
    getProducts,
    getProductsByCategory,
    search,
    updateCart,
    viewCart,
} from '../controller/client';
const router = express.Router();

router.get('/getProducts', getProducts);
router.get('/getProductsByCategory', getProductsByCategory);
router.get('/viewCart', viewCart);
router.get('/search/:searchTerm', search);
router.get('/cartCount', cartCount);
router.post('/becomeMerchant', becomeMerchant);
router.post('/updateCart', updateCart);

export default router;
