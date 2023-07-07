import Image from 'next/image';
import { FC, ImgHTMLAttributes, useState } from 'react';
import { DotMenu } from './ui/Icon';
import { Text, Button } from './ui';
import Loader from '@/components/ui/Loader';

interface ProductCardProps extends ImgHTMLAttributes<HTMLImageElement> {
    title: string;
    src: string;
    productId: string;
    addToCart: (id: string) => void;
    date: string;
    price: number;
}

const ProductCard: FC<ProductCardProps> = ({
    title,
    productId,
    src,
    addToCart,
    date,
    price,
}) => {
    const [loader, setLoader] = useState<boolean>(false);
    const handleAddToCart = async () => {
        setLoader(true);
        await addToCart(productId);
        setLoader(false);
    };
    return (
        <div className="flex flex-col gap-5 bg-cardLight rounded-md shadow-md p-5">
            <div className="flex relative justify-end">
                <div className="group">
                    <DotMenu className=" text-secondary cursor-pointer" />
                    <ul className="hidden hoverNavLink group-hover:flex flex-col absolute rounded-md shadow bg-cardLight right-0 z-10">
                        <li>Add to Whishlist</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex relative justify-center items-center rounded-full h-28 w-28">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover rounded-full"
                    />
                </div>
                <Text variant="price" className="mt-5">
                    {title}
                </Text>
                <Text variant="infoXs">{date}</Text>
            </div>
            <div className="flex items-center justify-between">
                <Text variant="price">${price.toLocaleString()}</Text>
                {loader ? (
                    <Loader />
                ) : (
                    <Button
                        variant="outline"
                        onClick={handleAddToCart}
                        title="Add to Cart"
                    />
                )}
            </div>
        </div>
    );
};

export default ProductCard;
