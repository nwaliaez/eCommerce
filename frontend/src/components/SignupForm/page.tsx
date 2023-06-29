import { FC } from 'react';
import { Button, Input, Text } from '../ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z
    .object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z.string().email({ message: 'Please enter a valid Email' }),
        password: z.string().min(8),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });
export type IForm = z.infer<typeof schema>;

interface ISignupForm {
    onSubmitReady: (data: IForm) => void;
}
const SignupForm: FC<ISignupForm> = ({ onSubmitReady }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({ resolver: zodResolver(schema) });

    return (
        <div className="flex flex-col gap-4 items-center bg-cardSecondary rounded-md shadow-lg w-96 p-10">
            <Text variant="price" className="inline-block max-w-max">
                Sign Up
            </Text>
            <form
                onSubmit={handleSubmit(onSubmitReady)}
                className="flex w-full flex-col gap-5"
            >
                <div>
                    <Input
                        variant="underLine"
                        placeholder="Name"
                        register={register('name')}
                    />
                    {errors.name?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.name?.message}
                        </Text>
                    )}
                </div>

                <div>
                    <Input
                        variant="underLine"
                        placeholder="Email"
                        register={register('email')}
                    />
                    {errors.email?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.email?.message}
                        </Text>
                    )}
                </div>

                <div>
                    <Input
                        variant="underLine"
                        type="password"
                        placeholder="Password"
                        register={register('password')}
                    />
                    {errors.password?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.password?.message}
                        </Text>
                    )}
                </div>

                <div>
                    <Input
                        variant="underLine"
                        type="password"
                        placeholder="Confirm Password"
                        register={register('confirmPassword')}
                    />
                    {errors.confirmPassword?.message && (
                        <Text variant="error" className="ml-2 mt-2">
                            {errors.confirmPassword?.message}
                        </Text>
                    )}
                </div>

                <div className="flex justify-between">
                    <Text
                        variant="description"
                        className="flex cursor-default gap-2 items-center"
                    >
                        <input type="checkbox" id="rememberMe"></input>
                        <label htmlFor="rememberMe">Remember me?</label>
                    </Text>
                    <Button type="submit" variant="primary" title="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
