'use client';
import { FC } from 'react';
import Button from './Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Image from 'next/image';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
    return (
        <div className="flex p-20 gap-10 bg-cardPrimary mt-5">
            <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="text-4xl tracking-[0.2rem] font-extrabold">
                    SHOP COMPUTERS & ACCESSORIES
                </div>
                <div className="w-3/4 ">
                    Shop laptops, desktops, monitors, tablets, PC gaming, hard
                    drive and storage, accessories and more
                </div>
                <div>
                    <Button variant="outline" size="medium" title="View more" />
                </div>
            </div>
            <div className="relative flex flex-1 items-end h-72">
                <div className="absolute bg-orange-300 h-16 w-16 flex items-center justify-center -top-5 right-14 z-10 text-white rounded-full ">
                    30%
                </div>
                <Image
                    src="/assets/images/real-headphones.png"
                    alt=""
                    className="absolute w-[35rem] -right-20 -top-16"
                    height={300}
                    width={300}
                />
                <div className="flex bg-white rounded-lg p-6 w-3/4">
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="text-secondary text-xs">
                            Computer & Accessories
                        </div>
                        <div className="leading-5">
                            JBL T460BT BLACK Headphones
                        </div>
                        <div className="flex items-center gap-2 text-secondary text-xs">
                            <div className="flex items-center">
                                <StarOutlinedIcon
                                    sx={{ fontSize: '14px', color: '#fdb11a' }}
                                />
                                <StarOutlinedIcon
                                    sx={{ fontSize: '14px', color: '#fdb11a' }}
                                />
                                <StarOutlinedIcon
                                    sx={{ fontSize: '14px', color: '#fdb11a' }}
                                />
                                <StarOutlinedIcon
                                    sx={{ fontSize: '14px', color: '#fdb11a' }}
                                />
                                <StarOutlinedIcon
                                    sx={{ fontSize: '14px', color: '#fdb11a' }}
                                />
                            </div>
                            1245 reviews
                        </div>
                        <div className="text-xl font-semibold flex items-center gap-2">
                            $125.00
                            <span className="line-through text-xs text-secondary">
                                $250.00
                            </span>
                        </div>
                        <div>
                            <span className="text-xs text-secondary">
                                View more <ArrowRightAltOutlinedIcon />
                            </span>
                        </div>
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
