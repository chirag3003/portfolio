const colors = require("tailwindcss/colors");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Roboto Mono", "sans-serif"],
		},
		colors: {
			...colors,
			black: "#1A1A2E",
			pink: "var(--primary-color)",
			indigo: "#36365E",
		},
	},
	variants: {
		extend: {
			animation: ["motion-safe"],
		},
	},
	plugins: [],
};
