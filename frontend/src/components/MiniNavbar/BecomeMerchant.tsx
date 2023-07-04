'use client';
import { apiRoute } from '@/utils/apiRoutes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FC, useCallback } from 'react';
import { toast } from 'react-hot-toast';

interface BecomeMerchantProps {}

const BecomeMerchant: FC<BecomeMerchantProps> = ({}) => {
    const { data: session, status, update } = useSession();
    const becomeMerchant = useCallback(async () => {
        if (status === 'authenticated') {
            console.log(session);
            const response = await fetch(`${apiRoute.becomeMerchant}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `${session.user.token}`,
                },
                body: JSON.stringify({
                    licenseId: 'test',
                }),
            });
            const result = await response.json();
            if (result.status == 'success') {
                toast.success('You are a merchant now');
                console.log(result);

                if (result.licenseId) {
                    console.log(result);
                    update({ licenseId: result.licenseId });
                }
            } else {
                toast.error(result.message || 'Uknown error occured');
            }
        }
    }, [status]);

    return (
        <li className="miniNavLink">
            {session?.user.licenseId ? (
                <Link href="/dashboard">
                    <button className="flex gap-2 items-center">
                        Merchant Dashboard
                    </button>
                </Link>
            ) : (
                <button
                    className="flex gap-2 items-center"
                    onClick={becomeMerchant}
                >
                    Become Merchant
                </button>
            )}
        </li>
    );
};

export default BecomeMerchant;
