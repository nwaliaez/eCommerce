'use client';
import { FC, useEffect, useState } from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from './navbar/hoverCards/User';
import { Heart } from './ui/Icon';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 40;
            setIsSticky(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav
            className={`${
                isSticky
                    ? 'sticky w-screen px-10 z-30 transition-all duration-200 bg-white bg-opacity-95 shadow-md '
                    : 'container mx-auto'
            }  flex top-0 left-0 justify-between h-14 items-center text-dark`}
        >
            <ul className="navLinks flex gap-2 cursor-pointer">
                <li>Logo</li>
                <li className="group flex items-center gap-2">
                    <GridViewOutlinedIcon fontSize="small" />
                    All
                </li>
                <li>Today's Deals</li>
                <li>Gift Cards</li>
                <li>Registry & Gifting</li>
            </ul>
            <ul className="navLinks flex">
                <li className="flex items-center gap-1">
                    <SearchOutlinedIcon fontSize="small" />
                    Search
                </li>
                <li className="group flex relative items-center">
                    <PersonOutlineOutlinedIcon
                        className="group-hover:text-hoverPrimary"
                        fontSize="small"
                    />
                    <User />
                </li>
                <li className="flex items-center">
                    <Heart size="small" />
                </li>
                <li className="flex items-center">
                    <ShoppingCartOutlinedIcon fontSize="small" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
