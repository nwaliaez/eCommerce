'use client';
import { FC, useEffect, useState } from 'react';
import Text from './ui/Text';
import Card from './ui/Card';
import { lastViewed } from '@/utils/data';
import { useSession } from 'next-auth/react';
import { IProduct } from '@/app/(merchantLayout)/dashboard/page';
import { apiRoute } from '@/utils/apiRoutes';

interface SuggestedProductsProps {}

const SuggestedProducts: FC<SuggestedProductsProps> = ({}) => {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState<IProduct[]>();
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(apiRoute.getAllProducts, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: session?.user.token,
                },
            });
            const result = await response.json();
            setProducts(result);
        };
        if (status == 'authenticated') getProducts();
    }, [status]);
    return (
        <section>
            <Text variant="productTitle" className="mb-6">
                Tomas, must have for you
            </Text>
            <div className="flex gap-4">
                {products &&
                    products.map((data) => (
                        <Card
                            key={data._id}
                            src={data.imageUrl}
                            title={data.name}
                            miniTitle={data.description}
                            rating={5}
                            reviewCount={342}
                            price={data.price}
                        />
                    ))}
            </div>
        </section>
    );
};

export default SuggestedProducts;
