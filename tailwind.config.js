module.exports = {
  // https://tailwindcss.com/docs/guides/gatsby#configure-tailwind-to-remove-unused-styles-in-production
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
