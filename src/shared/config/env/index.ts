const getEnvVar = (key: string) => {
  if (!process.env[key]) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

export const NODE_ENV = getEnvVar('NEXT_NODE_ENV');

export const API_URL = getEnvVar('NEXT_API_URL');

export const isDev = NODE_ENV === 'development';
export const isStage = NODE_ENV === 'stage';
export const isProd = NODE_ENV === 'production';
