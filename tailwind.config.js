/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Keeping the content paths from the first config
  ],
  theme: {
    extend: {}, // Keeping the theme configuration, as it's the same in both
  },
  plugins: [], // Keeping the empty plugins configuration from both
}
