import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { encPassword, verifyPassword } from '../utils/password';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Merchant from '../models/Merchant';

dotenv.config();

// Signup
export const signUp = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body;
        const hashedPassword = await encPassword(password);
        const user = new User({ name, email, password: hashedPassword });
        const result = await user.save();
        const resultObject = result.toObject();
        delete resultObject.password;
        const token = jwt.sign(resultObject, process.env.JWT_SECRET_KEY!);
        res.cookie('cookieName', '1234', { maxAge: 900000, httpOnly: true });
        res.json(resultObject);
    }
);

// Login
export const login = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        const user: IUser | null = await User.findOne({
            email: email.toLowerCase(),
        }).select('+password');

        if (user) {
            const hashedPassword = user.password as string;
            const isMatch = await verifyPassword(password, hashedPassword);
            if (isMatch) {
                const result = user.toObject();
                const checkMerchant = await Merchant.findOne({
                    userId: result._id,
                });
                const licenseId = checkMerchant?.licenseId || 0;

                delete result.password;
                const token = jwt.sign(result, process.env.JWT_SECRET_KEY!);
                res.cookie('ezToken', token);
                res.json({ status: 'Success', licenseId, ...result, token });
            } else {
                next(createHttpError(404, 'User not found'));
            }
        } else {
            next(createHttpError(404, 'User not found'));
        }
    }
);

// Reset password
export const resetPassword = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;
        const hashedPassword = await encPassword(password);

        const user: IUser | null = await User.findOneAndUpdate(
            {
                email: email.toLowerCase(),
            },
            { password: hashedPassword },
            {
                new: true,
            }
        );
        if (user) {
            res.json({ status: 'Success', message: 'Password changed' });
        } else {
            next(createHttpError(404, 'User not found'));
        }
    }
);
