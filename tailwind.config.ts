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
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
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
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.stroke-1': {
            '-webkit-text-stroke': '1px',
          },
          '.stroke-2': {
            '-webkit-text-stroke': '2px',
          },
          '.stroke-white': {
            '-webkit-text-stroke-color': '#ffffff',
          },
          '.stroke-black': {
            '-webkit-text-stroke-color': '#000000',
          },
        });
      }
    ],
  },
  plugins: [],
};
export default config;
