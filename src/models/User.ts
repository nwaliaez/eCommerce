import { Schema, model } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: [true, 'is required field'] },
    email: {
        type: String,
        required: [true, 'is required field'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'is required field'],
        select: false,
    },
});

const User = model<IUser>('User', userSchema);

export default User;
