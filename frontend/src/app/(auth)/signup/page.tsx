'use client';
import { Text } from '@/components';
import { Button } from '@/components/ui';
import { LeftArrow } from '@/components/ui/Icon';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'react-toastify';
import { SubmitHandler } from 'react-hook-form';
import SignupForm, { IForm } from '@/components/SignupForm/page';
import { useRouter } from 'next/navigation';

interface pageProps {}

const Signup: FC<pageProps> = ({}) => {
    const router = useRouter();

    const onSubmitReadt: SubmitHandler<IForm> = async (data) => {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.NEXT_PUBLIC_APIAUTH!,
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        if (result?.status == 'failed') {
            return toast.error('Failed', {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        router.push('/login');
    };

    return <SignupForm onSubmitReady={onSubmitReadt} />;
};

export default Signup;
