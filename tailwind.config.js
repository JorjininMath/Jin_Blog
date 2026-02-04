/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Apple-style: 亮色主背景 + 深色文字 */
        ink: "#1d1d1f",
        graphite: "#f5f5f7",
        mist: "#6e6e73",
        "mist-light": "#86868b",
        glow: "#0071e3",
        accent: "#0071e3",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        "apple-hero": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "apple-title": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
