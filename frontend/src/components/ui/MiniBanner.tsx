'use client';
import { FC, ImgHTMLAttributes } from 'react';
import { RightArrow } from './Icon';
import Image from 'next/image';
import Button from './Button';
import Text from './Text';

interface MiniBannerProps extends ImgHTMLAttributes<HTMLImageElement> {
    desc: string;
    actionButton?: boolean;
}

const MiniBanner: FC<MiniBannerProps> = ({
    title,
    desc,
    src,
    actionButton,
}) => {
    return (
        <div className="flex flex-1 bg-cardSecondary">
            <div className="flex flex-1 flex-col gap-3 p-5">
                <Text variant="productTitle">{title}</Text>
                <Text variant="description">{desc}</Text>
                <div>
                    {actionButton ? (
                        <Button variant="outline" />
                    ) : (
                        <Text variant="infoXs">
                            See more <RightArrow />
                        </Text>
                    )}
                </div>
            </div>
            <div className="flex relative flex-1 justify-end">
                {src && title && (
                    <Image
                        src={src}
                        className="object-cover"
                        alt={title}
                        fill
                    />
                )}
            </div>
        </div>
    );
};

export default MiniBanner;
