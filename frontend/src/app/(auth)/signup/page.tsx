'use client';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import SignupForm, { IForm } from '@/components/SignupForm/page';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface pageProps {}

const Signup: FC<pageProps> = ({}) => {
    const router = useRouter();
    const onSubmitReadt: SubmitHandler<IForm> = async (data) => {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.NEXT_PUBLIC_APIAUTH!,
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (result?.status == 'failed') {
            return toast.error('Failed');
        }
        toast.success('Success');
        router.push('/login');
    };

    return (
        <>
            <SignupForm onSubmitReady={onSubmitReadt} />
        </>
    );
};

export default Signup;
