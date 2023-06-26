/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        light: {
          50: "#FFFFFF",
          100: "#F6F6F6",
        },
        dark: {
          50: "#212028",
          100: "#050507"
        },
        blue: {
          50: "#6029d4",
          100: "#3d49f1",
        }
      },
      screens: {
        sm: "576px",
        "sm-max": { max: "576px" },
        md: "768px",
        "md-max": { max: "768px" },
        lg: "992px",
        "lg-max": { max: "992px" },
        xl: "1200px",
        "xl-max": { max: "1200px" },
        "2xl": "1320px",
        "2xl-max": { max: "1320px" },
        "3xl": "1600px",
        "3xl-max": { max: "1600px" },
        "4xl": "1850px",
        "4xl-max": { max: "1850px" },
      }
    },
  },
  plugins: [],
}

// black: {
//   100: "#cdcdcf",
//   200: "#9a9b9e",
//   300: "#686a6e",
//   400: "#35383d",
//   500: "#03060d",
//   600: "#02050a",
//   700: "#020408",
//   800: "#010205",
//   900: "#010103"
// },

// black: {
//   100: "#ced0d1",
//   200: "#9da0a3",
//   300: "#6c7176",
//   400: "#3b4148",
//   500: "#0a121a",
//   600: "#080e15",
//   700: "#060b10",
//   800: "#04070a",
//   900: "#020405"
// },

