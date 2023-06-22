import { Schema, model } from 'mongoose';

export interface IMerchant {
    userId: Schema.Types.ObjectId;
    licenseId: string;
}

const merchantSchema = new Schema<IMerchant>(
    {
        userId: {
            type: Schema.Types.ObjectId,
        },
        licenseId: {
            type: String,
            required: [true, 'License Id is required'],
        },
    },
    { timestamps: true }
);

const Merchant = model<IMerchant>('merchant', merchantSchema);

export default Merchant;
