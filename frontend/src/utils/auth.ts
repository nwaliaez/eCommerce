import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { env } from './env';

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
                const response = await fetch(
                    'http://localhost:5000/api/auth/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: env.NEXT_PUBLIC_APIAUTH,
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    }
                );
                const data = await response.json();
                // Handle the data from the API response
                return data;
            },
        }),
    ],
    callbacks: {
        session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
        jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token;
                if ('_id' in user) token.id = user._id;
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
    secret: env.JWT_SECRET,
};
