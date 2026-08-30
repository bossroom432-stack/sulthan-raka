/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { background: "#0D1116", panel: "#171D24", "panel-2": "#1D242C", marble: "#EBE5D6", "marble-dim": "#A6A192", gold: "#C6A15B", "gold-soft": "rgba(198,161,91,0.14)", patina: "#6E8377", terracotta: "#A6503B", line: "rgba(235,229,214,0.10)" },
    fontFamily: { sans: ["Inter", "sans-serif"], display: ["Cinzel", "serif"], mono: ["IBM Plex Mono", "monospace"] },
    keyframes: {
      dust: { "0%": { transform: "translateY(0) translateX(0)", opacity: "0" }, "10%": { opacity: "0.45" }, "90%": { opacity: "0.25" }, "100%": { transform: "translateY(-420px) translateX(30px)", opacity: "0" } },
      pulseRing: { "0%": { transform: "scale(0.6)", opacity: "0.8" }, "100%": { transform: "scale(1.9)", opacity: "0" } },
    },
    animation: { dust: "dust linear infinite", "pulse-ring": "pulseRing 2s ease-out infinite" },
  } },
  plugins: [],
};
