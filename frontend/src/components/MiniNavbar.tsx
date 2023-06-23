'use client';
import { FC } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
interface MiniNavbarProps {}

const MiniNavbar: FC<MiniNavbarProps> = ({}) => {
    return (
        <div className="flex justify-between text-xs text-secondary mt-3">
            <div>Amazon's response to COVID-19</div>
            <div>
                <ul className="flex gap-5">
                    <li className="flex gap-1 items-center cursor-pointer">
                        <LocationOnOutlinedIcon fontSize="small" /> India
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        <LanguageOutlinedIcon fontSize="small" />
                        ENG
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="flex gap-2 items-center cursor-pointer">
                        USD
                        <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    </li>
                    <li className="cursor-pointer">Customer Service</li>
                    <li className="cursor-pointer">Sell with EZ</li>
                </ul>
            </div>
        </div>
    );
};

export default MiniNavbar;
