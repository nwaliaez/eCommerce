import Image from 'next/image';
import { FC } from 'react';
import { Text } from './ui';

interface CartCardProps {
    productTitle: string;
    imageUrl: string;
    quantity: number;
    price: number;
}

const CartCard: FC<CartCardProps> = ({
    productTitle,
    imageUrl,
    price,
    quantity,
}) => {
    return (
        <div className="flex">
            <div className="flex flex-1 items-center">
                <div className="flex relative w-32 h-32">
                    <Image
                        src={imageUrl}
                        alt={productTitle}
                        fill
                        className="object-contain"
                    />
                </div>
                <Text variant="productTitle">{productTitle}</Text>
            </div>
            <div className="flex-1">{quantity}</div>
            <div className="flex-1">${(price * quantity).toLocaleString()}</div>
        </div>
    );
};

export default CartCard;
