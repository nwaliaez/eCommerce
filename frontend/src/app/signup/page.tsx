'use client';
import { Text } from '@/components';
import { Button } from '@/components/ui';
import { LeftArrow } from '@/components/ui/Icon';
import Link from 'next/link';
import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SubmitHandler } from 'react-hook-form';
import SignupForm, { IForm } from '@/components/SignupForm/page';

interface pageProps {}

const Signup: FC<pageProps> = ({}) => {
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
            return toast('Failed');
        }

        toast('Success');
    };

    return (
        <div className="flex flex-col items-center justify-between bg-primary w-screen h-screen p-10">
            <div className="flex justify-between container">
                <Text variant="titleSm" className="flex flex-1 items-center">
                    <Link href="/home">
                        <LeftArrow />
                        Back to store
                    </Link>
                </Text>
                <div>Logo</div>
                <div className="flex flex-1 items-center justify-end gap-5">
                    <Text variant="titleSm">Not a member? </Text>
                    <Button variant="outline" title="Sign In" />
                </div>
            </div>

            <SignupForm onSubmitReady={onSubmitReadt} />
            <ToastContainer />

            <Text variant="titleSm" className="flex">
                Forgot your Password?
            </Text>
        </div>
    );
};

export default Signup;
