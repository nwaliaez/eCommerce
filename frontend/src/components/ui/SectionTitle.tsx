import { FC } from 'react';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
    return <h3>{title}</h3>;
};

export default SectionTitle;
