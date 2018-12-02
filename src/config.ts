import { filter, pick } from 'lodash';
import NextConfig from 'next/config';

const nextConfig = NextConfig();
const clientConfig = nextConfig && nextConfig.publicRuntimeConfig || {};

class Config {
  readonly ENVIRONMENT = process.env.NODE_ENV || 'development';
  readonly APP_NAME = 'home-ht-coding-chalenge';
  readonly API_URL = process.env.API_URL || clientConfig.API_URL || 'localhost:4000';
}

const config = new Config();

export default config;

export function getConfig<T extends keyof Config>(...keys: T[]): Readonly<Pick<Config, T>> {
  const result = pick(config, ...keys);
  const missing = filter(keys, k => result[k] == null);

  if (missing.length > 0) {
    throw new Error(`Required configuration keys missing: ['${missing.join("','")}']`);
  }
  return result;
}
