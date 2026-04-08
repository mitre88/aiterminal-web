import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Cascadia Code",
          "Consolas",
          "Monaco",
          "monospace",
        ],
      },
      colors: {
        terminal: {
          bg: "#0A0A0A",
          green: "#00FF41",
          "green-dim": "#00CC33",
          "green-glow": "rgba(0, 255, 65, 0.15)",
          amber: "#FFB000",
          text: "#E0E0E0",
          "text-dim": "#888888",
          border: "#1A1A1A",
          "border-green": "rgba(0, 255, 65, 0.3)",
        },
      },
      animation: {
        "scanline": "scanline 8s linear infinite",
        "blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) 1s forwards",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 255, 65, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 255, 65, 0.6), 0 0 60px rgba(0, 255, 65, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      boxShadow: {
        "green-glow": "0 0 20px rgba(0, 255, 65, 0.4), 0 0 60px rgba(0, 255, 65, 0.1)",
        "green-sm": "0 0 8px rgba(0, 255, 65, 0.3)",
        "terminal": "0 0 0 1px rgba(0, 255, 65, 0.3), 0 4px 24px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
