import { Environment } from './environment';

export const environment: Environment = {
  production: true,
  db: {
    uri: process.env.MONGO_URI,
  },
};
