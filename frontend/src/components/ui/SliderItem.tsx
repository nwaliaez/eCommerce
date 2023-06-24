import { FC } from 'react';
import Image from 'next/image';
import Text from './Text';

interface SliderItemProps {
    imageSrc: string;
    title: string;
    miniDesc: string;
}

const SliderItem: FC<SliderItemProps> = ({ imageSrc, title, miniDesc }) => {
    return (
        <div className="flex flex-1 gap-4">
            <div>
                <Image src={imageSrc} height={100} width={100} alt={title} />
            </div>
            <div className="flex gap-1 flex-col justify-center">
                <Text>{title}</Text>
                <Text variant="infoSm">{miniDesc}</Text>
            </div>
        </div>
    );
};

export default SliderItem;
