/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'aegee': {
					'50': '#fff2ff',
					'100': '#fee4ff',
					'200': '#fec8ff',
					'300': '#ff9cfd',
					'400': '#ff62f9',
					'500': '#ff27fe',
					'600': '#e907f2',
					'700': '#c701ca',
					'800': '#a404a4',
					DEFAULT: '#70086e',
					'950': '#5b0059',
				},
				"header": "#1a202c40",
			},
			fontFamily: {
				'aegee': '"Bebas Neue", sans-serif'
			}
		},
	},
	plugins: [],
}
