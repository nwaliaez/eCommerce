'use client';
import { Text } from '@/components';
import CartCard from '@/components/CartCard';
import { useCartContext } from '@/components/CartContext';
import { apiRoute } from '@/utils/apiRoutes';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';

interface pageProps {}
interface ICart {
    _id: string;
    userId: string;
    productId: string;
    quantity: number;
    productData: [
        {
            _id: string;
            name: string;
            category: string;
            description: string;
            imageUrl: string;
            price: number;
            userId: string;
            createdAt: string;
            updatedAt: string;
        }
    ];
}
const Cart: FC<pageProps> = ({}) => {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState<ICart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    useEffect(() => {
        const cartProducts = async () => {
            const response = await fetch(apiRoute.viewCart, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: session?.user.token,
                },
            });
            const result: ICart[] = await response.json();
            const total = result.reduce((sum, product) => {
                return sum + product.productData[0].price * product.quantity;
            }, 0);
            setTotalPrice(total);
            setProducts(result);
        };
        if (status == 'authenticated') {
            cartProducts();
        }
    }, [status]);

    const { itemCount } = useCartContext();
    return (
        <div className="flex">
            <div className="bg-cardLight flex-1 p-10">
                <div className="flex justify-between border-b border-primary p-5">
                    <Text variant="titleXl">Shopping Cart</Text>
                    <Text variant="titleXl">{itemCount} Items</Text>
                </div>
                <div className="flex">
                    <Text variant="price" className="flex-1">
                        Item
                    </Text>
                    <Text variant="price" className="flex-1">
                        Quantity
                    </Text>
                    <Text variant="price" className="flex-1">
                        Price
                    </Text>
                </div>

                {products &&
                    products.map((product) => (
                        <CartCard
                            imageUrl={product.productData[0].imageUrl}
                            price={product.productData[0].price}
                            quantity={product.quantity}
                            productTitle={product.productData[0].name}
                        />
                    ))}
            </div>
            <div className="flex flex-col gap-5 w-96 bg-cardPrimary p-10">
                <div className="p-5 border-b border-primary">
                    <Text variant="titleXl">Order Summary</Text>
                </div>
                <div className="flex justify-between">
                    <Text variant="price">Total Price</Text>
                    <Text variant="price">${totalPrice.toLocaleString()}</Text>
                </div>
            </div>
        </div>
    );
};

export default Cart;
