'use client';
import { Text } from '@/components';
import { Input, Button } from '@/components/ui';
import { LeftArrow } from '@/components/ui/Icon';
import Link from 'next/link';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

interface pageProps {}
export interface IForm {
    name: string;
    email: string;
    password: string;
}
const Signup: FC<pageProps> = ({}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();
    console.log(errors);
    const onSubmit: SubmitHandler<IForm> = (data) => {
        fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.NEXT_PUBLIC_APIAUTH!,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data?.status == 'failed') {
                    return toast('Failed');
                }

                toast('Success');
            })
            .catch((error) => {
                console.error(error);
            });
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

            <div className="flex flex-col gap-4 items-center bg-cardSecondary rounded-md w-96 p-10">
                <Text variant="price" className="inline-block max-w-max">
                    Sign Up
                </Text>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-5"
                >
                    <div>
                        <Input
                            variant="underLine"
                            placeholder="Name"
                            register={register('name', {
                                required: 'Name is required',
                            })}
                        />
                        {errors.name?.message && (
                            <Text variant="error" className="ml-2 mt-2">
                                {errors.name?.message}
                            </Text>
                        )}
                    </div>

                    <Input
                        variant="underLine"
                        placeholder="Email"
                        register={register('name', {
                            required: 'Email is required',
                        })}
                    />
                    {errors.email?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.email?.message}
                        </Text>
                    )}

                    <Input
                        variant="underLine"
                        type="password"
                        placeholder="Password"
                        register={register('name', {
                            required: 'Password is required',
                        })}
                    />
                    {errors.password?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.password?.message}
                        </Text>
                    )}
                    <div className="flex justify-between">
                        <Text
                            variant="description"
                            className="flex cursor-default gap-2 items-center"
                        >
                            <input type="checkbox"></input>Remember me?
                        </Text>
                        <Button type="submit" variant="primary" title="Login" />
                    </div>
                </form>
            </div>
            <ToastContainer />

            <Text variant="titleSm" className="flex">
                Forgot your Password?
            </Text>
        </div>
    );
};

export default Signup;
