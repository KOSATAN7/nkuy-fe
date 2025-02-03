/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary1: "#7EC7FF",
        primary1koma2: "#3A82B3",
        neutral1: "#CACED8",
        text1: "#083A50",
        primary2: "#216BFE",
        warning1: "#FFAE00",
        danger1: "#FD6980",
        succes: "#4CAF50",
        red: "#F90101",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "400",
          src: "url(/src/fonts/Poppins-Regular.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "500",
          src: "url(/src/fonts/Poppins-Medium.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "600",
          src: "url(/src/fonts/Poppins-SemiBold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "700",
          src: "url(/src/fonts/Poppins-Bold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "800",
          src: "url(/src/fonts/Poppins-Black.ttf)",
        },
      });
    }),
  ],
};
