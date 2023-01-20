// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    './src/pages/**/*.js',
    './src/components/stream/**/*.js',
    './src/components/agenda/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
