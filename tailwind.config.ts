import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    float: false,
    container: false,
    boxShadowColor: false,
    backgroundOpacity: false,
    textOpacity: false,
    borderOpacity: false,
  },
};

export default config;
