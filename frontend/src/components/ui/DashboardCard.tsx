import Image from 'next/image';
import { FC, HTMLAttributes, ImgHTMLAttributes } from 'react';
import { DotMenu } from './Icon';
import { Text, Button } from './';

interface DashboardCardProps extends ImgHTMLAttributes<HTMLImageElement> {
    title: string;
    src: string;
    productId: string;
    removeProducts: (id: string) => void;
    date: string;
}

const DashboardCard: FC<DashboardCardProps> = ({
    title,
    productId,
    src,
    removeProducts,
    date,
}) => {
    return (
        <div className="flex flex-col gap-5 bg-cardLight rounded-md shadow-md p-5">
            <div className="flex relative justify-end">
                <div className="group">
                    <DotMenu className=" text-secondary cursor-pointer" />
                    <ul className="hidden hoverNavLink group-hover:flex flex-col absolute rounded-md shadow bg-cardLight right-0 z-10">
                        <li>Edit</li>
                        <li>Add to Whishlist</li>
                        <li onClick={() => removeProducts(productId)}>
                            Remove
                        </li>
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
                <Text variant="infoXs">100 Left</Text>
                <Button variant="outline" title="View" />
            </div>
        </div>
    );
};

export default DashboardCard;
