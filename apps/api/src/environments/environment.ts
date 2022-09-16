export const environment = {
  production: false,
  db: {
    uri: process.env.MONGO_URI,
  },
};

export type Environment = typeof environment;
