/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8873ef",
        heading: "#081e21",
        smallText: "#193256",
        smallTextBlur: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
