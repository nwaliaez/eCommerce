import { FC } from 'react';
import SectionTitle from './ui/SectionTitle';

interface CategorySectionProps {}

const CategorySection: FC<CategorySectionProps> = ({}) => {
    return (
        <section>
            <SectionTitle title="Shop by categories" />
        </section>
    );
};

export default CategorySection;
