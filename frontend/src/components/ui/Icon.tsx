import { FC } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

interface IconProps {}

export const StarIcon: FC<IconProps> = ({}) => {
    return <StarOutlinedIcon sx={{ fontSize: '14px', color: '#fdb11a' }} />;
};
