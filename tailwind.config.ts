import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Lora",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "serif",
      ],
      heading: ["Raleway", "sans-serif"],
      logo: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(180deg, #2F3E46 0%, #4ABEFF 100%)",
      },
      colors: {
        primary: {
          DEFAULT: "#4ABEFF", // Joyful Sky
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#4ABEFF",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        secondary: {
          DEFAULT: "#FDF6EC", // Soft Sand
          50: "#fefefe",
          100: "#FDF6EC",
          200: "#fbecdb",
          300: "#f6d8b5",
          400: "#f1bb87",
          500: "#e89f57",
          600: "#df8232",
          700: "#be6a22",
          800: "#9a551f",
          900: "#7d461e",
          950: "#432310",
        },
        accent: {
          DEFAULT: "#FF6B6B", // Coral Bloom
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#f83b3b",
          600: "#e51d1d",
          700: "#c11616",
          800: "#a01616",
          900: "#841818",
          950: "#480707",
        },
        textLight: "#2F4F4F", // Cool Slate
        textDark: "#F8F9FA", // Soft White
        bgLight: "#FFFFFF", // Crisp White
        bgDark: "#2F3E46", // Slate Depth
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
