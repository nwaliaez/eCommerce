import CategorySection from '@/components/CategorySection';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import { FC } from 'react';

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
    return (
        <div className="flex flex-col gap-6">
            <HeroSection />
            <Slider />
            <CategorySection />
        </div>
    );
};

export default Home;
