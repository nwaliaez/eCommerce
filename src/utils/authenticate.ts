import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import createHttpError from 'http-errors';

dotenv.config();

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authKey = req.headers.authorization;

    if (!authKey || authKey !== process.env.AUTHKEY) {
        return next(createHttpError(401, 'Unauthorized'));
    }
    next();
};
