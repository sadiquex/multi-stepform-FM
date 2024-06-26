/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fonts
      fontFamily: {
        ubuntuBold: ["Ubuntu Bold", "sans-serif"],
        ubuntuMedium: ["Ubuntu Medium", "sans-serif"],
        ubuntuRegular: ["Ubuntu Regular", "sans-serif"],
      },

      // breakpoints
      screens: {
        sm: { min: "100px", max: "960px" },
        lg: { min: "960px" },
      },

      // colors
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberyRed: "hsl(354, 84%, 57%)",
        // neutral colors
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
