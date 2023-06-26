import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';
import { FC } from 'react';
import { cn } from '@/utils/utils';

const headingVariant = cva('', {
    variants: {
        variant: {
            heading1: ['text-4xl', 'font-extrabold', 'tracking-[0.2rem]'],
            heading2: [],
            heading3: [],
            heading4: [],
            heading5: [],
            heading6: [],
        },
    },
});
interface HeadingProps
    extends VariantProps<typeof headingVariant>,
        HTMLProps<HTMLDivElement> {}

const Heading: FC<HeadingProps> = ({ title, variant, className }) => {
    return (
        <div className={cn(headingVariant({ variant, className }))}>
            {title}
        </div>
    );
};

export default Heading;
