import flowbite from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      margin: {
        'ma': '0 auto'
      },
      width: {
        'w-90': '95%'
      }
    },
  },
  plugins: [],
}

