'use client';
import { Text } from '@/components';
import { Input, Button } from '@/components/ui';
import { LeftArrow } from '@/components/ui/Icon';
import Link from 'next/link';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface pageProps {}

const Signup: FC<pageProps> = ({}) => {
    type IForm = {
        name: string;
        email: string;
        password: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

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
                    <Input
                        variant="underLine"
                        placeholder="Name"
                        register={register}
                        name="name"
                    />
                    {errors.name && <span>This field is required</span>}

                    <Input
                        variant="underLine"
                        placeholder="Email"
                        register={register}
                        name="email"
                    />
                    {errors.email && <span>This field is required</span>}

                    <Input
                        variant="underLine"
                        type="password"
                        placeholder="Password"
                        register={register}
                        name="password"
                    />
                    {errors.password && <span>This field is required</span>}

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

            <Text variant="titleSm" className="flex">
                Forgot your Password?
            </Text>
        </div>
    );
};

export default Signup;
