/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        secondary: "#E8F4E8",
        accent: "#2D7A4F",
        "accent-light": "#4CAF50",
        neutral: "#FAFAF8",
        grey: "#3d3d3d",
        "grey-light": "#6b7280",
        cream: "#F5F0E8",
      },
      fontFamily: {
        grandstander: ["Grandstander", "cursive"],
        outfit: ["Outfit", "sans-serif"],
        rasa: ["Rasa", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        tiny: ["0.625rem", { lineHeight: "1rem" }],
        xsmall: ["0.75rem", { lineHeight: "1.25rem" }],
        small: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        medium: ["1.125rem", { lineHeight: "1.75rem" }],
        large: ["1.25rem", { lineHeight: "2rem" }],
        larger: ["1.875rem", { lineHeight: "2.5rem" }],
        largest: ["2.25rem", { lineHeight: "2.75rem" }],
        xlarge: ["3rem", { lineHeight: "3.5rem" }],
      },
      animation: {
        "bubble-peek-left": "bubblePeekLeft 3s ease-in-out infinite",
        "bubble-peek-right": "bubblePeekRight 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        bubblePeekLeft: {
          "0%, 100%": { transform: "translateX(-20%) scale(0.9)", opacity: "0.6" },
          "50%": { transform: "translateX(0%) scale(1)", opacity: "1" },
        },
        bubblePeekRight: {
          "0%, 100%": { transform: "translateX(20%) scale(0.9)", opacity: "0.6" },
          "50%": { transform: "translateX(0%) scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
