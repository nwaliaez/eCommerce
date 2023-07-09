import { Text } from '@/components/ui';
import Image from 'next/image';
import { FC } from 'react';

interface SearchCardProps {
    imageUrl: string;
    name: string;
}

const SearchCard: FC<SearchCardProps> = ({ imageUrl, name }) => {
    return (
        <div className="flex items-center p-5 gap-5">
            <Image
                src={imageUrl}
                width={50}
                height={50}
                className="object-contain"
                alt={name}
            />
            <Text variant="productTitle">{name}</Text>
        </div>
    );
};

export default SearchCard;
