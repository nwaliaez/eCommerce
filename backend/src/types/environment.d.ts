declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_URI: string;
            AUTHKEY: string;
            JWT_SECRET_KEY: string;
            CLOUD_API_KEY: string;
            CLOUD_API_SECRET: string;
        }
    }
}

export {};
