import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import createHttpError from 'http-errors';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import { Schema } from 'mongoose';
import Merchant, { IMerchant } from '../models/Merchant';

dotenv.config();
export interface IRequest extends Request {
    userId?: Schema.Types.ObjectId;
}
export const authenticateMerchant = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const userId = req.userId;

        // Check in DB
        const merchant: IMerchant | null = await Merchant.findOne({ userId });

        if (merchant) {
            return next();
        }
        next(createHttpError(401, 'Only merchants are allowed'));
    }
);
