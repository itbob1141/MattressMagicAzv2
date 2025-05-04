/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        copaBlue: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fc",
          300: "#89CFF0", // Original color moved to 300
          400: "#63b8e8",
          500: "#3b9ddb", // Darker for better contrast
          600: "#2b82c9", // Good for primary actions
          700: "#2368af", // Excellent contrast with white
          800: "#1e518d", // Very dark blue
          900: "#1a3f6f", // Darkest shade
          950: "#0f2847", // Nearly navy
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
