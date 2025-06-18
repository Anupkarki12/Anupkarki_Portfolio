/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #f43f5e, #14b8a6, #fb923c)",
      },
      keyframes: {
        progress: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        progress: "progress 3s ease-in-out",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
