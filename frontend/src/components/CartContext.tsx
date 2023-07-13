'use client';
import { apiRoute } from '@/utils/apiRoutes';
import { stat } from 'fs';
import { useSession } from 'next-auth/react';
import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

export const CartContext = createContext({
    itemCount: 0,
    updateCartCount: () => {},
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const { data: session, status } = useSession();

    const getCartCount = async () => {
        const response = await fetch(apiRoute.cartCount, {
            headers: {
                'Content-type': 'application/json',
                Authorization: session?.user.token,
            },
        });
        const result = await response.json();
        setItemCount(result);
    };
    useEffect(() => {
        if (status == 'authenticated') {
            getCartCount();
        }
    }, [status]);
    const [itemCount, setItemCount] = useState<number>(0);
    const updateCartCount = () => {
        getCartCount();
    };
    return (
        <CartContext.Provider value={{ itemCount, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
