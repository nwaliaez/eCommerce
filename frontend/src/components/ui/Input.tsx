import { InputHTMLAttributes } from 'react';
import { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/utils';

const inputVariants = cva(['w-full', 'outline-0'], {
    variants: {
        variant: {
            image: [
                'text-sm',
                'text-slate-500',
                'file:mr-4',
                'file:py-2',
                'file:px-4',
                'file:rounded-full',
                'file:border-0',
                'file:text-sm',
                'file:font-semibold',
                'file:bg-hoverPrimary',
                'file:text-dark',
                'hover:file:bg-hoverPrimary',
                'cursor-pointer',
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
        variant: 'underLine',
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
