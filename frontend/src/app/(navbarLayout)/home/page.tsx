import HeroSection from '@/components/HeroSection';
import SliderItem from '@/components/ui/SliderItem';
import { FC } from 'react';
import Banner from '@/components/ui/Banner';
import { slider1 } from '@/data/slider';
import { miniBanner1 } from '@/data/miniBanner';
import Text from '@/components/ui/Text';
import Card from '@/components/ui/Card';
import { category } from '@/data/category';
import MiniBanner from '@/components/ui/MiniBanner';
import LastViewed from '@/components/LastViewed';
import BestSeller from '@/components/BestSeller';

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
    return (
        <div className="flex flex-col gap-6">
            <HeroSection />

            <section className="flex gap-5 bg-cardSecondary p-6">
                {slider1.map((data) => (
                    <SliderItem
                        key={data.id}
                        imageSrc={data.src}
                        title={data.title}
                        miniDesc={data.desc}
                    />
                ))}
            </section>

            <section>
                <Text variant="productTitle">Shop by categories</Text>
                <div className="flex gap-4 mt-6">
                    {category.map((data) => (
                        <Card
                            src={data.src}
                            title={data.title}
                            type="category"
                        />
                    ))}
                </div>
            </section>

            <section className="flex gap-4">
                {miniBanner1.map((data) => (
                    <MiniBanner
                        key={data.id}
                        title={data.title}
                        src={data.src}
                        desc={data.desc}
                    />
                ))}
            </section>

            <Banner
                title="AMAZON DELIVERS TO YOU"
                desc="Worldwide shipping. We ship to over 100 countries and
                    regions, right at your doorstep."
                src="/assets/images/orderBox.png"
            />

            <LastViewed />
            <BestSeller />
        </div>
    );
};

export default Home;
