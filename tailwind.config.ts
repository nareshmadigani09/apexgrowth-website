import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07111f",
        ink: "#0f172a",
        brand: "#2563EB",
        aqua: "#06B6D4",
        emerald: "#10B981",
        soft: "#F8FAFC"
      },
      boxShadow: {
        glow: "0 20px 80px rgba(37,99,235,.25)"
      }
    },
  },
  plugins: [],
};
export default config;
