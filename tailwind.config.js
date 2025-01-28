/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // Ensure all relevant file types are listed
		'./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // Add Shadcn paths
	],
	theme: {
		extend: {

		}
	},
	plugins: [
		require("tailwindcss-animate")
	],
}

