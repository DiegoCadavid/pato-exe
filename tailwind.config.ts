import type { Config } from "tailwindcss";

// TODO Agregar animaciones en la entrada de ventanas y iconos

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: "0.8rem",
      },
      transitionProperty: {
        size: "width, height",
        position: "left, top, right, bottom",
        window: "width, height, left, top, opacity",
      },
      keyframes: {
        up: {
          "0%": {
            transform: "translateY(8px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        show: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          },
        },
      },
      animation: {
        up: "up 0.3s ease-out 1",
        show: "show 0.15s ease-out 1",
      },
    },
  },
  plugins: [],
};
export default config;
