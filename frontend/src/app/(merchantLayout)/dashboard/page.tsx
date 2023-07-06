'use client';
import { DashboardCard } from '@/components/ui';
import Loader from '@/components/ui/Loader';
import { apiRoute } from '@/utils/apiRoutes';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';

interface pageProps {}
interface IProduct {
    _id: string;
    category: string;
    createdAt: string;
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    updatedAt: string;
    userId: string;
}
const page: FC<pageProps> = ({}) => {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState<IProduct[]>();

    const removeProduct = async (productId: string) => {
        await fetch(apiRoute.removeProduct, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: session?.user.token,
            },
            body: JSON.stringify({ productId }),
        });
        setProducts((prev) => prev?.filter((list) => list._id !== productId));
    };
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(apiRoute.getPorducts, {
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
        <div className="grid grid-cols-4 gap-4 flex-1">
            {products &&
                products.map((product) => (
                    <DashboardCard
                        key={product._id}
                        productId={product._id}
                        src={product.imageUrl}
                        title={product.name}
                        removeProducts={removeProduct}
                    />
                ))}
        </div>
    );
};

export default page;
