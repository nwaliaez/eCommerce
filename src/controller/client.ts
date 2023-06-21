import { Request, Response, NextFunction } from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import { IRequest } from '../middleware/authenticateMerchant';
import User from '../models/User';
import Merchant, { IMerchant } from '../models/Merchant';
import createHttpError from 'http-errors';

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
