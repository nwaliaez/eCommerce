'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
interface ProvidersProps {
    children: ReactNode;
    session?: Session;
}

const Providers: FC<ProvidersProps> = ({ children, session }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Providers;
