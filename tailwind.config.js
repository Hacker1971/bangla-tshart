/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#abe86a",

          secondary: "#edef7f",

          accent: "#fcf880",

          neutral: "#15191E",

          "base-100": "#EBE7EE",

          info: "#789EF7",

          success: "#22AA9A",

          warning: "#9C5E02",

          error: "#E96367",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
