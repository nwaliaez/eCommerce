import { FC } from 'react';
import Image from 'next/image';

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
            <div className="flex flex-col justify-center">
                <div>{title}</div>
                <div className="text-dark">{miniDesc}</div>
            </div>
        </div>
    );
};

export default SliderItem;
