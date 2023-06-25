import { FC } from 'react';
import Text from './ui/Text';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
    return (
        <div className="flex justify-between py-5 px-20 bg-cardPrimary">
            <div className="flex gap-5">
                <Text variant="description">Conditions of Use</Text>
                <Text variant="description">Privacy Notice</Text>
                <Text variant="description">Interest-Based Ads</Text>
            </div>
            <div>
                <Text variant="description">
                    &copy; 1916-2023. AMazon.com, Inc. or its affiliates
                </Text>
            </div>
        </div>
    );
};

export default Footer;
