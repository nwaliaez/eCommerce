import { FC } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

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
