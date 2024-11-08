export const EnvConfiguration = () => ({
    enviremont: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGO_URL,
    defaultLimit:  process.env.DEFAULT_LIMIT || 9
})