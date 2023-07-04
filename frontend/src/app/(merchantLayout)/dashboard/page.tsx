import { DashboardCard } from '@/components/ui';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div className="grid grid-cols-4 gap-4 flex-1">
            <DashboardCard
                src="/assets/images/controller.png"
                title="Product 1"
            />
            <DashboardCard
                src="/assets/images/controller.png"
                title="Product 1"
            />
            <DashboardCard
                src="/assets/images/controller.png"
                title="Product 1"
            />
            <DashboardCard
                src="/assets/images/controller.png"
                title="Product 1"
            />
        </div>
    );
};

export default page;
