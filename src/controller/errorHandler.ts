import { Request, Response, NextFunction } from 'express';
import { isHttpError } from 'http-errors';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = 500;
    let errorMessage = 'Server Error';
    if (isHttpError(err)) {
        statusCode = err.status;
        errorMessage = err.message;
    }
    res.status(statusCode).json({ status: 'failed', message: errorMessage });
};
