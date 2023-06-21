import { Request, Response, NextFunction } from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import Product, { IProduct } from '../models/Product';
import { IRequest } from '../middleware/authenticateMerchant';
import createHttpError from 'http-errors';

// Add Product
export const addProduct = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { name, category, description, price, imageUrl } = req.body;
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
