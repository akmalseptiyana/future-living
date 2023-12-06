import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        title: "#4D265A",
        link: "#F0F1F3",
        placeholder: "#667085",
        icon: "#71517B",
        bodyText: "#3D4350",
        card: "#E2C5EB",
        medsos: "#292D35",
        inputForm: "#C2C6CE",
        key: "#525A6A",
        chips: "#371B40",
      },
      animation: {
        pop: "pop 2s both",
      },
      keyframes: {
        pop: {
          from: {
            transform: "scale(0)",
            opacity: "0",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
