'use client';
import { FC } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface StarIconProps {
    rating?: number;
}

export const StarIcon: FC<StarIconProps> = ({ rating = 1 }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
        <StarOutlinedIcon
            key={index}
            sx={{ fontSize: '14px', color: '#fdb11a' }}
        />
    ));

    return <>{stars}</>;
};

export const RightArrow: FC = () => {
    return <ArrowRightAltOutlinedIcon />;
};

export const CircleRightArrow: FC = () => {
    return <ArrowCircleRightOutlinedIcon />;
};

export const LeftArrow: FC = () => {
    return <ArrowBackIosIcon />;
};
