/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // md row 1
    "md:col-[1/span_3]",
    "md:col-[4/span_3]",
    "md:row-[1/span_2]",
    // md row 2
    "md:col-[1/span_2]",
    "md:col-[3/span_4]",
    "md:row-[3/span_2]",
    // md row 3
    "md:col-[1/span_4]",
    "md:col-[5/span_2]",
    "md:row-[5/span_2]",
    "md:row-[5/span_1]",
    "md:row-[6/span_1]",
    // md row 4
    "md:col-[1/span_6]",
    "md:row-[7/span_2]",
    // lg row 1
    "lg:col-[1/span_2]",
    "lg:col-[3/span_2]",
    "lg:col-[5/span_2]",
    "lg:row-[1/span_4]",
    "lg:row-[1/span_2]",
    "lg:row-[3/span_2]",
    // lg row 2
    "lg:row-[5/span_4]",
    "lg:row-[5/span_2]",
    "lg:row-[7/span_2]",
  ],
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
