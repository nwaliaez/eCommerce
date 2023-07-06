'use client';
import { FC } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export const Rocket: FC = () => {
    return <RocketLaunchIcon />;
};

interface IHeart {
    size?: 'small' | 'inherit' | 'large' | 'medium';
}
export const Heart: FC<IHeart> = ({ size }) => {
    return <FavoriteBorderOutlinedIcon fontSize={size} />;
};

interface IRemove {
    className: string;
}
export const Remove: FC<IRemove> = ({ className }) => {
    return <RemoveCircleOutlineIcon className={className} />;
};

export const DotMenu: FC<IRemove> = ({ className }) => {
    return <MoreVertIcon className={className} />;
};
