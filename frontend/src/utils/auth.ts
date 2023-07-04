import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apiRoute } from './apiRoutes';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const response = await fetch(apiRoute.login, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: process.env.NEXT_PUBLIC_APIAUTH!,
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                const data = await response.json();
                // Handle the data from the API response
                return data;
            },
        }),
    ],
    callbacks: {
        session({ session, token }) {
            session.user.id = token.id;
            session.user.token = token.token;
            session.user.licenseId = token.licenseId;
            console.log(session);

            return session;
        },
        jwt({ token, trigger, session, account, user }) {
            if (account) {
                token.accessToken = account.access_token;
                if ('_id' in user) token.id = user._id;
                if ('token' in user) token.token = user.token;
                if ('licenseId' in user) token.licenseId = user.licenseId;
            }
            console.log(session || 'no');
            if (trigger === 'update' && session?.licenseId) {
                token.licenseId = session.licenseId;
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET!,
};
