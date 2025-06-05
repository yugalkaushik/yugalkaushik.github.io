/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, filter: "blur(10px)" },
          "100%": { opacity: 1, filter: "blur(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s forwards",
        fadeInDelayed: "fadeIn 1s forwards 0.3s",
      },
      boxShadow: {
        "inner-black": "inset 0px 4px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
