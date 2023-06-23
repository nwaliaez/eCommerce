'use client';
import { FC } from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <nav className="flex justify-between mt-4 text-dark">
            <div>
                <ul className="flex gap-7">
                    <li>Logo</li>
                    <li className="flex items-center gap-2">
                        <GridViewOutlinedIcon fontSize="small" />
                        All
                    </li>
                    <li>Today's Deals</li>
                    <li>Gift Cards</li>
                    <li>Registry & Gifting</li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="flex items-center gap-1">
                        <SearchOutlinedIcon fontSize="small" />
                        Search
                    </li>
                    <li className="flex items-center">
                        <PersonOutlineOutlinedIcon fontSize="small" />
                    </li>
                    <li className="flex items-center">
                        <FavoriteBorderOutlinedIcon fontSize="small" />
                    </li>
                    <li className="flex items-center">
                        <ShoppingCartOutlinedIcon fontSize="small" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
