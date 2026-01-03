import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#001C58",
          light: "#1F5795",
          dark: "#0A0A0A",
        },
        secondary: {
          main: "#F5F5F5",
          light: "#FFFFFF",
          dark: "#7D7D7D",
        },
        accent: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#DC2626",
        },
        background: {
          default: "#FFFFFF",
          paper: "#F5F5F5",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-suit)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "10px",
        lg: "24px",
        xl: "40px",
      },
    },
  },
  plugins: [],
};
export default config;

