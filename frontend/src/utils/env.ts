import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_APIAUTH: z.string().nonempty(),
    JWT_SECRET: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
