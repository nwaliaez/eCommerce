import { FC } from 'react';
import Text from './ui/Text';
import Card from './ui/Card';
import { lastViewed } from '@/data/lastViewed';

interface SuggestedProductsProps {}

const SuggestedProducts: FC<SuggestedProductsProps> = ({}) => {
    return (
        <section>
            <Text variant="productTitle" className="mb-6">
                Tomas, must have for you
            </Text>
            <div className="flex gap-4">
                {lastViewed.map((data) => (
                    <Card
                        key={data.id}
                        src={data.src}
                        title={data.title}
                        miniTitle={data.miniTitle}
                        rating={data.rating}
                        reviewCount={data.reviewCount}
                        price={data.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default SuggestedProducts;
