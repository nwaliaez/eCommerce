'use client';
import { FC } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Text from './ui/Text';

interface MiniNavbarProps {}

const MiniNavbar: FC<MiniNavbarProps> = ({}) => {
    return (
        <div className="flex justify-between mt-3">
            <Text variant="infoXs">Amazon's response to COVID-19</Text>
            <div>
                <ul className="flex gap-5">
                    <li className="miniNavLink">
                        <LocationOnOutlinedIcon fontSize="small" /> India
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="miniNavLink">
                        <LanguageOutlinedIcon fontSize="small" />
                        ENG
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="miniNavLink">
                        USD
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="miniNavLink">Customer Service</li>
                    <li className="miniNavLink">Sell with EZ</li>
                </ul>
            </div>
        </div>
    );
};

export default MiniNavbar;
