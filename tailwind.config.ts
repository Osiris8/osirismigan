import { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [daisyui, require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        monochrome: {
          primary: "#171717", // neutral-900
          "primary-focus": "#262626", // neutral-800
          "primary-content": "#fafafa", // neutral-50

          secondary: "#404040", // neutral-700
          "secondary-focus": "#525252", // neutral-600
          "secondary-content": "#f5f5f5", // neutral-100

          accent: "#262626", // neutral-800
          "accent-focus": "#404040", // neutral-700
          "accent-content": "#fafafa", // neutral-50

          neutral: "#171717", // neutral-900
          "neutral-focus": "#262626", // neutral-800
          "neutral-content": "#fafafa", // neutral-50

          "base-100": "#ffffff", // white
          "base-200": "#f5f5f5", // neutral-100
          "base-300": "#e5e5e5", // neutral-200
          "base-content": "#171717", // neutral-900

          info: "#737373", // neutral-500
          success: "#262626", // neutral-800
          warning: "#404040", // neutral-700
          error: "#171717", // neutral-900

          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.3rem",
          "--rounded-badge": "0.25rem",

          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "1rem",
          "--border-btn": "2px",
        },
      },
    ],
  },
};

export default config;
