import { Request, Response, NextFunction } from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import { IRequest } from '../middleware/authenticateMerchant';
import User from '../models/User';
import Merchant, { IMerchant } from '../models/Merchant';
import createHttpError from 'http-errors';
import Product from '../models/Product';
import Cart, { ICart } from '../models/Cart';

// Become to Merchant
export const becomeMerchant = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { licenseId } = req.body;
        if (userId) {
            const merchant = new Merchant<IMerchant>({ userId, licenseId });
            const result = await merchant.save();
            return res.json(result);
        }
        next(createHttpError(401, 'Request not allowed'));
    }
);

// Get all products
export const getProducts = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { pageNumber, limit } = req.query;
        const query = Product.find()
            .sort({ createdAt: -1 })
            .skip((Number(pageNumber) - 1) * Number(limit))
            .limit(Number(limit));
        const products = await query.exec();
        res.json(products);
    }
);

// Get products by category with default sorting
export const getProductsByCategory = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.params);
        const { category, pageNumber, limit } = req.query;
        console.log(category);
        const query = Product.find({ category: category })
            .sort({ createdAt: -1 })
            .skip((Number(pageNumber) - 1) * Number(limit))
            .limit(Number(limit));
        const products = await query.exec();
        res.json(products);
    }
);

// Add to cart
export const updateCart = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        const { productId, quantity } = req.body;
        if (userId) {
            if (quantity == 0) {
                await Cart.findOneAndDelete({ userId, productId });
                return res.json({
                    status: 'success',
                    message: 'Product removed',
                });
            }
            const updateCart = await Cart.findOneAndUpdate(
                { productId, userId },
                { $inc: { quantity } },
                { new: true }
            );
            if (updateCart) {
                return res.json(updateCart);
            }
            const cart = new Cart<ICart>({ productId, userId, quantity });
            const result = await cart.save();
            return res.json(result);
        }
        next(createHttpError(404, 'User not found'));
    }
);

// View Cart
export const viewCart = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;
        if (userId) {
            const cart = await Cart.aggregate([
                {
                    $lookup: {
                        from: 'products',
                        localField: 'productId',
                        foreignField: '_id',
                        as: 'productData',
                    },
                },
            ]);
            return res.json(cart);
        }
        next(createHttpError(404, 'User not found'));
    }
);
// Add to wishList
// Remove from wishlist
// Product rating
// Product Reviews
