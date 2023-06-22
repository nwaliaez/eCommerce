import { Schema, model } from 'mongoose';

export interface ICart {
    userId: Schema.Types.ObjectId;
    productId: Schema.Types.ObjectId;
    quantity: number;
}

const cartSchema = new Schema<ICart>({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: [true, 'Product id is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
});

const Cart = model<ICart>('cart', cartSchema);

export default Cart;
