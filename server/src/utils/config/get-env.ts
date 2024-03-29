import { Logger } from '@nestjs/common';

const getBooleanFromString = (value: string | undefined, def = false) => {
  if (value === undefined || value === '') return def;

  return ['true', '1', 'yes', 'enabled'].includes(value.toLowerCase());
};

const getNumberFromString = (value: string | undefined, def: number) => {
  if (value === undefined) return def;

  const num = +value;

  if (isNaN(num)) {
    Logger.warn(
      `'${value}' is not a number. It has been defaulted to '${def}'. Please, check the configuration file and set a valid number.`,
    );
    return def;
  }
  return num;
};

export const getEnv = (): EnvFile => {
  const env = process.env as unknown as RawEnvFile;

  return {
    domain: env.DOMAIN,
    databaseUrl: env.DATABASE_URL,
    openApi: getBooleanFromString(env.OPEN_API),
    cors: getBooleanFromString(env.CORS, true),
    port: getNumberFromString(env.PORT, 5001),
    helmet: getBooleanFromString(env.HELMET, true),
    dev: getBooleanFromString(env.DEV, false),

    auth: {
      host: env.TMWU_AUTH_HOST,
      configRetryDelay: getNumberFromString(
        env.TMWU_AUTH_CONFIG_RETRY_DELAY,
        10000,
      ),
    },

    https: getBooleanFromString(env.HTTPS, true),
  };
};

interface EnvFile {
  domain: string;

  databaseUrl: string;

  openApi: boolean;
  cors: boolean;
  port: number;
  helmet: boolean;

  dev: boolean;

  auth: {
    host: string;
    configRetryDelay: number;
  };

  https: boolean;
}

class RawEnvFile {
  DOMAIN: string;

  DATABASE_URL: string;

  OPEN_API?: string;
  CORS?: string;
  PORT?: string;
  HELMET?: string;

  DEV?: string;

  TMWU_AUTH_HOST: string;
  TMWU_AUTH_CONFIG_RETRY_DELAY?: string;

  HTTPS?: string;
}
