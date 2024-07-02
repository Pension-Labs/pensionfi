/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primario: '#78fdceff',
				secundario: '#70f5b7',
				acento: '#059669',
				error: '#ffa8a8',
				error_acento: '#ff2b2b',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
