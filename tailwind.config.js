/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [],
  theme: {
    extend: {
      borderColor: (theme) => ({
        ...theme("colors"),
        secondary: "rgb(137 182 215 / var(--tw-border-opacity))",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),
        secondary: "rgb(137 182 215 / var(--tw-bg-opacity))",
      }),
    },
  },
  plugins: [],
  darkMode: "selector",
};
