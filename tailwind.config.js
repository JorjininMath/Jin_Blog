/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0d",
        graphite: "#151518",
        mist: "#a7a7ad",
        glow: "#8ab4f8",
        accent: "#5a67d8"
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};
