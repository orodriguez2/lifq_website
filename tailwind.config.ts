import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // LiFQ brand palette
        brand: {
          blue: {
            DEFAULT: "#1976D2",
            50: "#E3F2FD",
            100: "#BBDEFB",
            500: "#1976D2",
            600: "#1565C0",
            700: "#0D47A1",
            900: "#0D2A47",
          },
          teal: {
            DEFAULT: "#26A69A",
            50: "#E0F2F1",
            100: "#B2DFDB",
            500: "#26A69A",
            600: "#00897B",
            700: "#00695C",
          },
          orange: {
            DEFAULT: "#FB8C00",
            50: "#FFF3E0",
            100: "#FFE0B2",
            500: "#FB8C00",
            600: "#F57C00",
            700: "#E65100",
          },
          navy: "#0D2A47",
          surface: "#FAFBFC",
        },
        // shadcn/ui semantic tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Loaded via next/font in src/app/layout.tsx
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Tighter scale matching brand voice
        "display-1": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-2": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }],
        "h1": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        "h2": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }],
        "h3": ["1.25rem", { lineHeight: "1.35", fontWeight: "500" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.4s ease-out",
      },
    },
  },
  plugins: [],
}

export default config
