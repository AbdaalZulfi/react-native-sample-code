/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          'DEFAULT': '#70974b',
          '50': '#f3f7ee',
          '100': '#e5eed9',
          '200': '#cddeb8',
          '300': '#acc88e',
          '400': '#8db269',
          '500': '#70974b',
          '600': '#567739',
          '700': '#445c2f',
          '800': '#3d512d',
          '900': '#324126',
          '950': '#182211',
        }
      }
    },
  },
  plugins: [],
}

