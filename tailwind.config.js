/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svelte.md,md,svx}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
