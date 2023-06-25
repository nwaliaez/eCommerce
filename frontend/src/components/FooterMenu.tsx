import { FC } from 'react';
import Text from './ui/Text';

interface FooterMenuProps {}

const FooterMenu: FC<FooterMenuProps> = ({}) => {
    return (
        <div className="flex justify-between py-10 px-24 bg-cardSecondary">
            <div className="flex flex-col gap-4">
                <Text variant="titleSm">Get to Know Us</Text>
                <div className="flex flex-col gap-2">
                    <Text variant="description">Careers</Text>
                    <Text variant="description">Blog</Text>
                    <Text variant="description">About Amazon</Text>
                    <Text variant="description">Investor Relations</Text>
                    <Text variant="description">Amazon Devices</Text>
                    <Text variant="description">Amazon Tours</Text>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Text variant="titleSm">Make Money with us</Text>
                <div className="flex flex-col gap-2">
                    <Text variant="description">Sell products on Amazon</Text>
                    <Text variant="description">Become an Affiliate</Text>
                    <Text variant="description">Advertise Your Products</Text>
                    <Text variant="description">Self-Publish with us</Text>
                    <Text variant="description">Host an Amazon Hub</Text>
                    <Text variant="description">
                        See More Make Money with Us
                    </Text>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Text variant="titleSm">Let Us Help You</Text>
                <div className="flex flex-col gap-2">
                    <Text variant="description">Amazon and COVID-19</Text>
                    <Text variant="description">Your Account</Text>
                    <Text variant="description">Your Orders</Text>
                    <Text variant="description">Shipping Rates & Policies</Text>
                    <Text variant="description">
                        Manage Your Content and Devices
                    </Text>
                    <Text variant="description">Amazon Assistant</Text>
                    <Text variant="description">Help</Text>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Text variant="titleSm">Amazon Payment Products</Text>
                <div className="flex flex-col gap-2">
                    <Text variant="description">Amazon Business Card</Text>
                    <Text variant="description">Shop with Points</Text>
                    <Text variant="description">Reload Your Balance</Text>
                    <Text variant="description">Amazon Currency Converter</Text>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;
