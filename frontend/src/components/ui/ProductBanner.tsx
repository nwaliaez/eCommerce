import { FC } from 'react';
import Text from './Text';
import { CircleRightArrow, RightArrow } from './Icon';
import Image from 'next/image';

interface ProductBannerProps {}

const ProductBanner: FC<ProductBannerProps> = ({}) => {
    return (
        <div className="flex flex-1 bg-cardSecondary">
            <div className="flex flex-col gap-4 p-10">
                <Text variant="titleXl">Comfy styles for her</Text>
                <Text variant="description">
                    Shop Amazon Fashion including clothing, shoes, jewellery,
                    watches, bags and more
                </Text>
                <Text variant="infoXs">
                    See more <RightArrow />
                </Text>
                <div className="flex items-center  gap-3">
                    <div>
                        <Image
                            src="/assets/images/bag.png"
                            alt="Bag"
                            height={0}
                            width={100}
                        />
                    </div>
                    <div>
                        <Text variant="titleSm">Top Handbags</Text>
                        <Text variant="infoXs">Big Sale 30%</Text>
                    </div>
                    <div className="text-secondary">
                        <CircleRightArrow />
                    </div>
                </div>
            </div>
            <div className="flex items-end">
                <Image
                    src="/assets/images/clothes1.png"
                    alt=""
                    height={0}
                    width={250}
                />
            </div>
        </div>
    );
};

export default ProductBanner;
