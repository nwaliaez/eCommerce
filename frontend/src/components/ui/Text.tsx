import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';
import { FC } from 'react';
import { cn } from '../../../utils/utils';

const descriptionVariant = cva('cursor-pointer', {
    variants: {
        variant: {
            description: ['text-sm'],
            productTitle: ['leading-5'],
            price: ['text-xl', 'font-medium'],
            infoSm: ['text-sm', 'text-secondary'],
            infoXs: ['text-xs', 'text-secondary'],
        },
    },
    defaultVariants: {
        variant: 'description',
    },
});
interface DescriptionProps
    extends VariantProps<typeof descriptionVariant>,
        HTMLProps<HTMLDivElement> {}

const Text: FC<DescriptionProps> = ({ children, variant, className }) => {
    return (
        <div className={cn(descriptionVariant({ variant, className }))}>
            {children}
        </div>
    );
};

export default Text;
