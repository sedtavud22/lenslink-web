/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui", "Pridi", "sans-serif"],
      serif: [
        "Merriweather",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      colors: {
        blackText: "#212529",
        grayText: "#6c657d",
        lightGrayText: "#8d8d8d",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2d88bf",
          secondary: "#f2f5f7",
          accent: "#4ca1ff",
          neutral: "#f2f5f7",
          "base-100": "#ffffff",
          success: "#2ecc71",
          warning: "#f26522",
          error: "#ff0000",
        },
      },
    ],
  },
};
