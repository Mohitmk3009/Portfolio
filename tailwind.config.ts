import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'orange': '#FFA500',
        'purple': '#6A0DAD',
      },
      boxShadow: {
        'custom-shadow': '0 0 0 1px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(110, 110, 110, 0.123)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px 2px currentColor' },
          '50%': { boxShadow: '0 0 20px 4px currentColor' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        glow: 'glow 1.5s infinite',
        bounce: 'bounce 1.5s infinite',
      },
      textStroke: {
        DEFAULT: '1px',  // You can customize thickness here
        lg: '2px',
      },
      utilities: {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      },

    },
    
  },
  plugins: [],
};
export default config;
