/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Barlow", "Arial", "sans-serif"],
			},
			borderWidth: {
				10: "10px",
			},
			colors: {
				dark: "#2E5070",
				light: "#EDF8F9",
				green: "#95BB6F",
				gold: "#F6C956",
				fuschia: "#C6EAE3",
			},
			screens: {
				xs: "480px"
			}
		},
	},
	plugins: [],
};
