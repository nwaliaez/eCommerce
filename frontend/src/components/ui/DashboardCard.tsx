import Image from 'next/image';
import { FC, ImgHTMLAttributes } from 'react';
import { Remove } from './Icon';
import Text from './Text';
import Button from './Button';

interface DashboardCardProps extends ImgHTMLAttributes<HTMLImageElement> {
    title: string;
    src: string;
}

const DashboardCard: FC<DashboardCardProps> = ({ title, src }) => {
    return (
        <div className="flex flex-col gap-5 bg-cardLight rounded-md shadow-md p-5">
            <div className="flex justify-end">
                <Remove className="text-secondary hover:text-red-500 cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center rounded-full bg-red-500 h-28 w-28">
                    <Image
                        src={src}
                        alt={title}
                        height={100}
                        width={100}
                        className=" object-contain rounded-full"
                    />
                </div>
                <Text variant="price" className="mt-5">
                    {title}
                </Text>
                <Text variant="infoXs">Jan 20th, 2023</Text>
            </div>
            <div className="flex items-center justify-between">
                <Text variant="infoXs">100 left</Text>
                <Button variant="outline" title="View" />
            </div>
        </div>
    );
};

export default DashboardCard;
