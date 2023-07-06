'use client';
import { FC } from 'react';
import { category, miniBanner1, slider1 } from '@/utils/data';
import { Text, Card, SliderItem, ProductBanner } from '@/components/ui';
import {
    Banner,
    HeroSection,
    MiniBanner,
    LastViewed,
    BestSeller,
    SuggestedProducts,
    FooterMenu,
    Footer,
} from '@/components';
import { useSession } from 'next-auth/react';

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
    const { data: session, status } = useSession();
    return (
        <div className="flex flex-col gap-4">
            <HeroSection />
            <section className="flex gap-5 bg-cardSecondary p-6">
                <SliderItem
                    key={1}
                    imageSrc="/assets/images/profile.png"
                    title={session?.user.name}
                    miniDesc="recommendations for you"
                />

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
                            key={data.id}
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

            {/* <LastViewed /> */}

            <BestSeller />

            <section className="flex gap-4">
                <ProductBanner />
                <ProductBanner />
            </section>

            <SuggestedProducts />

            <section className="flex gap-4 bg-cardSecondary p-6">
                {slider1.map((data) => (
                    <SliderItem
                        key={data.id}
                        imageSrc={data.src}
                        title={data.title}
                        miniDesc={data.desc}
                    />
                ))}
            </section>

            <Banner
                title="AMAZON DELIVERS TO YOU"
                desc="Worldwide shipping. We ship to over 100 countries and
                    regions, right at your doorstep."
                src="/assets/images/orderBox.png"
            />

            <FooterMenu />
            <Footer />
        </div>
    );
};

export default Home;
