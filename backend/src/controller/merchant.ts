import { Request, Response, NextFunction } from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import Product, { IProduct } from '../models/Product';
import { IRequest } from '../middleware/authenticateMerchant';
import createHttpError from 'http-errors';
import uploadImage from '../utils/uploadImage';
import { v4 as uuidv4 } from 'uuid';

// Add Product
export const addProduct = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { name, category, description, price, base64Image } = req.body;
        const imageId = uuidv4().split('-')[0];

        const imageUrl = await uploadImage(base64Image, imageId);
        if (typeof imageUrl != 'string') {
            return next(createHttpError(500, 'Unknow error occured'));
        }
        if (userId) {
            const product = new Product<IProduct>({
                name,
                category,
                description,
                price,
                imageUrl,
                userId,
            });
            const result = await product.save();
            return res.json(result);
        }
        next(createHttpError(401, 'Request not allowed'));
    }
);

// Delete product
export const deleteProduct = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { productId } = req.body;
        if (userId) {
            const product = Product.findOneAndDelete({
                _id: productId,
                userId: userId,
            });
            const deletedProduct = await product.exec();
            if (deletedProduct) {
                res.json({ status: 'success', message: 'Product deleted' });
            } else {
                next(createHttpError(404, 'Product not found'));
            }
        }
    }
);

// Get Merchant Products
export const getProducts = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { pageNumber, limit } = req.params;
        const query = Product.find({ userId })
            .sort({ createdAt: -1 })
            .skip((Number(pageNumber) - 1) * Number(limit))
            .limit(Number(limit));
        const products = await query.exec();
        res.json(products);
    }
);

//TODO: Update Product
