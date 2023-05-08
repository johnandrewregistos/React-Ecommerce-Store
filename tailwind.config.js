/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url(https://images.pexels.com/photos/6689351/pexels-photo-6689351.jpeg?auto=compress&cs=tinysrgb&w=600)',
      },
    },
  },
  plugins: [],
}

