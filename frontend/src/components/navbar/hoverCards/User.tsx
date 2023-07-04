import { signOut } from 'next-auth/react';
import { FC } from 'react';

interface UserProps {}

const User: FC<UserProps> = ({}) => {
    return (
        <ul className="hidden hoverNavLink group-hover:flex absolute shadow-md top-10 right-0 flex-col text-sm font-medium z-20 rounded-md bg-cardLight w-max">
            <li>Your Account</li>
            <li>Your Shop</li>
            <li>Orders</li>
            <li>Subscriptions</li>
            <li>Content and Devices</li>
            <li>Music</li>
            <li onClick={() => signOut()}>Sign Out</li>
        </ul>
    );
};

export default User;
