import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { encPassword, verifyPassword } from '../utils/password';
import asyncErrorHandler from '../utils/asyncErrorHandler';

export const signUp = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body;
        const hashedPassword = await encPassword(password);
        const user = new User({ name, email, password: hashedPassword });
        const result = await user.save();
        const resultObject = result.toObject();
        delete resultObject.password;
        res.json(resultObject);
    }
);

export const login = asyncErrorHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        const user: IUser | null = await User.findOne({
            email: email.toLowerCase(),
        }).select('password');
        if (user) {
            // User found
            const hashedPassword = user.password as string;
            const isMatch = await verifyPassword(password, hashedPassword);
            if (isMatch) {
                res.json({ status: 'Success', message: 'LoggedIn' });
            } else {
                res.status(404).json({
                    status: 'Failed',
                    message: 'User not found',
                });
            }
        } else {
            // User not found
            res.status(404).json({
                status: 'Failed',
                message: 'User not found',
            });
        }
    }
);
