const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	// Specify the mode for dark mode
	darkMode: 'class', // or 'media' or 'class'

	// Specify the paths to all of the template files in your project
	content: ['./src/**/*.{html,js,svelte,ts}'],

	// Extend the default theme
	theme: {
		extend: {
			// Extend or override the default colors
			colors: {
				// Add custom colors here
			},

			// Extend or override the default font families
			fontFamily: {
				// Add custom font families here
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}

			// Extend or override other theme options as needed
		}
	},

	// Add Daisy UI plugin
	plugins: [require('daisyui')],

	// Customize Daisy UI theme
	daisyui: {
		themes: ['light', 'dark', 'dracula']
	}
};

// import { fontFamily } from 'tailwindcss/defaultTheme';

// /** @type {import('tailwindcss').Config} */
// const config = {
// 	daisyui: {
// 		themes: ['light', 'dark', 'dracula']
// 	},
// 	darkMode: ['class'],
// 	content: ['./src/**/*.{html,js,svelte,ts}'],
// 	safelist: ['dark'],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		extend: {
// 			colors: {
// 				border: 'hsl(var(--border) / <alpha-value>)',
// 				input: 'hsl(var(--input) / <alpha-value>)',
// 				ring: 'hsl(var(--ring) / <alpha-value>)',
// 				background: 'hsl(var(--background) / <alpha-value>)',
// 				foreground: 'hsl(var(--foreground) / <alpha-value>)',
// 				primary: {
// 					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
// 					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
// 				},
// 				secondary: {
// 					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
// 					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
// 				},
// 				destructive: {
// 					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
// 					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
// 				},
// 				muted: {
// 					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
// 					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
// 				},
// 				accent: {
// 					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
// 					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
// 				},
// 				popover: {
// 					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
// 					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
// 				},
// 				card: {
// 					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
// 					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
// 				}
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)'
// 			},
// 			fontFamily: {
// 				sans: [...fontFamily.sans]
// 			}
// 		}
// 	}
// };

// export default config;
