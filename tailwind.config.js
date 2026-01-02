import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"; 
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    backgroundImage: {
      'bgGradient': 'linear-gradient(to right, #1e1d22, #2a292f)',
    },
    colors: {
      primary: '#1D89A3',
      secondary: '#DC913F',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 60s linear infinite',
    },
  },
};
export const plugins = [
  addVariablesForColors,
];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}