import { Request, Response } from 'express';
import User from '../models/User';

export const signUp = async (req: Request, res: Response) => {
    const data = req.body;
    const user = new User({
        ...data,
    });
    const result = await user.save();
    res.json(result);
};
