import { FC } from 'react';
import SliderItem from './ui/SliderItem';

interface SliderProps {}

const Slider: FC<SliderProps> = ({}) => {
    return (
        <div className="flex gap-5 bg-cardSecondary p-6">
            <SliderItem
                imageSrc="/assets/images/profile.png"
                title="Hi, Tomas"
                miniDesc="recommendations for you"
            />
            <SliderItem
                imageSrc="/assets/images/package.png"
                title="Your Orders"
                miniDesc="View your orders"
            />
            <SliderItem
                imageSrc="/assets/images/headphones.png"
                title="Electronics"
                miniDesc="Big Sale 30%"
            />
            <SliderItem
                imageSrc="/assets/images/cooker.png"
                title="Home & Kitchen"
                miniDesc="Big Sale 30%"
            />
        </div>
    );
};

export default Slider;
