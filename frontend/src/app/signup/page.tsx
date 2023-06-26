'use client';
import { Text } from '@/components';
import { Input, Button } from '@/components/ui';
import { LeftArrow } from '@/components/ui/Icon';
import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                <form action="" className="flex w-full flex-col gap-5">
                    <Input
                        variant="underLine"
                        onChange={handleChange}
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                    />
                    <Input
                        variant="underLine"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                    <Input
                        variant="underLine"
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                    />
                    <div className="flex justify-between">
                        <Text
                            variant="description"
                            className="flex cursor-default gap-2 items-center"
                        >
                            <input type="checkbox"></input>Remember me?
                        </Text>
                        <Button variant="primary" title="Login" />
                    </div>
                </form>
            </div>
            <Text variant="titleSm" className="flex">
                Forgot your Password?
            </Text>
        </div>
    );
};

export default page;
