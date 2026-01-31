import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0B7A9F",
          foreground: "#FFFFFF",
          50: "#E6F4F8",
          100: "#CCE9F1",
          200: "#99D3E3",
          300: "#66BDD5",
          400: "#33A7C7",
          500: "#0B7A9F",
          600: "#09627F",
          700: "#074A5F",
          800: "#053140",
          900: "#021920",
        },
        secondary: {
          DEFAULT: "#E5DEFF",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F6F6F7",
          foreground: "#555555",
        },
        accent: {
          DEFAULT: "#D3E4FD",
          foreground: "#222222",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        green: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(30px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "slide-in-right": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(30px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "scale-in": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.95)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 122, 159, 0.1)',
        'elevated': '0 10px 40px -10px rgba(11, 122, 159, 0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -12px rgba(11, 122, 159, 0.25)',
        'glow': '0 0 30px -5px rgba(11, 122, 159, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0B7A9F, #3B82F6)',
        'gradient-hero': 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #FFFFFF 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(11, 122, 159, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(11, 122, 159, 0.05) 0px, transparent 50%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
