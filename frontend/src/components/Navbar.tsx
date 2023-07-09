'use client';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from './navbar/hoverCards/User';
import { Heart } from './ui/Icon';
import Link from 'next/link';
import { Input } from './ui';
import { useCartContext } from './CartContext';
import Search from './navbar/hoverCards/Search';
import { useSession } from 'next-auth/react';

interface NavbarProps {}
export interface searchProduct {
    imageUrl: string;
    name: string;
}
const Navbar: FC<NavbarProps> = ({}) => {
    const { data: session, status } = useSession();
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState<searchProduct[]>([]);
    const { itemCount } = useCartContext();
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

    useEffect(() => {
        if (status == 'authenticated' && searchTerm) {
            console.log(session?.user.token);

            const delay = 500;

            const debounceTimer = setTimeout(async () => {
                const response = await fetch(
                    `http://localhost:5000/api/client/search/${searchTerm}`,
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: session?.user.token,
                        },
                    }
                );
                const result = await response.json();
                setSearchResult(result);
                setLoader(false);
            }, delay);

            return () => clearTimeout(debounceTimer);
        }
    }, [searchTerm]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setLoader(true);
        setSearchTerm(e.target.value);
    };
    return (
        <nav
            className={`${
                isSticky
                    ? 'sticky w-screen px-10 z-30 transition-all duration-200 bg-white bg-opacity-95 shadow-md '
                    : 'container mx-auto'
            }  flex top-0 left-0 justify-between h-14 items-center text-dark`}
        >
            <ul className="navLinks flex gap-2 cursor-pointer">
                <li>
                    <Link href="/home">Logo</Link>
                </li>
                <li className="group ">
                    <Link
                        href="/allProducts"
                        className="flex items-center gap-2"
                    >
                        <GridViewOutlinedIcon fontSize="small" />
                        All
                    </Link>
                </li>
                {/* <li>Today's Deals</li>
                <li>Gift Cards</li>
                <li>Registry & Gifting</li> */}
            </ul>
            <ul className="navLinks flex">
                <li className="flex items-center gap-1 relative">
                    <SearchOutlinedIcon fontSize="small" />
                    <Input
                        variant="noBorder"
                        placeholder="Search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <Search
                        data={searchResult}
                        loading={loader}
                        visible={!!searchTerm}
                    />
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
                <li className=" flex items-center">
                    <Link href="/cart" className="flex">
                        <ShoppingCartOutlinedIcon fontSize="small" />
                        <div className="bg-red-500 rounded-full flex justify-center items-center w-5 h-5 text-white text-xs">
                            {itemCount}
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
