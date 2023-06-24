'use client';
import { FC } from 'react';
import Button from './ui/Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Image from 'next/image';
import Heading from './ui/Heading';
import Text from './ui/Text';
import Badge from './ui/Badge';
import { StarIcon } from './ui/Icon';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
    return (
        <div className="flex p-20 gap-10 bg-cardPrimary mt-5">
            <div className="flex flex-col gap-4 flex-1 justify-center">
                <Heading
                    variant="heading1"
                    title="SHOP COMPUTERS & ACCESSORIES"
                />
                <Text variant={'description'} className="w-2/4">
                    Shop laptops, desktops, monitors, tablets, PC gaming, hard
                    drive and storage, accessories and more
                </Text>
                <Button variant="outline" size="medium" title="View more" />
            </div>
            <div className="relative flex flex-1 items-end h-72">
                <Badge
                    variant="round"
                    className="absolute flex -top-5 right-14 z-10"
                    title="30%"
                />
                <Image
                    src="/assets/images/real-headphones.png"
                    alt=""
                    className="absolute w-[35rem] -right-20 -top-16"
                    height={300}
                    width={300}
                />
                <div className="flex bg-white rounded-lg p-6 w-3/4">
                    <div className="flex flex-col gap-2 flex-1">
                        <Text variant="infoXs">Computer & Accessories</Text>
                        <Text variant="productTitle">
                            JBL T460BT BLACK Headphones
                        </Text>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <Text variant="infoXs">1245 reviews</Text>
                        </div>
                        <div className="flex items-center gap-2">
                            <Text variant="price">$125.00</Text>
                            <Text variant="infoSm" className="line-through">
                                $250.00
                            </Text>
                        </div>
                        <div>
                            <Text variant="infoXs">
                                View more <ArrowRightAltOutlinedIcon />
                            </Text>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
