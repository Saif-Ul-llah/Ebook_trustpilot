import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1C3B6E",
        crimson: "#C0392B",
        steel: "#5A7080",
        muted: "#8899AA",
        cream: "#EDE8E0",
        creamAlt: "#E0D9CF",
        darkNavy: "#152D55",
        trust: "#00B67A",
        trustDark: "#008F60",
        ink: "#152D55",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(28, 59, 110, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
