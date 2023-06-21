import { Schema, model } from 'mongoose';
const productCategories = [
    'Clothes',
    'Consumables',
    'Jewellery',
    'Home appliance',
] as const;

export interface IProduct {
    name: String;
    category: (typeof productCategories)[number];
    description: String;
    price: Number;
    imageUrl: String;
    userId: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            required: [true, 'Product Name is required'],
            maxlength: 30,
        },
        category: {
            type: String,
            required: [true, 'Product category is required'],
            enum: productCategories,
        },
        description: {
            type: String,
            required: [true, 'Product Description is required'],
            maxlength: 100,
        },
        imageUrl: {
            type: String,
            required: [true, 'Image is required'],
        },
        price: {
            type: Number,
            required: [true, 'Product Price is required'],
            min: 0,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user', // Reference to the User model
            required: [true, 'User ID is required'],
        },
    },
    { timestamps: true }
);

const Product = model<IProduct>('product', productSchema);

export default Product;
