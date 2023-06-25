'use client';
import Image from 'next/image';
import { FC, HTMLProps } from 'react';
import Text from './Text';
import { StarIcon } from './Icon';

interface CardProps extends HTMLProps<HTMLImageElement> {
    rating?: number;
    reviewCount?: number;
    price?: number;
    miniTitle?: string;
    tag?: boolean;
    type?: string;
}

const Card: FC<CardProps> = ({
    className,
    src,
    miniTitle,
    title,
    rating,
    reviewCount,
    price,
    tag,
    type,
}) => {
    return (
        <div
            className={`flex flex-col gap-4 flex-1 p-7 pt-10 bg-cardPrimary relative`}
        >
            {src && title && (
                <div
                    className={`relative ${
                        type == 'category' ? 'h-80' : 'h-40'
                    } ${className}`}
                >
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
            )}
            <Text variant="infoXs" className="mt-4">
                {miniTitle}
            </Text>
            <Text variant="productTitle">{title}</Text>
            {rating && reviewCount && price && (
                <>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <StarIcon rating={rating} />
                        </div>
                        <Text variant="infoXs">{reviewCount} reviews</Text>
                    </div>
                    <Text variant="price">${price}</Text>
                </>
            )}
        </div>
    );
};

export default Card;
