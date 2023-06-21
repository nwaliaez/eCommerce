import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import User, { IUser } from '../models/User';
import { Schema } from 'mongoose';

dotenv.config();
export interface IRequest extends Request {
    userId?: Schema.Types.ObjectId;
}
export const authenticate = asyncErrorHandler(
    async (req: IRequest, res: Response, next: NextFunction) => {
        const token = req.cookies.ezToken;
        if (token) {
            const userData = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
                _id: Schema.Types.ObjectId;
            };
            // Check in DB
            const user: IUser | null = await User.findById(userData._id);
            if (user) {
                req.userId = userData._id;
                return next();
            }
            next(createHttpError(401, 'Only merchants are allowed'));
        }
    }
);
