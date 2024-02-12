/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        secondary: "#6c657d",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2D88DF",
          secondary: "#f2f5f7",
          accent: "#4CA1FF",
          success: "#2ecc71",
          error: "ff0000",
        },
      },
    ],
  },
};
