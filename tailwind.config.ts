
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors based on the design spec
				"navy": {
					DEFAULT: "#011E3C",
					50: "#F0F7FF",
					100: "#E1EEFF",
					200: "#B8D8FF",
					300: "#85B8FF",
					400: "#5A94FF",
					500: "#3366FF",
					600: "#1940D5",
					700: "#0F2C91",
					800: "#0A1D64",
					900: "#051237"
				},
				"dd-green": {
					DEFAULT: "#25D366",
					50: "#E3FFF0",
					100: "#C5FFE0",
					200: "#92FFB7",
					300: "#5BF792",
					400: "#25D366",
					500: "#1CA44F",
					600: "#168242",
					700: "#106134",
					800: "#0A4022",
					900: "#052211"
				},
				"dd-gold": {
					DEFAULT: "#FFB800",
					50: "#FFF9E5",
					100: "#FFF2CC",
					200: "#FFE599",
					300: "#FFD966",
					400: "#FFCC33",
					500: "#FFB800",
					600: "#E6A800",
					700: "#B38300",
					800: "#805D00",
					900: "#4D3800"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"pulse-glow": {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
					"50%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)" }
				},
				"count-up": {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up 0.5s ease-out forwards",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"pulse-glow": "pulse-glow 2s infinite",
				"count-up": "count-up 1s ease-out forwards",
				"float": "float 3s ease-in-out infinite"
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'ibm-plex': ['"IBM Plex Sans"', 'sans-serif']
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
