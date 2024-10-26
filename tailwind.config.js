/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"CustomFont1"', "times-new-roman"],
        customFont2: ['"CustomFont2"', "Garamond"],
        satisfy: ['Satisfy', 'cursive'],
        // Add more custom font families as needed
      },
      spacing: {
        header: '4rem', // Adjust based on actual header height
        'app-menu': '2rem',
        'app-menu-sm': '1rem',
      },
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          100: '#dedeff',  // Primary deep blue
          200: '#757de8',  // Lighter blue
          300: '#3F51B5',  // Very light blue
        },
        accent: {
          100: '#2196F3',  // Accent bright blue
          200: '#003f8f',  // Darker accent blue
        },
        text: {
          100: '#333333',  // Primary dark text
          200: '#5c5c5c',  // Secondary lighter text
        },
        bg: {
          100: '#FFFFFF',  // Pure white background
          200: '#f5f5f5',  // Light gray background
          300: '#cccccc',  // Medium gray background
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  ins: [],
};