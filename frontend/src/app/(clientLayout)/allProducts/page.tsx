'use client';
import { apiRoute } from '@/utils/apiRoutes';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { dateFormat } from '@/utils/dateFormat';
import ProductCard from '@/components/ProductCard';
import { toast } from 'react-hot-toast';
import { useCartContext } from '@/components/CartContext';

interface pageProps {}
export interface IProduct {
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
const AllProducts: FC<pageProps> = ({}) => {
    const { data: session, status } = useSession();
    const { updateCartCount } = useCartContext();
    const [products, setProducts] = useState<IProduct[]>();

    const addToCart = async (productId: string) => {
        await fetch(apiRoute.addToCart, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: session?.user.token,
            },
            body: JSON.stringify({ productId, quantity: 1 }),
        });
        updateCartCount();
        toast.success('Product Added to cart');
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
    console.log(products);
    return (
        <div className="grid grid-cols-4 gap-4 flex-1">
            {products &&
                products.map((product) => (
                    <ProductCard
                        key={product._id}
                        productId={product._id}
                        src={product.imageUrl}
                        title={product.name}
                        date={dateFormat(product.createdAt)}
                        addToCart={addToCart}
                        price={product.price}
                    />
                ))}
        </div>
    );
};

export default AllProducts;
