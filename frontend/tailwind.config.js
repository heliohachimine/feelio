/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        utils: {
          black: "#000000",
          white: "#ffffff",
          grey: "#f4f4f4",
          success: "#149700",
          error: "#e20d18",
        },
        main: {
          purple_900: "#33304c",
          purple_500: "#867bdf",
          purple_400: "#a295fc",
          purple_200: "#cdc7fd",
          purple_100: "#f4f3fe",

          yellow_500: "#fbdc0c",
          yellow_400: "#fce33e",
          yellow_200: "#fdea70",
        },
        emotions: {
          happiness: "#fdef95",
          sadness: "#c7e6f2",
          anger: "#faac9d",
          love: "#f2c7cf",
          fear: "#c8b4e3",
          peace: "#b8e4c2",
          surprise: "#fcddb5",
          hope: "#d3eca7",
          nostalgia: "#f1d3cc",
          trust: "#a2d3da",
        },
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      animation: {
        draw: 'draw 15s forwards',
      },
      keyframes: {
        draw: {
          to: {
            "stroke-dasharray": "0",
          },
        }
      },
      backgroundImage:{
        "waves": "url('./src/assets/backgrounds/bg-waves.svg')",
      },
      spacing: {
        32: "8rem",
        64: "16rem",
        128: "32rem",
      },
      borderWidth: {
        6: "6px",
      },
    
      strokeWidth:{
        20: "20px",
      }
    },
    plugins: [],
  },
};
