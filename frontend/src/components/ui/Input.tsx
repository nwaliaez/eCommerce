import { InputHTMLAttributes } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/utils';

const inputVariants = cva(['w-full', 'outline-0'], {
    variants: {
        variant: {
            primary: [
                'bg-blue-500',
                'text-white',
                'border-transparent',
                'hover:bg-blue-600',
            ],
            underLine: [
                'bg-transparent',
                'border-b',
                'border-secondary',
                'focus:border-primary',
            ],
        },
        sizes: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-sm', 'py-2', 'px-4'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        sizes: 'medium',
    },
});

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    register?: unknown;
}
const Input: FC<InputProps> = ({
    title,
    className,
    type,
    sizes,
    variant,
    register,
    ...props
}) => {
    return (
        <>
            <input
                {...(register ?? {})}
                type={type ?? 'text'}
                {...props}
                className={cn(inputVariants({ variant, sizes, className }))}
            >
                {title}
            </input>
        </>
    );
};

export default Input;
