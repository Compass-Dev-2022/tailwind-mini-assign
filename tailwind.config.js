/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        5: "5px",
        9: "9px",
        24: "24px",
        20: "20px",
        12: "12px",
        16: "16px",
        30: "30px",
      },
      borderRadius: {
        4: "4px",
        10: "10px",
      },
      boxShadow: {
        customShadw: "0px 0px 11px 5px var(--accent-40)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
