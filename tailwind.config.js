/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        50: "#FBFCFE",
        100: "#F9F9FA",
        200: "#F6F6FB",
        300: "#c8cbd966",
        400: "#C4C4C4",
        500: "#DEE1F4",
        600: "#FFE6CC",
      },
      gray2: {
        100: "#DADADA",
        200: "#D8D9DB",
        300: "#B0C3CC",
      },

      gray3: {
        100: "#707FDD1A",
      },
      blue: {
        50: "#F1F2F7",
        100: "#E6E8EC",
        200: "#E2E7E7",
        300: "#DBE5EB",
        400: "#DDE4F0",
      },
      blue2: {
        100: "#C7CEFF",
        200: "#A6ABC8",
      },
      button: {
        100: "#2FBFDE",
        200: "#F99C30",
        300: "#8593ED",
        400: "#737B8B",
        500: "#627B87",
        600: "#149D52",
        700: "#EC5252",
        800: "#F2383A",
      },
      indigo: {
        100: "#5A6ACF",
        200: "#5A67BA",
        300: "#6463D6",
      },
      dark: {
        100: "#1F384C",
        200: "#37375C",
        300: "#273240",
        400: "#082431",
      },
      black: {
        100: "#121212",
        200: "#230B34",
        300: "#200E32",
        400: "#000000",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Poppins", "sans"],
      },
      boxShadow: {
        bottom: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Customize the shadow here
      },
    },
  },
  plugins: [],
};
