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

